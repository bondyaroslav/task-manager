import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavigationMenu from './components/NavigationMenu'
import Home from "./pages/Home"
import Tasks from "./pages/Tasks"

const App = () => {
    
    return (
        <div className="App">
            <NavigationMenu />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
            </Routes>
        </div>
    )
}

export default App
