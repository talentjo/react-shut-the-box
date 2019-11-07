import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styles/Container';

const Container = (props) => (
    <StyledContainer>{props.children}</StyledContainer>
)

Container.propTypes = {
    children: PropTypes.object,
}

export default Container;