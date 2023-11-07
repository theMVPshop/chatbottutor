import express from "express";
import cors from "cors";
import path from "path";
import url from "url";
import "dotenv/config";
import OpenAI from "openai";
import axios from "axios";
import chatRouter from "./server/routes/chat";


export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const app = express();

app.use(cors());
app.use(express.json());

const __filename = url.fileURLToPath(import.meta.url);
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});