import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 9999;
const currentFile = fileURLToPath(import.meta.url);
const app = express();

app.use(
  "/view",
  express.static(path.resolve(currentFile, "..", "view/public"))
);
app.use(express.json());

app.get("/", (_req, res) => {
  res.sendFile(path.resolve(currentFile, "..", "view/index.html"));
});

app.get("/view-json", (_req, res) => {
  res.sendFile(path.resolve(currentFile, "..", "view/view-json.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
