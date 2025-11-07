require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { postContact } = require("./controllers/contactController");
const { submitProject } = require("./controllers/projectController");

const app = express();

// ✅ Allow Hostinger + Localhost (CORS FIX)
app.use(
  cors({
    origin: [
      "https://springgreen-wasp-401093.hostingersite.com",
      "https://arikab2b.com",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ connect MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB error", err);
    process.exit(1);
  });

// ✅ routes
app.get("/", (req, res) => res.send("OK"));
app.post("/api/contact", postContact);
app.post("/api/start", submitProject);
app.get("/api/start", (req, res) => {
  res.json({ message: "✅ Backend route is active!" });
});

// ✅ start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server listening on", PORT));
