/* Chuẩn bị bộ dữ liệu: Bạn cần chuẩn bị một bộ dữ liệu trong định dạng JSONL (JSON Lines). Mỗi dòng sẽ chứa một cặp câu hỏi và câu trả lời. Ví dụ:
- uploadData(): Mã tải dữ liệu lên OpenAI
- fineTuneModel():  Sau khi tải dữ liệu lên, bạn có thể yêu cầu OpenAI fine-tune mô hình với bộ dữ liệu này
- askFineTunedModel(): Sau khi quá trình fine-tuning hoàn tất (có thể mất một vài giờ), bạn có thể sử dụng mô hình đã fine-tune trong các câu hỏi tiếp theo
*/
const axios = require('axios');

const uploadData = async () => {
    const apiKey = process.env.OPENAI_API_KEY;
    const formData = new FormData();
    formData.append("file", fs.createReadStream("your_data.jsonl"));
    formData.append("purpose", "fine-tune");

    const response = await axios.post('https://api.openai.com/v1/files', formData, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            ...formData.getHeaders(),
        },
    });

    console.log("File uploaded:", response.data);
    return response.data.id; // Save file ID for the next step
};
const fineTuneModel = async (fileId) => {
    const apiKey = process.env.OPENAI_API_KEY;
    const response = await axios.post(
        'https://api.openai.com/v1/fine-tunes',
        {
            training_file: fileId,
            model: 'gpt-3.5-turbo', // or 'gpt-4' depending on your choice
        },
        {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        }
    );
    console.log("Fine-tuning started:", response.data);
};
const askFineTunedModel = async (question) => {
    const apiKey = process.env.OPENAI_API_KEY;
    const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
            model: 'YOUR_FINE_TUNED_MODEL_ID', // ID của mô hình fine-tuned
            prompt: question,
            max_tokens: 150,
        },
        {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        }
    );
    console.log('Response from fine-tuned model:', response.data);
    return response.data.choices[0].text;
};