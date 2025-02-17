import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const secretKey = process.env.JWT_SECRET || "your_jwt_secret";

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL Connection (Supabase)
const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Test Database Connection
pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL (Supabase)"))
  .catch(err => console.error("❌ Database Connection Error:", err));

// API Routes
app.get("/", (req, res) => {
  res.send("Welcome to Digital Rental Hub API!");
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
