import React from 'react'
import Project from '../components/Project'
import { projectApi } from '../api/projectService'
import {ProjectI} from '../api/projectService'

const HomePage: React.FC = () => {
    const { data } = projectApi.useGetProjectsQuery('')
    console.log(data)

    return (
        <div>
            <h2>All Projects</h2>
            <div style={{display: "flex", justifyContent: "center", margin: 10}}>
                {data ? data.map((p: ProjectI) => (
                    <Project
                        key={p.project_id}
                        project_id={p.project_id}
                        project_name={p.project_name}
                        description={p.description}
                        start_date={p.start_date}
                        end_date={p.end_date}
                    />
                )) : null}
            </div>
        </div>
    )
}

export default HomePage