import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles/Button';

const Button = (props) => (
    <StyledButton
        onClick={props.onClick}
        disabled={props.disabled}>
        {props.children}
    </StyledButton>
)

Button.propTypes = {
    fontSize: PropTypes.number,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.string.isRequired,
}

export default Button;
