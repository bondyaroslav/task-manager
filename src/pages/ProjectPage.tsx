import React from 'react'
import TaskTable from '../components/TaskTable'
import {taskApi} from '../api/taskService'
import {projectApi} from '../api/projectService'
import {useParams} from "react-router-dom"
import style from "./ProjectPage.module.css"

const ProjectPage = () => {
    const {projectId} = useParams()
    const {data: tasksData} = taskApi.useGetTasksFromTargetProjectQuery({id: projectId, queryParam: ''})
    const {data: projectData} = projectApi.useGetTargetProjectQuery({id: projectId})
    
    return (
        <section className={style.ProjectPage}>
            <div className={style.projectName}>
                <p>{projectData[0].project_name}</p>
            </div>
            <TaskTable key={projectData.project_id} tasks={tasksData}/>
        </section>
    )
}

export default ProjectPage