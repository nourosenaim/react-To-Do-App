import {useState} from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () =>{
        editTodo(todo.id, newtext);
        setIsEditing(false);
    }
    return(
        <li className={`todo-item $(todo.completed ? "Completed" :"")`}>
            {isEditing ? (
                <input
                    type="text"
                    value="newtext"
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) :(
                <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
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