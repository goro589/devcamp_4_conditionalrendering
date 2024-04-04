function ToDoItem({todo,priority}) {
    return (
        <div
        className="todo"
        style={
            priority == 0
            ? { background: "red", color: "white" }
            : { background: "white", color: "teal"}
        }
        >
            {todo}
        </div>
    )}

    export default ToDoItem
