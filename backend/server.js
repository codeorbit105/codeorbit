require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { postContact } = require("./controllers/contactController");
const { submitProject } = require("./controllers/projectController");

const app = express();

// ✅ Allowed Origins (Hostinger, Main Website, Localhost)
const allowedOrigins = [
  "https://springgreen-wasp-401093.hostingersite.com", // demo/hostinger preview
  // "https://arikab2b.com",                             // another site
  "https://codeorbittechnologies.com", // your main frontend domain ✅
  "http://localhost:5173", // local dev
];

// ✅ CORS Setup (fix preflight + credentials)
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Handle preflight (important for POST/OPTIONS)
app.options("*", cors());

// ✅ Parse JSON
app.use(express.json());

// ✅ Connect MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB error:", err);
    process.exit(1);
  });

// ✅ Routes
app.get("/", (req, res) => res.send("OK"));
app.post("/api/contact", postContact);
app.post("/api/start", submitProject);
app.get("/api/start", (req, res) => {
  res.json({ message: "✅ Backend route is active!" });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
