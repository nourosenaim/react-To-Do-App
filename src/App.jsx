import { useState, useEffect } from 'react'
import './App.css'
import ToDoForm from "./components/ToDoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) =>{

        const currentDate = new Date();
        const date = currentDate.toLocaleDateString();
        const time = currentDate.toLocaleTimeString();

        const timeDuration = 3600;

        setTodos([...todos, { id: Date.now(), text , completed: false, date, time, timer:timeDuration }]);
    };

    // Toggle Completion
    const toggleCompleted = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Start timer for each task
        useEffect(() => {
            const interval = setInterval(() => {
                setTodos((prevTodos) =>
                    prevTodos.map((todo) => {
                        if (todo.timer > 0) {
                            return { ...todo, timer: todo.timer - 1 };
                        }
                        return todo;
                    })
                );
            }, 1000);

            // Cleanup the interval on component unmount
            return () => clearInterval(interval);
        }, []);

    // Delete Todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Edit Todo
    const editTodo = (id, newText) => {
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
        );
    };


  return (
    <>
        <div className="App">
            <h1>Todo App</h1>
            <ToDoForm addTodo={addTodo}/>

            <TodoList
                todos={todos}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
                editTodo={editTodo}

            />
        </div>
    </>
  );
}

export default App;
