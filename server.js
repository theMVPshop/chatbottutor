import express from "express";
import cors from "cors";
import path from "path";
import url from "url";
import "dotenv/config";
import OpenAI from "openai";
import axios from "axios";
import chatRouter from "./server/routes/chat.js";

import { Server } from "socket.io";
import { createServer } from 'http';


export const openai = new OpenAI({
  apiKey: process.env.API_KEY
});

const app = express();

app.use(cors());
app.use(express.json());

const __filename = url.fileURLToPath(import.meta.url); // Converts module URL to file path
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, './client/dist')));

app.use("/api/chat", chatRouter);

app.get('*', function (_req, res) {
  res.sendFile(path.join(__dirname, './client/dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

const httpServer = createServer(app);
const io = new Server(httpServer, {   // Pass httpServer to the Server from socket.io
  cors: {
    origin: "http://localhost:5173", // Make sure this matches your client-side URL
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('gpt-request', async (data) => {
    console.log("gpt request socket hit")
    try {
      const { module, prompt } = data;
      console.log(data)
      let moduleContext = "";
      if (module == 101) {
        // System message section catered to Web 101
        moduleContext = "1. Box Model: Border 2. Box Model: Margin 3. Box Model: Padding 4. Content Width & Height + New Length Units 5. Flex and Relevant Properties 6. Invoke a JavaScript Function 7. Parameters vs Arguments 8. Nested Arrays 9. Type Object-Literal 10. Type Array 11. First Two Array Methods: .pop() and .push() 12. Using Trello for Project Management 13. Introduction to CSS Animations 14. CSS Reset 15. The DOM and JavaScript Introduction, including the Document Object Model (DOM), Properties, Methods, and Event Listeners 16. JavaScript Keywords and the Use of let and const to Declare Variables 17. Function Signatures in JavaScript, including Traditional and Arrow Function Syntax 18. Object Modeling in JavaScript: Understanding Objects, Properties, Methods, and Events 19. CSS Grid Areas 20. CSS Specificity and Combinators 21. The CSS Box Model 22. UX (User Experience) & UI (User Interface) Design and Wireframes 23. The Button Element in HTML and Event Listeners 24. Forms in HTML, Accessing and Using Element Properties, and Event Listener Methods 25. Common Event Listeners in JavaScript including Mouse, Keyboard, Form, and Window Events";
      } else if (module == 211) {
        moduleContext = "";
      } else if (module == 311) {
        moduleContext = "";
      } else if (module == 411) {
        moduleContext = "";
      } else (console.error("Class selected is not valid."))


      const stream = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
          // Add a system message
          {
            "role": "system",
            // Insert ${moduleContext} wherever needed when applying the module context to the prompt.
            "content": `You are an upbeat, encouraging tutor of a web development bootcamp specializing in HTML, CSS, JavaScript, Node.js, Express, MySQL, and React. Your role is to help students understand these concepts or debug their code by explaining ideas and asking students questions. Start by introducing yourself to the student as their AI-Tutor who is happy to help them with any questions related to web development. Only ask one question at a time. First, ask them what they would like to learn about within web development (e.g., HTML, CSS, JavaScript, Node.js, Express, MySQL, or React). Wait for their response. Then ask them what they know already about the topic they have chosen. Wait for a response. Given this information, help students understand the chosen topic by providing explanations, examples, analogies specific to that topic. These should be tailored to the student's learning level and prior knowledge or what they already know about the chosen concept. Your primary goal is to guide the student in finding solutions on their own. Avoid providing direct answers or solutions to problems. Instead, help students generate their own answers by asking leading questions, providing hints, and pointing out potential issues in their code. Encourage them to think critically and debug their code. Ask students to explain their thinking process and guide them step-by-step through the problem-solving journey. If the student is struggling, be patient and offer hints or suggest areas where they could review or revise their code. When pushing students for information, end your responses with a question to encourage them to keep generating ideas. Once a student shows progress or understanding given their learning level, ask them to implement the changes themselves and explain why those changes work. Celebrate their successes and provide positive reinforcement. Let them know that mistakes are part of the learning process, and you're there to support them in their learning journey. Encourage them to test their solutions and iterate on their code. When a student demonstrates improved understanding, you can move the conversation to a close, providing encouragement and reminding them that learning to code is a journey. Offer assistance if they have further questions, but always guide rather than solve.`
          },
          ...prompt.message,
          prompt.newMessage
        ],
        stream: true,
      });
      for await (const chunk of stream) {
        socket.emit('gpt-response', chunk.choices[0]?.delta?.content || '');
      }
    } catch (error) {
      console.error('Error with GPT request:', error);
      socket.emit('gpt-error', 'Error processing your request');
    }
    finally {
      socket.emit('gpt-complete', 'The GPT stream has completed.');
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('openai-request', async (data) => {
    try {

    } catch (error) {
      console.error('Error with OpenAI request:', error);
      socket.emit('openai-error', 'Error processing your request');
    }
  })
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});