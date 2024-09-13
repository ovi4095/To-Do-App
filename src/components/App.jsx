import { useEffect, useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TaskList from "./TaskList";

function App() {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

  const [tasks, setTasks] = useState(tasksFromLocalStorage);

  const [searchResult, setSearchResult] = useState("");

  const [activeSearch, setActiveSearch] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTaskText) => {
    const newTask = {
      id: new Date().getTime(),
      label: newTaskText,
      checked: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setActiveSearch(false);
  };

  const handleDeleteTask = (taskId) => {
    if (searchResult.length !== 0) {
      const newTasks = searchResult.filter((task) => task.id !== taskId);
      setSearchResult(newTasks);
    }
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleToggleCheckboxInTask = (taskId) => {
    if (searchResult.length !== 0) {
      const newSearchTasks = searchResult.map((task) => {
        if (task.id === taskId) {
          const newMainTask = tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, checked: !task.checked };
            }
          });
          setTasks(newMainTask);
          return { ...task, checked: !task.checked };
        }

        return task;
      });
      setSearchResult(newSearchTasks);
    }
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleRemoveAllTasks = () => {
    setTasks([]);
  };

  const handleRemoveAllCompletedTask = () => {
    const newTasks = tasks.filter((task) => !task.checked);
    setTasks(newTasks);
  };

  const handleBackToMainList = () => {
    setActiveSearch(false);
    setSearchResult("");
  };

  const totalTasks = tasks.length;

  const totalChecked = tasks.filter((task) => task.checked).length;

  const handleSearchTerms = (searchTerms) => {
    const newTasks = tasks.filter((task) =>
      task.label.toLowerCase().includes(searchTerms.toLowerCase())
    );
    console.log(newTasks);
    setSearchResult(newTasks);
    setActiveSearch(true);
  };
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          totalTasks={totalTasks}
          totalChecked={totalChecked}
          handleSearchTerms={handleSearchTerms}
        />
        <TaskList
          tasks={activeSearch === false ? tasks : searchResult}
          activeSearch={activeSearch}
          handleDeleteTask={handleDeleteTask}
          handleToggleCheckboxInTask={handleToggleCheckboxInTask}
          handleBackToMainList={handleBackToMainList}
        />
        <Sidebar
          handleAddTask={handleAddTask}
          handleRemoveAllTasks={handleRemoveAllTasks}
          handleRemoveAllCompletedTask={handleRemoveAllCompletedTask}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
