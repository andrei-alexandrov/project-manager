import { useState } from "react";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleInputChange(e) {
        setEnteredTask(e.target.value)
    }

    function handleAddTaskClick() {
        if (enteredTask.trim() === "") {
            return;
        }
        onAdd(enteredTask);
        setEnteredTask("");
    }

    console.log(enteredTask)

    return (
        <div className="flex item-center gap-4">
            <input
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                type="text"
                value={enteredTask}
                onChange={handleInputChange}
            />
            <button className="text-stone-400 hover:text-green-500"
                onClick={handleAddTaskClick}>
                Add new task
            </button>
        </div>
    )
}