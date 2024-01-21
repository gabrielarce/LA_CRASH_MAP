import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/config.js';
import Crash from './database/Models/Crashes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware for parsing request body
app.use(express.json());
// Middleware for handling CORS Policy
app.use(cors());
// Serve static files from the React build
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Serve React app for any route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

app.get('/api', async (req, res) => {
  try {
    let results = await Crash.find({
      collision_severity: {
        $in: [1, 2],
      },
    }).select('-_id');
    res.json(results);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
