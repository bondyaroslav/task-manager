import React from 'react'
import Project from '../components/Project/Project'
import {projectApi} from '../api/projectService'
import {IProject} from '../models/IProject'

const HomePage: React.FC = () => {
    const {data} = projectApi.useGetProjectsQuery('')
    
    return (
        <section style={{display: "flex", justifyContent: "center", flexWrap: "wrap", margin: 10}}>
            {data ? data.map((p: IProject) => (
                <Project
                    key={p.project_id}
                    project_id={p.project_id}
                    project_name={p.project_name}
                    description={p.description}
                    start_date={p.start_date}
                    end_date={p.end_date}
                />
            )) : null}
        </section>
    )
}

export default HomePage