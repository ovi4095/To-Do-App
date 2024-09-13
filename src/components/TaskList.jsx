import { useState } from "react";
import EmptyView from "./EmptyView";
import SelectMode from "./SelectMode";
import Button from "./Button";

const TaskList = ({
  tasks,
  handleDeleteTask,
  handleToggleCheckboxInTask,
  handleBackToMainList,
  activeSearch,
}) => {
  const [selectedBy, setSelectedBy] = useState("default");

  const handleSelectedBy = (value) => {
    setSelectedBy(value);
  };

  const selectedTask = tasks.filter((task) => {
    if (selectedBy === "All Tasks" || "default" === selectedBy) {
      return task;
    } else if (selectedBy === "Completed Tasks" && task.checked) {
      return task;
    } else if (selectedBy === "Active Tasks" && !task.checked) {
      return task;
    }
  });

  return (
    <ul className="task-list">
      {tasks.length === 0 && <EmptyView activeSearch={activeSearch} />}
      {tasks.length > 0 && activeSearch === false ? (
        <SelectMode handleSelectedBy={handleSelectedBy} />
      ) : null}
      {selectedTask.map((task) => {
        return (
          <Task
            activeSearch={activeSearch}
            task={task}
            key={task.id}
            handleDeleteTask={handleDeleteTask}
            handleToggleCheckboxInTask={handleToggleCheckboxInTask}
          />
        );
      })}
      {activeSearch === true ? (
        <div
          className={`back-to-main-list ${
            tasks.length !== 0 ? "back-to-main-list-not-empty" : ""
          }`}
        >
          <Button
            onclick={handleBackToMainList}
            label={"Back to main list"}
            type={"primary"}
          />
        </div>
      ) : null}
    </ul>
  );
};

function Task({ task, handleDeleteTask, handleToggleCheckboxInTask }) {
  return (
    <li className="task">
      <label>
        <input
          onChange={() => handleToggleCheckboxInTask(task.id)}
          type="checkbox"
          checked={task.checked}
        />
        {task.label}
      </label>
      <button onClick={() => handleDeleteTask(task.id)}>❌</button>
    </li>
  );
}

export default TaskList;
