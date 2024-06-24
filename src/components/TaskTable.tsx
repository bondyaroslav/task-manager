import React, { useState } from 'react'
import Task from './Task'
import {ITask} from '../models/ITask'
import style from './TaskTable.module.css'
import AddButton from './AddButton'
import {taskApi, useCreateTaskMutation} from '../api/taskService'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'

interface TaskTableProps {
    tasks: ITask[],
    // taskTableName: string
}

const TaskTable: React.FC<TaskTableProps> = ({tasks}) => {

    const [newTask, setNewTask] = useState({
        taskId: new Date().getTime(),
        taskName: '',
        description: '',
        startDate: '',
        endDate: '',
        taskStatus: '',
        projectId: 1,
        teamId: 1
    })
    const [open, setOpen] = useState(false)
    const [createTask] = useCreateTaskMutation()

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value })
    }

    const handleAddTask = async () => {
        await createTask(newTask)
        handleClose()
    }
    
    return (
        <article className={style.TaskTable}>
            <p className={style.tableName}>Table Name</p>
            <ul>
                {tasks ? tasks.map((task: ITask) => (
                    <Task key={task.task_id} name={task.task_name}/>
                )) : null}
            </ul>
            <AddButton onClick={handleClickOpen}/>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="taskName"
                        label="Task Name"
                        type="text"
                        fullWidth
                        value={newTask.taskName}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="description"
                        label="Description"
                        type="text"
                        fullWidth
                        value={newTask.description}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="startDate"
                        label="Start Date"
                        type="date"
                        fullWidth
                        InputLabelProps={{shrink: true}}
                        value={newTask.startDate}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="endDate"
                        label="End Date"
                        type="date"
                        fullWidth
                        InputLabelProps={{shrink: true}}
                        value={newTask.endDate}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="taskStatus"
                        label="Task Status"
                        type="text"
                        fullWidth
                        value={newTask.taskStatus}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddTask} color="primary">
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </article>
    )
}

export default TaskTable