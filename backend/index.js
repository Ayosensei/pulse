const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/greeting', (req, res) => {
  res.json({
    greeting: "Good morning! BTC is up 3.2% today...",
    rates: { BTC_NGN: 85000000, USDT_NGN: 1610 },
    last_updated: new Date().toISOString()
  });
});

app.post('/alerts', (req, res) => {
  res.json({
    alert_id: "abc123",
    status: "active",
    message: `Alert set. We'll notify you when ${req.body.coin}/${req.body.currency} goes ${req.body.condition} ${req.body.threshold}.`
  });
});

app.post('/chat', (req, res) => {
  res.json({ reply: "This is a mock AI response from the Gemini API." });
});

app.get('/rates', (req, res) => {
  res.json({
    rates: [
      { pair: "USDT_NGN", current: 1610, signal: "WAIT" }
    ],
    last_updated: new Date().toISOString()
  });
});

app.post('/smart-swap', (req, res) => {
  res.json({
    swap_id: "swp_xyz789",
    status: "watching",
    message: "Smart swap armed."
  });
});

app.get('/smart-swap/analysis', (req, res) => {
  res.json({
    optimal_window: "2PM–5PM weekdays",
    suggested_target: 1635,
    confidence: "medium"
  });
});

app.get('/assets', (req, res) => {
  res.json({ total_balance_ngn: 2847500 });
});

app.get('/profile', (req, res) => {
  res.json({ display_name: "Ayooluwa", settings: {} });
});

app.patch('/profile/settings', (req, res) => {
  res.json({ status: "updated" });
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
