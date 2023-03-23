import { Route, Routes } from "react-router-dom"
import About from "../../Pages/About"
import Contact from "../../Pages/Contact"
import { Home } from "../../Pages/Home"
import { NotFound } from "../../Pages/NotFound"

export const MainRoute = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}