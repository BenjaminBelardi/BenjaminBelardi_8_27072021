import styled from 'styled-components';

export const ArrowStyled = styled.div`
path {
transform : rotate(${props => props.open === "hidden" ? "0deg" : "180deg"})
transform-origin: center;
}`;