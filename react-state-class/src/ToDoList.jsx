import {useState} from  "react";
import {v4 as uuidv4} from "uuid";

export default function ToDoList() {
    let [todos,setTodos] = useState([{task: "newTodo", id: uuidv4()}]);
    let[newTodo,setNewTodo] = useState("");
 
    let AddNewTask = () => {
setTodos((prevTodos)=> [...prevTodos,{task: newTodo, id: uuidv4()}])
    };

let updatedTodoValue = (event) => {
setNewTodo(event.target.value);
};
let deleteTodo = (id) => {
   setTodos((prevTodos) => prevTodos.filter((prevTodos) => prevTodos.id !== id))
};

let upperCaseAll =() => {
    setTodos 
    todos.map((todo) => {
return ({...todo, task: todo.task.toUpperCase(),

 })
})

};


    return (
        <div>
            <input placeholder="add a task" value={newTodo}
             onChange={updatedTodoValue}></input>
            <br></br>
            <button onClick={AddNewTask}>Add Task</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h2>To Do Task List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                         <span>{todo.task} </span>
                          &nbsp;
                         <button onclick={() => deleteTodo(todo.id)}>Delete</button>
                         </li>
                ))}
            </ul>
            <br></br><br></br>
            <button onclick={upperCaseAll}>Upper Case All</button>
        </div>
    );
};
// try to make done 