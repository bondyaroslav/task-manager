import React from "react"
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
import style from './NavigationMenu.module.css'

const NavigationMenu = () => {
    interface NavItemProps {
        to: string,
        name: string
    }

    const NavItem: React.FC<NavItemProps> = ({to, name}) => {
        return (
            <Button style={{width: 50, height: "100%"}}>
                <Link to={`/${to}`}>{name}</Link>
            </Button>
        )
    }

    return (
        <header className={style.header}>
            <NavItem to={""} name={"Home"}/>
            <NavItem to={"tasks"} name={"Tasks"}/>
        </header>
    )
}


export default NavigationMenu