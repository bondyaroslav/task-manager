import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
        createTask: builder.mutation({
            query: (project) => ({
                url: 'task',
                method: 'POST',
                body: project
            })
        }),
        getAllTasks: builder.query({
            query: () => 'task'
        }),
        getTasksFromTargetProject: builder.query({
            query: ({ id, ...task }) => ({
                url: `task/${id}`,
                method: 'GET',
                params: task
            })
        }),
        updateTask: builder.mutation({
            query: ({ id, ...task }) => ({
                url: `task/${id}`,
                method: 'PUT',
                body: task
            })
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `task/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const {
    useCreateTaskMutation,
    useGetAllTasksQuery,
    useGetTasksFromTargetProjectQuery,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = taskApi