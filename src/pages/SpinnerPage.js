import Header from "../components/header/header"
import { CircularProgress, Box } from "@mui/material"

function SpinnerPage() {
    return (
        <>
            <Header />
            <Box sx={{ width: "80%", display: "flex", gap: "30px 10%", flexWrap: "wrap", backgroundColor: "#474764", margin: "0px auto", minHeight: "81dvh", justifyContent: "center", paddingTop: "8%" }}>
                <CircularProgress size={200} />
            </Box>
        </>
    )
}

export default SpinnerPage