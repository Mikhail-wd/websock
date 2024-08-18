import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box'

function Header() {
    const [value, setValue] = useState(0);
    return (
        <Box>
            <BottomNavigation showLabels sx={{ padding: "10px 0px", gap: "20px", width: "100%", backgroundColor: "#474764" }} value={value} onChange={(event, newValue) => {
                setValue(newValue);
            }}>
                <BottomNavigationAction
                    sx={{ color: "white", fontSize: "18px", fontWeight: 800, fontFamily: "system-ui,sans-serif" }}
                    label="Главная"
                />
                <BottomNavigationAction
                    sx={{ color: "white", fontSize: "18px", fontWeight: 800, fontFamily: "system-ui,sans-serif" }}
                    label="Логин"
                />
                <BottomNavigationAction
                    sx={{ color: "white", fontSize: "18px", fontWeight: 800, fontFamily: "system-ui,sans-serif" }}
                    label="Магазин"
                />
            </BottomNavigation>
        </Box>
    )
}

export default Header