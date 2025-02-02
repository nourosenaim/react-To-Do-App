import {useState} from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () =>{
        if (!newText.trim()) return;
        editTodo(todo.id, newText);
        setIsEditing(false);
    }
    return(
        <li className={`todo-item ${todo.completed ? "Completed" :""}`}>
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