import React from 'react'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import style from '../components/AddButton.module.css'

interface AddButtonProps {
    onClick: () => void
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
    return (
        <IconButton style={{
            width: 50,
            height: 50
        }}
                    onClick={onClick}
        >
            <AddIcon sx={{
                width: 30,
                height: 30
            }}/>
        </IconButton>
    )
}

export default AddButton
