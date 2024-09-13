import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  handleAddTask,
  handleRemoveAllTasks,
  handleRemoveAllCompletedTask,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddTask={handleAddTask} />
      <ButtonGroup
        handleRemoveAllTasks={handleRemoveAllTasks}
        handleRemoveAllCompletedTask={handleRemoveAllCompletedTask}
      />
    </div>
  );
};

export default Sidebar;
