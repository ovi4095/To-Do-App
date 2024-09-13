const EmptyView = ({ activeSearch }) => {
  console.log(activeSearch);
  return (
    <section className="task-list-empty-msg">
      {activeSearch === false ? (
        <div className="empty-msg">
          <h3>No tasks yet!</h3>
          <p className="no-task">
            Add one with the <strong>{`"Add to list"`}</strong> button.
          </p>
        </div>
      ) : (
        <div className="empty-msg">
          <h3>No tasks Found!</h3>
          <p className="no-task">
            Go back to main list by clicking the{" "}
            <strong>{`"Back to main list"`}</strong> button or
          </p>
          <p>
            search for a task by clicking the <strong>{`"Search"`}</strong>{" "}
            button.
          </p>
        </div>
      )}
    </section>
  );
};

export default EmptyView;
