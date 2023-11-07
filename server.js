import express from "express";
import cors from "cors";
import path from "path";
import url from "url";
import "dotenv/config";
import OpenAI from "openai";
import { Server } from "socket.io";
import { createServer } from 'http';

export const openai = new OpenAI();
const app = express();

app.use(cors());
app.use(express.json());

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, './client/dist')));

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
    try {
      const stream = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: data.prompt }],
        stream: true,
      });
      for await (const chunk of stream) {
        socket.emit('gpt-response', chunk.choices[0]?.delta?.content || '');
      }
    } catch (error) {
      console.error('Error with GPT request:', error);
      socket.emit('gpt-error', 'Error processing your request');
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});