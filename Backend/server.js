require('dotenv').config();
const express = require('express');
const aiRoutes = require('./src/routes/ai.routes');
const cors = require('cors');

const app = express();

// CORS config
app.use(cors({
  origin: ["https://ai-code-reviewer-hritik-s-projects-652fd219.vercel.app"],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// AI routes
app.use('/ai', aiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
