import React from 'react';
import PropTypes from 'prop-types';

const Hello = (props) => (
    <p>Hello {props.name}! How are you today?</p>
)

Hello.propTypes = {
    name: PropTypes.string,
}

Hello.defaultProps = {
    name: 'Rich'
}

export default Hello;