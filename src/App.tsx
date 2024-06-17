import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavigationMenu from './components/NavigationMenu'
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"

const App = () => {
    
    return (
        <div className="App">
            <NavigationMenu />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/project" element={<ProjectPage/>}/>
            </Routes>
        </div>
    )
}

export default App
