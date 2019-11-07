import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

function Home () {
    const [started, setStarted] = useState(false);

    return (
        <React.Fragment>
            <Button disabled={started} onClick={() => setStarted(true)}>Play!</Button> 
            &nbsp;
            <Button disabled={!started} onClick={() => setStarted(false)}>Reset</Button>
            {started && <p>0:00</p> }
        </React.Fragment>
    )
}


export default Home;