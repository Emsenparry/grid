import styled from "styled-components"

export const GridSection = ({auto, size, children}) => {
    return(
        <StyledArticle size={size} auto={auto}>
            {children}
        </StyledArticle>
    )
}

const StyledArticle = styled.article`
    display: grid;
    grid-template-columns: repeat(${({auto}) => auto || 'auto-fit'}, minmax(${({size}) => size || '250px'}, 1fr));
    gap: .5rem;
`