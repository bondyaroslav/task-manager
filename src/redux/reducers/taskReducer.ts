import { createSlice } from "@reduxjs/toolkit"

interface Task {
    id: number,
    name: string,
    description: string,
    startDate: string,
    endDate: string,
    taskStatus: string,
    projectId: number,
    teamId: number
}

interface InitialTaskState {
    tasks: Task[]
}

const initialState: InitialTaskState = {
    tasks: []
}

const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        setTasks(state, action) {
            state.tasks = action.payload
        },
        addTask(state, action) {
            state.tasks.push(action.payload)
        },
        updateTask(state, action) {
            const index = state.tasks.findIndex(task => task.id === action.payload.id)
            if (index !== -1) {
                state.tasks[index] = action.payload
            }
        }
    }
})

export const { setTasks, addTask, updateTask } = taskSlice.actions

export default taskSlice