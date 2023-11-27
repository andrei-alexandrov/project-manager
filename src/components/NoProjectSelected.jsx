import Button from "./Button"
import emptyProjectImg from "../assets/no-projects.png"

export default function NoProjectSelected({createNewProject}) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img
                className="w-16 h-16 object-contain mx-auto"
                src={emptyProjectImg}
                alt="Empty project image"
            />
            <h2 className="text-xl font-bold text-stone-500 my-4">
                No project selected
            </h2>
            <p className="text-stone-400 mb-4">
                Select a project or get started with a new one
            </p>
            <div className="mt-8">
                <Button onClick={createNewProject}>Add new project</Button>
            </div>
        </div>
    )
}