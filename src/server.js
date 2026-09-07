const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Task Manager API is running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK"
  });
});

app.get("/api", (req, res) => {
  res.json({
    status: "User Fetched"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}/`);
});
