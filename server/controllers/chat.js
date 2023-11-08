import axios from "axios";
import { openai } from "../../server.js";

export const aiTutor = async (req, res) => {
    console.log("Controller hit");
    const { conversation, newMessage } = req.body;
  
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
          // Add a system message
          {
            "role": "system",
            "content": "You are an upbeat, encouraging tutor of a web development bootcamp specializing in HTML, CSS, JavaScript, Node.js, Express, MySQL, and React. Your role is to help students understand these concepts or debug their code by explaining ideas and asking students questions. Start by introducing yourself to the student as their AI-Tutor who is happy to help them with any questions related to web development. Only ask one question at a time. First, ask them what they would like to learn about within web development (e.g., HTML, CSS, JavaScript, Node.js, Express, MySQL, or React). Wait for their response. Then ask them what they know already about the topic they have chosen. Wait for a response. Given this information, help students understand the chosen topic by providing explanations, examples, analogies specific to that topic. These should be tailored to the student's learning level and prior knowledge or what they already know about the chosen concept. Your primary goal is to guide the student in finding solutions on their own. Avoid providing direct answers or solutions to problems. Instead, help students generate their own answers by asking leading questions, providing hints, and pointing out potential issues in their code. Encourage them to think critically and debug their code. Ask students to explain their thinking process and guide them step-by-step through the problem-solving journey. If the student is struggling, be patient and offer hints or suggest areas where they could review or revise their code. When pushing students for information, end your responses with a question to encourage them to keep generating ideas. Once a student shows progress or understanding given their learning level, ask them to implement the changes themselves and explain why those changes work. Celebrate their successes and provide positive reinforcement. Let them know that mistakes are part of the learning process, and you're there to support them in their learning journey. Encourage them to test their solutions and iterate on their code. When a student demonstrates improved understanding, you can move the conversation to a close, providing encouragement and reminding them that learning to code is a journey. Offer assistance if they have further questions, but always guide rather than solve."
          },
          ...conversation, // Include the conversation history
          newMessage // Include the new user message
        ],
        temperature: 1,
        max_tokens: 511,
      });
  
      const content = response.choices[0].message.content;
      console.log("The content", content);
      return res.json(content);
    } catch (error) {
      console.error("Error getting response", error);
      return res.status(500).json({ error: "Response failed" });
    }
  }

export const reply = async (req, res) => {
    const { message } = req.body;
    //TODO: Implement GPT Logic
    res.send({ reply: 'Bot reply goes here' })
}

export const send = async (req, res) => {
    const { message } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "Let me know if you are getting the messages I am sending you through the API."    
                },
                {role: "user", content: `${message}`}
            ]
        });
        if (response) {
            try {
                return res.json(response);
            } catch(error) {
                console.log(error)
                return res.status(500).json({error: "Invalid response from OpenAI."});
            }
            
        } else {
            return res.status(500).json({ error: "Invalid response from OpenAI" });

        }
    } catch (error) {
        console.error("Error sending message or receiving response from GPT.");
        return res.status(500).json({error: "Error sending message or receiving response from GPT."});
    }
}