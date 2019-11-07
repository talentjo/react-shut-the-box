import React from 'react';
import PropTypes from 'prop-types';
import StyledLogo from './styles/Logo';
import { Link } from 'react-router-dom'

const Logo = (props) => (
    <StyledLogo>
        <Link to="/">{props.children}</Link>
    </StyledLogo>
)

Logo.propTypes = {
    children: PropTypes.string,
}

export default Logo;
