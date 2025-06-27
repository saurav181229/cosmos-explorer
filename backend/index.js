const express = require('express');
const cors = require('cors');
require('dotenv').config();

const apodRoute = require('./routes/apod');
const marsRoute = require("./routes/mars")
const neoRoute = require('./routes/neo');
const searchRoute = require('./routes/search');
const askRoute = require('./routes/ask');
 // Add this if you haven't already




const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/apod', apodRoute);
app.use('/api/mars',marsRoute)
app.use('/api/neo', neoRoute);
app.use('/api/search', searchRoute);
app.use('/api/ask', askRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
