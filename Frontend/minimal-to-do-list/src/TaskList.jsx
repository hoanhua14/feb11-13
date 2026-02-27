import { useState } from "react";

const TaskList = () => {
  const [taskList, setTaskList] = useState(["mop", "clean", "wash"]);
  return (
    <div>
      {" "}
      {taskList.map((task, index) => (
        <ul key={index}>{task}</ul>
      ))}{" "}
    </div>
  );
};
export default TaskList;
