import styled from "styled-components"
import { BodySection } from "../../Styles/Sections/BodySection"

export const Page = ({children}) => {
    return(
        <MainStyle>
        <BodySection>
            {children}
        </BodySection>
        </MainStyle>
    )
}

const MainStyle = styled.main`
    margin-bottom: auto;
    width: 100%;
`