import TodoItem from "./TodoItem.jsx"

const TodoList = ({ todos, toggleCompleted, deleteTodo, editTodo }) =>{
    return(
        <ul className="todo-list">
            {todos.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleCompleted={toggleCompleted}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))
            )}
        </ul>
    );
}

export default TodoList;