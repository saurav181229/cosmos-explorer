const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { start_date, end_date } = req.query;

  if (!start_date || !end_date) {
    return res.status(400).json({ error: 'start_date and end_date are required (YYYY-MM-DD)' });
  }

  const url = 'https://api.nasa.gov/neo/rest/v1/feed';
  const params = {
    start_date,
    end_date,
    api_key: process.env.NASA_API_KEY,
  };

  try {
    const response = await axios.get(url, { params });
    const nearEarthObjects = response.data.near_earth_objects;

    // Flatten into an array of all objects with date, name, diameter, and velocity
    const parsedData = Object.entries(nearEarthObjects).flatMap(([date, objs]) =>
      objs.map(obj => ({
        name: obj.name,
        date,
        diameter_km: obj.estimated_diameter.kilometers.estimated_diameter_max,
        velocity_kmh: parseFloat(obj.close_approach_data[0].relative_velocity.kilometers_per_hour),
        distance_km: parseFloat(obj.close_approach_data[0].miss_distance.kilometers),
      }))
    );

    res.json(parsedData);
  } catch (error) {
    console.error("❌ Error fetching NEOs:", error.message);
    if (error.response) {
      console.error("❌ NASA error:", error.response.data);
    }
    res.status(500).json({ error: 'Failed to fetch NEO data' });
  }
});

module.exports = router;
