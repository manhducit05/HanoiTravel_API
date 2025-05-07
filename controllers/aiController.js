const { askOpenRouter } = require('../utils/openRouter');

const askAI = async (req, res) => {
    try {
        const { question } = req.body;
        const response = await askOpenRouter(question);
        res.json({ answer: response });
    } catch (error) {
        console.error("❌ Lỗi từ OpenRouter:", error.message);
        res.status(500).json({ error: 'AI không phản hồi' });
    }
};

module.exports = { askAI };
