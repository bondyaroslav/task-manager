import React from 'react'
import Task from './Task'
import {ITask} from '../models/ITask'
import style from './TaskTable.module.css'

interface TaskTableProps {
    tasks: ITask[],
    // taskTableName: string
}

const TaskTable: React.FC<TaskTableProps> = ({tasks}) => {
    // console.log(tasks)
    return (
        <article className={style.TaskTable}>
            <p className={style.tableName}>Table Name</p>
            <ul>
                {tasks ? tasks.map((task: ITask) => (
                    <Task key={task.task_id} name={task.task_name}/>
                )) : null}
            </ul>
            
        </article>
    )
}

export default TaskTable