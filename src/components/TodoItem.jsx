import {useState} from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () =>{

        if (!newText.trim()) return;

        editTodo(todo.id, newText);
        setIsEditing(false);
    }

    // Convert seconds into MM:SS format
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    return(
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={()=> toggleCompleted(todo.id)}
            />


            <div className="task-time">
                <p>
                    <strong>Date: {todo.date} Time:{todo.time}</strong>
                </p>

                {/* Display the timer */}
                {todo.timer > 0 ? (
                    <p><strong>Time left:</strong> {formatTime(todo.timer)}</p>
                ) : (
                    <p><strong>Time's up!</strong></p>
                )}
            </div>

            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) :(
                <span onClick={() => toggleCompleted(todo.id)}>{todo.text}</span>
            )}
            <div className="buttons">
                {
                    isEditing ? (
                        <button onClick={handleEdit}>Save</button>
                    ) : (
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    )
                }
                <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
            </div>

        </li>
    );
}
export default TodoItem;