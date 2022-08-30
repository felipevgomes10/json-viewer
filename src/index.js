import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { writeFile } from "fs/promises";

const PORT = 9999;
const currentFile = fileURLToPath(import.meta.url);
const app = express();

app.use("/static", express.static(path.resolve(currentFile, "..", "static")));
app.use(
  "/view",
  express.static(path.resolve(currentFile, "..", "view/public"))
);
app.use(express.json());

app.get("/", (_req, res) => {
  res.sendFile(path.resolve(currentFile, "..", "view/index.html"));
});

app.post("/view-json", async (req, res) => {
  const { body } = req;
  const jsonPath = path.resolve(currentFile, "..", "static/file.json");

  await writeFile(jsonPath, body.value, { encoding: "utf-8" });

  res.status(201).json({
    message: "done!",
    status: 201,
    ok: true,
    pathToFile: "static/file.json",
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
