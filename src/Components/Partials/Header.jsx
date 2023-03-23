import styled from "styled-components"
import { BodySection } from "../../Styles/Sections/BodySection"

export const Header = () => {
    return(
        <HeaderStyle>
        <BodySection>Trayana er smart</BodySection>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    width: 100%;
    background-color: green;

`