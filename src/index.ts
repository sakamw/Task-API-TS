import express from "express";
import tasksRouter from "./routes/tasks.routes";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("<h1>Express + TS API</h1>");
});

app.use("/tasks", tasksRouter);

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`App running on port ${port}`));
