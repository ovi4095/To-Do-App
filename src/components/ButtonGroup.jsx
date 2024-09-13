import Button from "./Button";
const ButtonGroup = ({
  handleRemoveAllTasks,
  handleRemoveAllCompletedTask,
}) => {
  return (
    <section className="button-group">
      <Button
        onclick={handleRemoveAllCompletedTask}
        type="secondary"
        label="Remove All Completed Tasks"
      />
      <Button
        onclick={handleRemoveAllTasks}
        type="secondary"
        label="Remove All Tasks"
      />
    </section>
  );
};

export default ButtonGroup;
