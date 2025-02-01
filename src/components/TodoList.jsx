import TodoItem from "./TodoItem.jsx"

const TodoList = ({ todos, toggleCompleted, deleteTodo, editTodo }) =>{
    return(
        <ul className="todo-list">
            {todos.map((todo) =>(
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleCompleted}
                    deleteTod0={deleteTodo}
                    editTodo={editTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;