import { useState } from "react";

const ToDoForm = ({ addItem }) =>{
    const [text, setText] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        addItem(text);
        setText("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
};

export default ToDoForm;