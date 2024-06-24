import React from 'react'
import style from './Project.module.css'
import {NavLink} from 'react-router-dom'
import {IProject} from '../../models/IProject'
import { projectApi } from '../../api/projectService'
import { IconButton } from '@mui/material'

const Project: React.FC<IProject> = ({
        project_id,
        project_name,
        description, 
        start_date, 
        end_date
    }) => {

    const [deleteProject] = projectApi.useDeleteProjectMutation()

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        await deleteProject(project_id)
    }

    const changeDateFormat = (date: string) => {
        const year = new Date(date).getFullYear()
        const month = new Date(date).getMonth()
        const day = new Date(date).getDate()
        const newDate = `${year}/${month + 1}/${day}`
        return newDate
    }
    
    changeDateFormat(end_date)

    return (
        <NavLink to={`/project/${project_id}`}>
            <article className={style.Project}>
                <IconButton onClick={handleDelete} size="small">
                    <button>x</button>
                </IconButton>
                <h3>{project_name}</h3>
                <p>{description}</p>
                <div className={style.dates}>
                    <p>{changeDateFormat(start_date)}-</p>
                    <p>{changeDateFormat(end_date)}</p>
                </div>
            </article>
        </NavLink>
    )
}

export default Project