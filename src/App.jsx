import { useState, useEffect } from "react";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const initialProjects = JSON.parse(localStorage.getItem("projects")) || [];
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || {};

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: initialProjects,
    tasks: initialTasks
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projectsState.projects));
    localStorage.setItem("tasks", JSON.stringify(projectsState.tasks));
  }, [projectsState.projects, projectsState.tasks]);


  function addProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function fillNewProject(projectProperties) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectProperties,
        id: projectId
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        tasks: {
          ...prevState.tasks,
          [projectId]: []
        },
        selectedProjectId: undefined,
      };
    });
  }

  console.log(projectsState);

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      const updatedTasks = {
        ...prevState.tasks,
        [prevState.selectedProjectId]: [
          ...(prevState.tasks[prevState.selectedProjectId] || []),
          newTask
        ]
      };

      return {
        ...prevState,
        tasks: updatedTasks
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      const updatedTasks = {
        ...prevState.tasks,
        [prevState.selectedProjectId]: (prevState.tasks[prevState.selectedProjectId] || []).filter(
          (task) => task.id !== taskId
        )
      };

      return {
        ...prevState,
        tasks: updatedTasks
      };
    });
  }

  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function deleteProject() {
    setProjectsState((prevState) => {
      const updatedTasks = { ...prevState.tasks };
      delete updatedTasks[prevState.selectedProjectId];

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (currentProject) => currentProject.id !== prevState.selectedProjectId
        ),
        tasks: updatedTasks
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const selectedProjectTasks = projectsState.tasks[projectsState.selectedProjectId] || [];

  let content =
    <SelectedProject
      project={selectedProject}
      onDelete={deleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedProjectTasks}
    />;

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected createNewProject={addProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={fillNewProject} onCancel={handleCancel} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 bg-black">
      <ProjectSidebar
        createNewProject={addProject}
        projects={projectsState.projects}
        selectedProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
