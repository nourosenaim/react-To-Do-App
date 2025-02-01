import { useState } from "react";

const ToDoForm = ({addTodo}) =>{
    const [text, setText] = useState("");

    const handleSubmit = (e) =>{  //need to understand

        e.preventDefault();
        if (!text.trim()) return;

        addTodo(text);
        setText("");
    };
    return(
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new Task or Todo"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default ToDoForm;