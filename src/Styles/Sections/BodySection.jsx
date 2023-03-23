import { Container, InnerContainer } from "./Wrappers"

export const BodySection = ({children}) => {
    return(
        <Container>
            <InnerContainer>
            {children}
            </InnerContainer>
        </Container>
    )
}