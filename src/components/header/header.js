import Box from '@mui/material/Box'
import { Link } from 'react-router-dom';
import classes from "./header.module.css";

function Header() {
    return (
        <Box sx={{ padding: "10px 0px", display: "flex", justifyContent: "center", gap: "20px", width: "100%", backgroundColor: "#474764" }}>
            <Link to={"/"} className={classes.navLink}>Главная</Link>
            <Link to={"/login"} className={classes.navLink}>Авторизация</Link>
            <Link to={"/market"} className={classes.navLink}>Магазин</Link>
        </Box>
    )
}

export default Header