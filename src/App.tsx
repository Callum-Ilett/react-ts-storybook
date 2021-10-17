import { Task } from "components";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { MdAdd } from "react-icons/md";
import { ReactComponent as Logo } from "./assets/logo.svg";

const App = () => {
  const [task, setTask] = useState<Task>({
    id: "",
    title: "",
    completed: false,
  });

  const [tasks, setTasks] = useState<Tasks>([]);

  const addTask: FormEventHandler = (e) => {
    e.preventDefault();

    const newTask: Task = {
      id: String(Math.floor(Math.random() * 10000)),
      title: task.title,
      completed: false,
    };

    setTask({ ...task, title: "" });
    setTasks([newTask, ...tasks]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    console.log("TOGGLE TASK");
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(newTasks);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  return (
    <>
      <header>
        <Logo />
      </header>

      <main>
        <div className="container text-center">
          <h1 className="mb-1">What's your plan for today?</h1>

          <form className="task-form pb-1" onSubmit={addTask}>
            <div className="create-task">
              <input
                placeholder="Task Name"
                value={task.title}
                onChange={handleChange}
              />
              <button type="submit">
                <MdAdd />
              </button>
            </div>
          </form>

          <ul className="task-list">
            {tasks.map((task) => (
              <Task
                key={task.id}
                {...task}
                removeTask={removeTask}
                toggleTask={toggleTask}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default App;
