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
            <Link to={`/${to}`} style={{
                width: 150,
                height: "70%",
                marginLeft: 10
            }}>
                <Button style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#ECF0F1",
                    borderRadius: 15,
                    color: "black"
                }}>
                    {name}
                </Button>
            </Link>
        )
    }

    return (
        <header className={style.header} style={{
            display: "flex",
            alignItems: "center"
        }}>
            <NavItem to={""} name={"Home"}/>
            <NavItem to={"project"} name={"Project"}/>
        </header>
    )
}


export default NavigationMenu