import { useState } from 'react'
import './App.css'
import ToDoForm from "./components/ToDoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
    const [todos, setTodos] = useState();

    const addTodo = (text) =>{
        setTodos([...todos, { id: Date.now(), text , completed: false }]);
    };

    // Toggle Completion
    const toggleCompleted = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

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
  )
}

export default App
