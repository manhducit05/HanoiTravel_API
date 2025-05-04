const { askDeepSeek } = require('../utils/openAI');

const askAI = async (req, res) => {
    try {
        const { question } = req.body;
        const response = await askDeepSeek(question);
        res.json({ answer: response });
    }
    catch (error) {
        console.error("Lỗi từ DeepSeek:", error.response?.data || error.message);
        res.status(500).json({ error: 'AI không phản hồi' });
    }
};

module.exports = { askAI };
