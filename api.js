const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

 // Ganti dengan API Key RajaOngkir Anda

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Berhasil coy"))

app.get("/city", async (req, res) => {
  try {
    const apiKey = process.env.API;
    const response = await axios.get('https://api.rajaongkir.com/starter/city', {
      headers: {
        key: apiKey,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from RajaOngkir API');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});