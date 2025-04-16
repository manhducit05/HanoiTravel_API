const axios = require('axios');

const askChatGPT = async (question) => {
    const apiKey = process.env.OPENAI_API_KEY;
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: question }],
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log('OpenAI Response:', response.data);
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('OpenAI API Error:', error.response ? error.response.data : error.message);
        throw new Error('AI không phản hồi');
    }
};

module.exports = { askChatGPT };
