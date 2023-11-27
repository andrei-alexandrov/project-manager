import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
    const date = new Date(project.dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    return (
        <div className="w-[35rem] mt-16 mr-6"> {/* Added mr-2 for right margin */}
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-stone-400 mb-2">{project.title}</h2>
                    <button
                        className="text-stone-400 hover:text-red-500"
                        onClick={onDelete}>
                        Delete
                    </button>
                </div>
                <p className="mb-4 text-stone-400">{date}</p>
                <p className="text-stone-400 whitespace-pre-line">{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
        </div>
    );
}
