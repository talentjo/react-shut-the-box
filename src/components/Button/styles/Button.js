import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 1rem 2rem;
    display: inline-block;
    appearance: none;
    background-color: ${(props) => props.theme.darkGrey};
    border-color: ${(props) => props.theme.darkGrey};
    color: #fff;
    cursor: pointer;
    font-size: 1.6rem;

    &:disabled {
        background-color: ${(props) => props.theme.disabled};
        border-color: ${(props) => props.theme.disabled};
        opacity: 0.7;
        cursor: default;
    }
`;

export default StyledButton;
