// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/message', (req, res) => {
  const userMsg = req.body.message;

  // Simulate AI response
  const aiResponse = `You said: ${userMsg}. I'm just a basic AI right now!`;

  res.json({ response: aiResponse });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
