import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
        createProject: builder.mutation({
            query: (project) => ({
                url: 'project',
                method: 'POST',
                body: project
            })
        }),
        getProjects: builder.query({
            query: () => 'project'
        }),
        updateProject: builder.mutation({
            query: ({ id, ...project }) => ({
                url: `project/${id}`,
                method: 'PUT',
                body: project
            })
        }),
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `project/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const {
    useCreateProjectMutation,
    useGetProjectsQuery,
    useUpdateProjectMutation,
    useDeleteProjectMutation
} = projectApi