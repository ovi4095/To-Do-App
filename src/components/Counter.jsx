const Counter = ({ totalChecked, totalTasks }) => {
  return (
    <div className="counter">
      <b>{totalChecked}</b> / {totalTasks} tasks
    </div>
  );
};

export default Counter;
