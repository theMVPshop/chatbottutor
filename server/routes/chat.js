import { Router } from "express";
import { reply } from "../controllers/chat";
import { send } from "../controllers/chat";

const router = Router();

router.post('/reply', reply)
router.post('/send', send)

export default router;