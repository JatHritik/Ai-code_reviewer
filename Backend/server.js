require('dotenv').config()
const express = require('express');
const aiRoutes = require('./src/routes/ai.routes')
const cors = require('cors')
const cors = require("cors");

app.use(cors({
  origin: ["ai-code-reviewer-hritik-s-projects-652fd219.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/ai', aiRoutes)
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})