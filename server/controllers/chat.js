import axios from "axios";
import { openai } from "../../server";



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