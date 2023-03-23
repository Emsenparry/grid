import { Link } from "react-router-dom"
import styled from "styled-components"
import { BodySection } from "../../Styles/Sections/BodySection"

export const Header = () => {
    return(
        <HeaderStyle>
        <BodySection>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </BodySection>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    width: 100%;
    background-color: green;

`