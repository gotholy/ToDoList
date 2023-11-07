import React, { useState } from "react";
import Container from "./components/Container";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTask] = useState([]);

  const handleComplete = (id) => {
    setTask(
      tasks.map((task) => (task.id === id ? { ...task, done: true } : task))
    );
  };

  const handleRemove = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const handleAdd = (task) => {
    task.id = new Date().getTime();
    setTask([...tasks, task]);
  };

  const handleEdit = (id, editedTask) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, task: editedTask } : task
      )
    );
  };

  return (
    <div className="App flex bg-gradient-to-r from-slate-900 to-teal-500 justify-center items-center h-screen w-screen">
      <Container>
        <div className="flex flex-col flex-1 p-5 items-top gap-5">
          <AddTask onAdd={handleAdd} />

          {tasks
            .filter((task) => !task.done)
            .map((task, index) => (
              <TaskItem
                key={`task-${index}`}
                task={task}
                onComplete={handleComplete}
                onRemove={handleRemove}
                onEdit={handleEdit}
              />
            ))}

          {/* separator */}
          <div className="w-full border border-teal-300"></div>

          {/* done tasks */}
          {tasks
            .filter((task) => task.done)
            .map((task, index) => (
              <TaskItem key={`task-${index}`} task={task} done />
            ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
