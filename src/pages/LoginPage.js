import Header from "../components/header/header"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { CircularProgress } from "@mui/material"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import {ContextLogin} from "../App.js"

function LoginPage() {
    const contextLogin = useContext(ContextLogin)
    const nav = useNavigate()
    const [state, setCompState] = useState({
        mail: "",
        password: ""
    })
    const [errorMail, setErrorMail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [authProcess, setAuth] = useState(false)
    function handlerMail(value) {
        setCompState({
            ...state,
            mail: value.target.value
        })
    }

    function handlerPassword(value) {
        setCompState({
            ...state,
            password: value.target.value.replace(/\s/g, "")
        })
    }

    function fakeFetch() {
        setTimeout(() => nav("/"), 2000)
    }

    function authCheck() {
        if (state.mail.match(/^\S+@\S+\.\S+$/) === null) {
            setErrorMail(true)
        }
        if (state.mail.match(/^\S+@\S+\.\S+$/) !== null) {
            setErrorMail(false)
            if (state.password.match(/[A-Z]/g) !== null && state.password.toString().length >= 8) {
                setAuth(true)
                fakeFetch()
                contextLogin.dispatch({type:"login"})
            }
        }
        if (state.password.match(/[A-Z]/g) === null || state.password.toString().length <= 7) {
            setErrorPassword(true)
        }
        if (state.password.match(/[A-Z]/g) !== null && state.password.toString().length >= 8) {
            setErrorPassword(false)
            if (state.mail.match(/^\S+@\S+\.\S+$/) !== null) {
                setAuth(true)
                fakeFetch()
                contextLogin.dispatch({type:"login"})
            }
        }
    }
    return (
        <>
            <Header />
            <Box sx={{ width: "80%", display: "flex", gap: "30px 10%", flexWrap: "wrap", backgroundColor: "#474764", margin: "0px auto", minHeight: "81dvh", justifyContent: "center", paddingTop: "8%" }}>
                <Box component="form" autoComplete="off" sx={{ alignItems: "center", width: "600px", display: "flex", flexDirection: "column", gap: "30px 10%", flexWrap: "wrap" }} >
                    {!errorMail ?

                        <TextField disabled={authProcess ? true : null} hiddenLabel label="Электронная почта" id="outlined" variant="outlined" sx={{ width: "100%" }} value={state.mail} onChange={(event) => handlerMail(event)} /> :
                        <TextField hiddenLabel error label="Электронная почта" id="outlined-basic" variant="outlined" sx={{ width: "100%" }} value={state.mail} onChange={(event) => handlerMail(event)} />
                    }
                    {!errorPassword ?
                        <TextField disabled={authProcess ? true : null} hiddenLabel type="password" id="outlined" label="Пароль" variant="outlined" sx={{ width: "100%" }} value={state.password} onChange={(event) => handlerPassword(event)} /> :
                        <TextField hiddenLabel type="password" error id="outlined-basic" label="Пароль" variant="outlined" sx={{ width: "100%" }} value={state.password} onChange={(event) => handlerPassword(event)} />}

                    <Button disabled={authProcess ? true : null} variant="contained" sx={{ width: "fit-content", padding: "10px 24px", fontSize: "22px", fontWeight: 700, color: "white", backgroundColor: "#474764" }} onClick={() => authCheck()}>{authProcess ?
                        <Box sx={{ display: 'flex', margin: "0px 20px 0px 0px" }}>
                            <CircularProgress />
                        </Box>
                        : null} Авторизация </Button>
                </Box>
            </Box>
        </>
    )
}

export default LoginPage