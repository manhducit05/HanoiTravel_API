const axios = require('axios');

const askOpenRouter = async (question) => {
    const apiKey = process.env.OPENROUTER_API_KEY;

    try {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: 'openai/gpt-3.5-turbo',  // Có thể đổi sang: mistralai/mistral-7b-instruct hoặc anthropic/claude-3-haiku
                messages: [{ role: 'user', content: question }],
                temperature: 0.7
            },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'http://localhost:5000',       // Bắt buộc có!
                    'X-Title': 'Hanoi Travel Assistant'            // Tùy ý
                }
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("🔥 OpenRouter API ERROR:", error.response?.data || error.message);
        throw new Error('AI không phản hồi từ OpenRouter');
    }
};

module.exports = { askOpenRouter };
