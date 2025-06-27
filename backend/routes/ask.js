const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) return res.status(400).json({ error: 'Message required' });

  try {
    const aiResponse = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'meta-llama/llama-4-maverick:free',  // or try 'meta-llama/llama-3-8b-instruct'
        messages: [
          { role: 'system', content: 'You are a space assistant who explains NASA data and helps users explore the universe.' },
          { role: 'user', content: userMessage }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'http://localhost:3001', // required
          'Content-Type': 'application/json',
        }
      }
    );

    const reply = aiResponse.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('❌ OpenRouter AI error:', error.message);
    if (error.response) console.error(error.response.data);
    res.status(500).json({ error: 'AI failed to respond' });
  }
});

module.exports = router;
