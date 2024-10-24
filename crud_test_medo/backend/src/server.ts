import { initializeDataSource } from "./connection";
import express from "express";
import router from "./routes";
import {fileURLToPath} from 'url';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
app.use(express.json());
app.use("/api", router);

const buildPath = path.join(__dirname, "../../build");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, ".html"));
})

initializeDataSource()
  .then(() => {
    console.log(`Initializing.........`);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize data source:", error);
  });
