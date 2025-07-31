import express from 'express';
import decideMove from './bot.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('SigmaBot running');
});

app.post('/action', (req, res) => {
    const state = req.body;
    if (!state) {
        return res.status(400).json({ error: 'Pas de state' });
    }
    const decision = decideMove(state);
    res.json(decision);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("running");
});