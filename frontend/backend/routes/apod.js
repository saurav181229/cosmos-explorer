const express = require('express');
const axios = require('axios');
const router = express.Router();
const app = express()

console.log("hekllo")
router.get('/', async (req, res) => {
    // res.send("birdss")
  try {
    console.log("hello")
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch APOD', details: error.message });
  }
});

module.exports = router;
