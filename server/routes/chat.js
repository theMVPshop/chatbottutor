import { Router } from "express";
import { reply, send } from "../controllers/chat.js";

const router = Router();

router.post('/reply', reply)
router.post('/send', send)

export default router;