require('dotenv').config();
const express = require('express');
const aiRoutes = require('./src/routes/ai.routes');
const cors = require('cors');

const app = express();

// Multiple origins allow karne ka method
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175',
  'http://localhost:5176', // tumhara current local port
  'https://ai-code-reviewer-git-main-hritik-s-projects-652fd219.vercel.app' // vercel ka URL
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log(`❌ CORS blocked for origin: ${origin}`);
      callback(new Error('CORS not allowed'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/ai', aiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server is running on ${PORT}`);
});


process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT', () => process.exit(0));
