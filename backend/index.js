const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Backend is running 🚀 v2" });
});

app.get("/api", (req, res) => {
    res.json({ data: "Hello from API 👋 v2" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000 v2");
});