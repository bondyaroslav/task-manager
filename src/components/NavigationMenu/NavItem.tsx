import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './NavItem.module.css'

interface NavItemProps {
    to: string,
    name: string
}

const NavItem: React.FC<NavItemProps> = ({to, name}) => {
    return (
        <Link to={`/${to}`} className={style.Link}>
            <Button className={style.Button}>
                {name}
            </Button>
        </Link>
    )
}

export default NavItem