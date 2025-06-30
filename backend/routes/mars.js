const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { rover = 'curiosity', earth_date, camera } = req.query;
  console.log(rover)
  if (!earth_date) {
    return res.status(400).json({ error: 'earth_date query param is required (YYYY-MM-DD)' });
  }

  const nasaURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`;
  const params = {
    earth_date,
    api_key: process.env.NASA_API_KEY,
    ...(camera && { camera })
  };

  try {
    const response = await axios.get(nasaURL, { params });
    console.log(response.data)
    res.json(response.data.photos);
  } catch (error) {
    console.error(" Error fetching Mars photos:", error.message);
    if (error.response) {
      console.error("NASA error:", error.response.data);
    }
    res.status(500).json({ error: 'Failed to fetch Mars photos' });
  }
});

module.exports = router;
