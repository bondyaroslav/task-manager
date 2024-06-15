import { createSlice } from "@reduxjs/toolkit"

interface Team {
    id: number,
    name: string,
    description: string,
}

interface InitialTeamState {
    teams: Team[]
}

const initialState: InitialTeamState = {
    teams: []
}

const teamSlice = createSlice({
    name: "team",
    initialState: initialState,
    reducers: {
        setTeam(state, action) {
            state.teams = action.payload
        },
        addTeam(state, action) {
            state.teams.push(action.payload)
        },
        updateTeam(state, action) {
            const index = state.teams.findIndex(team => team.id === action.payload.id)
            if (index !== -1) {
                state.teams[index] = action.payload
            }
        }
    }
})

export const { setTeam, addTeam, updateTeam } = teamSlice.actions

export default teamSlice