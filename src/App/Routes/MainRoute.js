import { Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home"
import { NotFound } from "../../Pages/NotFound"

export const MainRoute = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}