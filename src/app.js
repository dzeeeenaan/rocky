import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const results = [
  { name: "Dzeeno", score: 2425 },
  { name: "Ahmed", score: 2142 },
];

const rootPath = path.join(__dirname, "../www");

app.use(express.static(rootPath));

app.get("/api/scores", (req, res) => {
  res.send(results);
  console.log(chalk.green.bold("Sucess"));
});

app.listen(4000, () => {
  console.log("I started ");
});
