const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing search query' });

  const url = `https://images-api.nasa.gov/search`;
  try {
    const response = await axios.get(url, {
      params: {
        q,
        media_type: 'image'
      }
    });

    const results = response.data.collection.items.map(item => ({
      title: item.data[0]?.title,
      description: item.data[0]?.description,
      imageUrl: item.links ? item.links[0]?.href : '',
    }));

    res.json(results);
  } catch (error) {
    console.error('❌ NASA search error:', error.message);
    res.status(500).json({ error: 'Search failed' });
  }
});

module.exports = router;
