const PORT = 8000;
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = '';

app.post('/completions', async (request, response) => {
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{role: 'user', content: 'How are you?'}],
      max_tokens: 50,
    })
  }
  try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', options);
      const data = await response.json();
      response.send(data);
  } catch (error) {
      console.error(error);
  }
})

app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));