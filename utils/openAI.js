const axios = require('axios');

const askDeepSeek = async (question) => {
    const apiKey = process.env.DEEPSEEK_API_KEY;
    try {
        const response = await axios.post(
            'https://api.deepseek.com/v1/chat/completions',
            {
                model: 'deepseek-chat',
                messages: [{ role: 'user', content: question }],
                temperature: 0.7
            },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("🔥 DeepSeek API ERROR:", error.response?.data || error.message);
        throw new Error('AI không phản hồi từ DeepSeek');
    }
};

module.exports = { askDeepSeek };
