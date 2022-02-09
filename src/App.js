import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 11, // first 10 items were skipped
      todo: "Learn ReactJS",
      reminder: false,
      day: "Feb 5th at 2.30pm",
    },
    {
      id: 12,
      todo: "Go to walk",
      reminder: true,
      day: "Feb 6th at 1:30pm",
    },
    {
      id: 13,
      todo: "Buy a new skateboard",
      reminder: false,
      day: "Feb 7th at 11:00am",
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "no tasks"
      )}
    </div>
  );
};

export default App;
