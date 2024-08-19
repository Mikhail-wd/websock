import Header from "../components/header/header"
import Spinner from "../components/spinner/spinner"
import PaginationComp from "../components/pagination/pagination"
import { useEffect, useState, useRef } from "react"
import { Box, Button } from "@mui/material"


function MainPage() {
    const [webSock] = useState(new WebSocket("wss://test.dev-relabs.ru/event"))
    const [socketMessage, setSocketMessage] = useState([])
    const [state, setState] = useState(0)
    const [activePage, setActivePage] = useState(0)

    function dateFormating(value) {
        let date = new Date(value)
        let array = [date.getDay(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes()]
        return ((array[0] < 10 ? `0${array[0] + 1}` : array[0]) + "." + (array[1] < 10 ? `0${array[1] + 1}` : array[1]) + "." + array[2] + " " + (array[3] < 10 ? `0${array[3] + 3}` : array[3]) + ":" + (array[4] < 10 ? `0${array[4] + 1}` : array[4]))
    }

    function pageSelect(event, page) {
        setActivePage(page - 1)
    }

    function deletItem(value) {
        let array = []
        state.items.filter(element => {
            if (element.id !== value) {
                array.push(element)
                setState({ ...state, items: array })
            }
        })

    }

    function rightColumn() {
        if (socketMessage.length < 1) {
            return <Spinner />
        } else {
            return (
                socketMessage.map((element, index) => {
                    return (
                        <Box key={index} sx={{ width: "400px", display: "grid", gridTemplateColumns: "repeat(20, 20px)" }}>
                            <Box sx={{ gridColumn: "1 / 8" }}>{dateFormating(element.ctime)}</Box>
                            <Box sx={{ gridColumn: "14 / 20" }}>{element.event}</Box>
                        </Box>
                    )
                }))
        }
    }
    function leftColumn() {
        if (state === 0) {
            return (
                <Spinner />
            )
        }
        else {
            return (
                state.items.map((element, index) => {
                    return (
                        <Box key={index} sx={{ width: "900px", display: "grid", gridTemplateColumns: "repeat(20, 45px)" }}>
                            <Box sx={{ gridColumn: "1 / 2", alignContent: "center" }}>{element.id}</Box>
                            <Box sx={{ gridColumn: "4 / 7", alignContent: "center" }}>{element.name}</Box>
                            <Box sx={{ gridColumn: "7 / 8", alignContent: "center" }}>{element.role}</Box>
                            <Box sx={{ gridColumn: "14 / 17", alignContent: "center" }}>{dateFormating(element.ctime)}</Box>
                            <Box sx={{ gridColumn: "18 / 20" }}><Button sx={{
                                textTransform: "uppercase",
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "white",
                                padding: "8px 25px",
                                transition: "0.2s, easy-in",
                                backgroundColor: "#f45a75", '&:hover': {
                                    transform: "scale(0.9)",
                                    backgroundColor: "#f45a75"
                                }
                            }} onClick={() => deletItem(element.id)}>Удалить</Button></Box>
                        </Box>)
                })
            )
        }
    }


    useEffect(() => {
        webSock.onmessage = function (event) {
            if (event.type === "message") {
                let array = socketMessage
                array.push(JSON.parse(event.data))
                setSocketMessage(() => [...array])
            }
            if (event.type === "error") {
                webSock.close()
                console.log("Socket is closed")
            }
            if (socketMessage.length > 20) {
                webSock.close()
                console.log("Socket is closed")
            } 
        }
    }, [])
    useEffect(() => {
        fetch(`https://test.dev-relabs.ru/api/users/list?offset=${activePage === 0 ? activePage : activePage * 5}`)
            .then(respond => respond.json())
            .then(data => {
                setState(data)
            })
    }, [activePage])

    return (
        <>
            <Header />
            <Box sx={{ width: "100%", display: "flex", gap: "30px 10%", flexWrap: "wrap", backgroundColor: "#474764", margin: "0px auto", minHeight: "calc(100dvh - 78px)", justifyContent: "center", paddingTop: "8%" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "start" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "start" }}>
                        <Box sx={{ fontSize: "24px", fontWeight: 700, color: "white" }}>Список пользователей</Box>
                        <Box sx={{ width: "600px", display: "grid", gridTemplateColumns: "repeat(20, 45px)" }}>
                            <Box sx={{ gridColumn: "1 / 2" }}>ID</Box>
                            <Box sx={{ gridColumn: "4 / 7" }}>Имя</Box>
                            <Box sx={{ gridColumn: "7 / 8" }}>Роль</Box>
                            <Box sx={{ gridColumn: "14 / 17" }}>Дата создания</Box>
                            <Box sx={{ gridColumn: "18 / 20" }}>Действие</Box>
                        </Box>
                        {leftColumn()}
                    </Box>
                    <PaginationComp amount={(state.total / state.limit)} pageSelect={pageSelect} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "start" }}>
                    <Box sx={{ fontSize: "24px", fontWeight: 700, color: "white" }}>События</Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "start" }}>
                        <Box sx={{ width: "400px", display: "grid", gridTemplateColumns: "repeat(20, 20px)" }}>
                            <Box sx={{ gridColumn: "1 / 8" }}>Дата</Box>
                            <Box sx={{ gridColumn: "14 / 20" }}>Событие</Box>
                        </Box>
                        {rightColumn()}
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default MainPage