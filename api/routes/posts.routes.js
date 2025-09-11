const { HumanMessage } = require("@langchain/core/messages");
const { Router } = require("express");
const { agent, agentMemory } = require("../services/agent.service.js");
const { generatePrompt } = require("../services/prompt.service.js");
const { getMessagesByThread } = require("../services/memory.service.js");

const router = Router();

router.post("/gen", async (req, res) => {
    const { message, threadId, params } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const prompt = generatePrompt({
            postTone: params?.postTone,
            postMaxLength: params?.postMaxLength,
            message
        });
        const newMessage = new HumanMessage(prompt);
        const threadIdFallback = threadId ?? `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

        const responseAgent = await agent.invoke(
            { messages: [newMessage] },
            { configurable: { thread_id: threadIdFallback } }
        )

        let content = responseAgent.messages[responseAgent.messages.length - 1].content;
        content = typeof content === "string" ? JSON.parse(content) : content;

        res.status(200).json({ content, threadId: threadIdFallback })
    } catch (error) {
        console.error("Error to generate posts", error);
        res.status(500).json({ error: error.message });
    }
});

router.get("/:thread_id", async (req, res) => {
    try {
        const { thread_id } = req.params;
        if (!thread_id) return res.status(400).json({ error: "thread_id is required!" });

        const memory = await getMessagesByThread(agentMemory, thread_id);
        res.status(200).json({ message: "Memory retrieved", status: 200, response: memory });
    } catch (error) {
        console.error("Error to get all messages from thread", error);
        res.status(500).json({ error: error.message || "Error to get all messages from thread" });
    }
});


module.exports = router;
