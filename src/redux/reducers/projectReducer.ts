import { createSlice } from "@reduxjs/toolkit"

export interface IProject {
    id: number,
    name: string,
    description: string,
    startDate: string,
    endDate: string
}

interface InitialProjectState {
    projects: IProject[]
}

const initialState: InitialProjectState = {
    projects: []
}

const projectSlice = createSlice({
    name: "project",
    initialState: initialState,
    reducers: {
        setProjects(state, action) {
            state.projects = action.payload
        },
        addProject(state, action) {
            state.projects.push(action.payload)
        },
        updateProject(state, action) {
            const index = state.projects.findIndex(project => project.id === action.payload.id)
            if (index !== -1) {
                state.projects[index] = action.payload
            }
        }
    }
})

export const { setProjects, addProject, updateProject } = projectSlice.actions

export default projectSlice