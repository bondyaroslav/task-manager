import {combineReducers, configureStore } from "@reduxjs/toolkit"
import projectReducer from "./reducers/projectReducer"
import taskReducer from "./reducers/taskReducer"
import teamReducer from "./reducers/teamReducer"
import employeeReducer from "./reducers/employeeReducer"
import {projectApi} from "../api/projectService"
import {taskApi} from "../api/taskService"

const reducers = {
    project: projectReducer,
    task: taskReducer,
    team: teamReducer,
    employee: employeeReducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer
}

const rootReducer = combineReducers({
    ...reducers
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
                .concat(projectApi.middleware)
                .concat(taskApi.middleware)
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
export default setupStore