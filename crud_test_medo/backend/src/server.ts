import { initializeDataSource } from "./connection";
import express from "express";
import router from "./routes";

const app = express();
const PORT = 3001;
app.use(express.json());
app.use("/api", router);
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
