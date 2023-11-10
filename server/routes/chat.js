import { Router } from "express";
import { aiTutor, reply, send } from "../controllers/chat.js";

const router = Router();

router.post('/reply', reply)
router.post('/send', send)

//Test Route for TestChat.jsx
router.post('/openai', aiTutor)

export default router;