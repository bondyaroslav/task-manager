import React from 'react'
import style from './Task.module.css'

interface TaskProps {
    name: string
}

const Task: React.FC<TaskProps> = ({name}) => {
    return (
        <li className={style.Task}>
            <span>{name}</span>
        </li>
    )
}

export default Task