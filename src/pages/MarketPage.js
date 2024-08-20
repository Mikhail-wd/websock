import Header from "../components/header/header"
import SpinnerPage from "./SpinnerPage";
import { CardContent, Typography, Box, CardMedia, IconButton, CardActions, Rating } from "@mui/material"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { ContextLogin } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function MarketPage() {
    const nav = useNavigate()
    const login = useContext(ContextLogin)
    const data = [
        {
            name: "Смартфон Apple 12",
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.eldorado.ua%2Fgoods_images%2F1038946%2F6848265-1605696770.jpg&f=1&nofb=1&ipt=a738b280f2f311919fe4cf104d628e9fddc92a633ee5c0e6a232cae6ed644ed2&ipo=images",
            price: 43000,
            raiting: 32,
            info: "Smartphone / 64GB / OLED / QoL / Smart buy / Carbone Fiber / Cluted Free / x10 Speed",
            discount: 14
        }, {
            name: "Смартфон Lenovo",
            img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Felmir.ua%2Fimg%2Fpr-552227%2F3000%2F2000%2Fmobilnyy_telefon_lenovo_s820_red.jpg&f=1&nofb=1&ipt=94fcdb021d4907eac9a82825195cad053add4de8f70afe07ba85d767efe3353b&ipo=images",
            price: 18600,
            raiting: 88,
            info: "Smartphone / 64GB / OLED / QoL / Smart buy / Carbone Fiber / Cluted Free / x10 Speed",
            discount: null
        }, {
            name: "Смартфон Motorola",
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgagadget.com%2Fmedia%2Fuploads%2Fmotorola-legendary%2Fmotorola-101.jpg&f=1&nofb=1&ipt=6daffd9bffe9f65aa70a707551d4c8ee7644a6eeafa16af84d5ea56a88087740&ipo=images",
            price: 15300,
            raiting: 100,
            info: "Smartphone / 64GB / OLED / QoL / Smart buy / Carbone Fiber / Cluted Free / x10 Speed",
            discount: 56
        }
    ]
    function checkLoging() {
        if (login.state.login === true) {
            return (
                <>
                    <Header />
                    <Box sx={{ width: "80%", display: "flex", gap: "30px 10%", flexWrap: "wrap", backgroundColor: "#474764", margin: "0px auto", minHeight: "calc(100dvh - 78px)", justifyContent: "center", paddingTop: "8%" }}>
                        {data.map((element, index) => {
                            return (
                                <Box key={index} sx={{ backgroundColor: "white", boxShadow: "10px 10px 4px grey", width: "320px", minHeight: "480px", borderRadius: "12px" }}>
                                    <CardMedia
                                        sx={{ borderRadius: "12px", minHeight: "220px", maxHeight: "300px" }}
                                        component="img"
                                        image={element.img}
                                        alt={element.name}
                                    />
                                    {element.discount === null ? null :
                                        <CardContent sx={{ position: "relative", marginTop: "-50px", padding: "8px" }}>
                                            <Typography variant="body2" color="text.secondary" sx={{ backgroundColor: "grey", opacity: 0.9, padding: "4px 7px", width: "fit-content", borderRadius: "12px", color: "#f45a75", fontSize: "16px", fontWeight: 600 }}>
                                                {"-" + element.discount + "%"}
                                            </Typography>
                                        </CardContent>
                                    }
                                    <CardContent sx={{ padding: "8px 14px" }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "system-ui,sans-serif", borderRadius: "12px", display: "flex", alignContent: "center", gap: "30px", color: "blue", fontSize: "16px", fontWeight: 600 }}>
                                            <Typography sx={{ fontFamily: "system-ui,sans-serif", color: "Black", fontWeight: 700 }}> {(element.price - ((element.price / 100) * element.discount)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Р</Typography>
                                            {element.discount !== null ? <Typography sx={{ fontSize: "12px", textAlign: "center", color: "grey", textDecoration: "line-through;", fontWeight: 600 }}>{(element.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Р</Typography> : null}
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{ padding: "8px 14px" }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ borderRadius: "12px", display: "flex", alignContent: "center", gap: "30px", color: "grey", fontFamily: "system-ui,sans-serif", fontSize: "12px", fontWeight: 600 }}>
                                            {element.info}
                                        </Typography>
                                    </CardContent >
                                    <CardContent sx={{ display: "flex", gap: "10px", padding: "8px 14px" }}>
                                        <Rating sx={{ color: "#f45a75" }} name="disabled" value={(element.raiting / 100) * 5} readOnly />
                                        <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "grey", opacity: 0.35 }}>
                                            {element.raiting}
                                        </Typography>
                                    </CardContent>

                                    <CardContent sx={{ padding: "8px 14px" }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ textTransform: "uppercase", width: "fit-content", background: "linear-gradient(90deg,#73a5b5,#c7ccab,#d1df8b,yellow,yellow,yellow)", borderRadius: "25px", padding: "10px 20px", gap: "30px", color: "black", fontFamily: "system-ui,sans-serif", fontSize: "13px", fontWeight: 600 }}>
                                            Расрочка 0-0-6
                                        </Typography>
                                    </CardContent >
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="В корзину" sx={{
                                            fontSize: "16px", transition: "0.2s, easy-in", padding: "14px 22px", borderRadius: "12px", color: "White", backgroundColor: "#f45a75", '&:hover': {
                                                transform: "scale(0.9)",
                                                backgroundColor: "#f45a75"
                                            },
                                        }}>
                                            В корзину
                                        </IconButton>
                                        <IconButton aria-label="Избранное">
                                            <FavoriteBorderOutlinedIcon sx={{ color: "#f45a75" }} />
                                        </IconButton>
                                    </CardActions>
                                </Box>
                            )
                        })}
                    </Box>
                </>
            )
        } else {
            setTimeout(() => nav("/login"), 2000)
            return (
                <SpinnerPage />
            )
        }
    }

    return (checkLoging()
    )
}

export default MarketPage