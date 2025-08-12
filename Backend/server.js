require('dotenv').config();
const express = require('express');
const aiRoutes = require('./src/routes/ai.routes');
const cors = require('cors');

const app = express();

// CORS with Vercel URL
app.use(cors({
    origin: "https://ai-code-reviewer-git-main-hritik-s-projects-652fd219.vercel.app/",
    methods: [ 'POST'],
    credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/ai', aiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
