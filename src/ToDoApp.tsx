import { useRef, useState } from "react";
import './App.css'; // Import the CSS file

type ToDo = {
    id: number;
    desc: string;
}

const ToDoApp = () => {
    let newTask = useRef<HTMLInputElement | any>(null)
    let [todos, setToDos] = useState<ToDo[]>([
        { id: 1, desc: "Learn HTML" },
        { id: 2, desc: "Learn CSS" },
        { id: 3, desc: "Learn Javascript" },
        { id: 4, desc: "Learn React Js" },
        { id: 5, desc: "Learn Angular" },
    ]);

    function deleteToDo(id: number): void {
        setToDos(todos.filter((todo) => todo.id != id));
    }

    function addnewtask() {
        let desc = newTask.current?.value;
        let ids = todos.map((todo) => todo.id)
        let newId = Math.max(...ids) + 1;
        let newTodo = { id: newId, desc: desc }
        let newarr = [...todos, newTodo]
        setToDos(newarr)
        newTask.current.value = ""
    }

    return (
        <div className="container">
            <input type="text" ref={newTask} placeholder="New task" />&nbsp;&nbsp;&nbsp;
            <button onClick={addnewtask}>Add new task</button>
            <h2>Things to Do:</h2>
            <table>
                <tbody>
                    {
                        todos.map((todo) => <tr key={todo.id}><td>{todo.desc}</td><td><button onClick={() => deleteToDo(todo.id)}>Delete</button></td></tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ToDoApp;
