import express, { json } from "express";

const app = express();
const port = 3001;

app.listen(port, () => console.log(`running on ${port}`));

const tasks = [
  { id: 1, task: "do dishes", status: "completed" },
  { id: 2, task: "do laundry", status: "incomplete" },
  { id: 3, task: "mop the floor", status: "completed" },
];
app.get("/", (req, res) => {
  res.json(tasks);
});
app.post("/", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    task: "mop the room",
    status: "completed",
  };
  tasks.push(newTask);
  res.status(201).json(tasks);
  console.log("task created");
});
