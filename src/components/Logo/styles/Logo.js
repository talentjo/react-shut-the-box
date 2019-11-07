import styled from 'styled-components';

const StyledLogo = styled.h1`
    margin-bottom: 4rem;
    color: #ffffff;
    font-size: 3rem;
    font-weight: normal;
    background: ${(props) => props.theme.primary};
    padding: 1rem 0.7rem;
    display: inline-block;
    line-height: 1;
  
    a {
        color: #fff;
        text-decoration: none;
    }
`;

export default StyledLogo;
