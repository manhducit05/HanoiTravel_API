const { askChatGPT } = require('../utils/openAI');

const askAI = async (req, res) => {
    try {
        const { question } = req.body;
        const response = await askChatGPT(question);
        res.json({ answer: response });
    } catch (error) {
        res.status(500).json({ error: 'AI không phản hồi' });
    }
};

module.exports = { askAI };
