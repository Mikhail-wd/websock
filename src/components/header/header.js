import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom';
import "./header.css";

function Header() {
    const [value, setValue] = useState(0);
    return (
        <Box sx={{ padding: "10px 0px", display: "flex", justifyContent: "center", gap: "20px", width: "100%", backgroundColor: "#474764" }}>
            <Link to={"/"} className='navLink'>Главная</Link>
            <Link to={"/login"} className='navLink'>Авторизация</Link>
            <Link to={"/market"} className='navLink'>Магазин</Link>
        </Box>
    )
}

export default Header