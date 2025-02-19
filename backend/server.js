import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server running successfully");
});

app.get('/api/greet', (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});