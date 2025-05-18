import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import mysql from "mysql";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Setup for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config
dotenv.config();
const app = express();
const port = process.env.PORT || 8800;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/upload", express.static(path.join(__dirname, "../client/public/upload")));

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL database.");
});

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload"); // or use S3/Cloudinary in production
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });

// File upload route
app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Test route (optional)
app.get("/", (req, res) => {
  res.send("API is running.");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
