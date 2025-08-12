require('dotenv').config();
const express = require('express');
const aiRoutes = require('./src/routes/ai.routes');
const cors = require('cors');

const app = express();

// Multiple origins allow karne ka method
app.use(cors({
  origin: 'https://ai-code-reviewer-two-snowy.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'], // OPTIONS add kiya
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// OPTIONS requests ko handle karna (important for CORS)
app.options('*', cors({
  origin: 'https://ai-code-reviewer-two-snowy.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/ai', aiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on ${PORT}`);
});



