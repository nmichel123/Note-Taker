const express = require("express");
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

// Initialize app and create a port
const app = express();
const PORT = process.env.PORT || 3030;

// Set up body parsing, static and route the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"))
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Starts server on port 3030
app.listen(PORT, () => console.log(` 🌎 => Listening on PORT: ${PORT}`));