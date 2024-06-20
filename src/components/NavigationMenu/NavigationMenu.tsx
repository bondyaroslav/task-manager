import React from "react"
import style from './NavigationMenu.module.css'
import NavItem from './NavItem'

const NavigationMenu = () => {
    
    return (
        <header className={style.NavigationMenu}>
            <NavItem to={""} name={"Home"}/>
            <NavItem to={"project"} name={"Project"}/>
        </header>
    )
}


export default NavigationMenu