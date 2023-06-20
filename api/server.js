const express = require("express");
const process = require("process");
const axios = require("axios");
const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Route for generating the token
app.post("/generate-token", async (req, res) => {
  try {
    const endpoint = "https://devcore02.cimet.io/v1/generate-token";
    const apiKey = process.env.apiKey;

    const response = await axios.post(
      endpoint,
      {},
      {
        headers: {
          "Api-key": apiKey,
        },
      }
    );
    const token = response.data.data.token;
    console.log("token: ", token);
    res.json({ token });
  } catch (error) {
    console.error("Token generation failed:", error.message);
    res.status(500).json({ error: "Token generation failed" });
  }
});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
