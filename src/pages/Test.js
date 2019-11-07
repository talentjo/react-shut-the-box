import React from 'react';
import { Link } from 'react-router-dom';

const Test =  () => (
    <React.Fragment>
        <h2>Test</h2>
        <p>I'm a test page</p>
        <p>Go <Link to="/">back home</Link>?</p>
    </React.Fragment>
)

export default Test;