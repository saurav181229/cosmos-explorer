const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const userMessage = req.body.message;
  console.log(process.env.OPENROUTER_API_KEY)
  test = 'k-or-v1-8ff02c09c82fc3d1bf64f7b5ac307c58801b1a18aea4bc21bc6c483336d3fcb1'
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
          'HTTP-Referer': 'http://localhost:3001', 
          'Content-Type': 'application/json',
        }
      }
    );

    const reply = aiResponse.data.choices[0].message.content;
    console.log(reply)
    res.json({ reply });
  } catch (error) {
    console.error('❌ OpenRouter AI error:', error.message);
    if (error.response) console.error(error.response.data);
    res.status(500).json({ error: 'AI failed to respond' });
  }
});

module.exports = router;
