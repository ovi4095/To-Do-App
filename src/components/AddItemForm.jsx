import { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");
  const inputRef = useRef();
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
      return;
    }

    onAddTask(taskText);
    setTaskText("");

    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Task</h2>
      <input
        ref={inputRef}
        type="text"
        value={taskText}
        onChange={(e) => {
          setAlert(false);

          setTaskText(e.target.value);
        }}
        autoFocus={true}
        placeholder="Enter a new task"
      />
      <p className="error">{alert === true ? "Please enter a task" : null}</p>
      <br />
      <Button label="Add to list" />
    </form>
  );
};

export default AddItemForm;
