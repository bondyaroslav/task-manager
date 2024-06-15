import {combineReducers, configureStore } from "@reduxjs/toolkit"
import projectReducer from "./reducers/projectReducer"
import taskReducer from "./reducers/taskReducer"
import teamReducer from "./reducers/teamReducer"
import employeeReducer from "./reducers/employeeReducer"

const reducers = {
    project: projectReducer,
    task: taskReducer,
    team: teamReducer,
    employee: employeeReducer
}

const rootReducer = combineReducers({
    ...reducers
})

const setupStore = () =>
    configureStore({
        reducer: rootReducer
    })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
export default setupStore