import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'

const Counter = (props) => (
    <div>
        <p><em>We track the counter state with Redux. If you increment the counter then visit another page – without refreshing – you'll see that on your next visit to this page, the counter will remain the same.</em></p>
        <button onClick={props.decrement}>-</button>&nbsp;
        {props.count} &nbsp;
        <button onClick={props.increment}>+</button>
    </div>
)

Counter.propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    count: state.count,
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
