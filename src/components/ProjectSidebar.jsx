import Button from "./Button";

export default function ProjectSidebar({
    createNewProject,
    projects,
    selectedProject
}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div>
                <Button onClick={createNewProject}>Add project</Button>
            </div>
            <ul className="mt-6">
                {projects.map((project) => {
                    return (
                        <li className="mt-2" key={project.id}>
                            <button
                                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-green-500"
                                onClick={() => selectedProject(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
