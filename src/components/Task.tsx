import React from 'react'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { ITask } from '../models/ITask'
import style from './Task.module.css'
import { useDeleteTaskMutation } from '../api/taskService'

interface TaskProps {
    id: number
    name: string
}

const Task: React.FC<TaskProps> = ({ id, name }) => {
    const [deleteTask] = useDeleteTaskMutation()

    const handleDeleteTask = async () => {
        await deleteTask(id)
    }

    return (
        <li className={style.Task}>
            <span>{name}</span>
            <IconButton onClick={handleDeleteTask}>
                <Close />
            </IconButton>
        </li>
    )
}

export default Task
