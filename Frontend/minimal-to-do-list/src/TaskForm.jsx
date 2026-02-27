import { useState } from "react";

const TaskForm = () => {
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="taskname"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        required
      ></input>
      <button type="submit">Add task</button>
    </form>
  );
};
export default TaskForm;
