const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const publicDirectory = __dirname;

app.use(express.static(publicDirectory, { extensions: ["html"] }));

app.listen(port, () => {
  console.log(`VAXSPORT disponible en http://localhost:${port}`);
});
 