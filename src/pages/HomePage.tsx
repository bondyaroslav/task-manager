import React, { useState } from 'react'
import Project from '../components/Project/Project'
import {projectApi, useCreateProjectMutation} from '../api/projectService'
import {IProject} from '../models/IProject'
import AddButton from '../components/AddButton'
import { Modal, Box, TextField, Button } from '@mui/material'

const HomePage: React.FC = () => {
    const { data } = projectApi.useGetProjectsQuery('')
    const [createProject] = useCreateProjectMutation()
    const [open, setOpen] = useState(false)
    const [newProject, setNewProject] = useState({
        id: new Date().getTime(),
        name: '',
        description: '',
        startDate: '',
        endDate: ''
    })
    
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewProject({
            ...newProject,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        await createProject(newProject)
        setOpen(false)
    }
    return (
        <section style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            margin: 10
        }}>
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
            <AddButton onClick={handleOpen}/>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <h2>Створити новий проект</h2>
                    <TextField
                        label="Назва проекту"
                        name="name"
                        fullWidth
                        margin="normal"
                        value={newProject.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Опис"
                        name="description"
                        fullWidth
                        margin="normal"
                        value={newProject.description}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Дата початку"
                        name="startDate"
                        type="date"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{shrink: true}}
                        value={newProject.startDate}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Дата закінчення"
                        name="endDate"
                        type="date"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{shrink: true}}
                        value={newProject.endDate}
                        onChange={handleChange}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Створити
                    </Button>
                </Box>
            </Modal>
        </section>
    )
}

export default HomePage