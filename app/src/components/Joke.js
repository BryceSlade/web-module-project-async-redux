import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoke } from './../actions';

const Joke = ({ joke, isFetching, error, dispatch }) => {

    useEffect(() => {
        dispatch(getJoke())
    }, []);

    if (error) {
        return <h2>An error has occured: {error}</h2>
    }

    if (isFetching) {
        return <h2>Fetching a funny joke!</h2>
    }
    
    const handleClick = () => {
        dispatch(getJoke());
    }

    return (
        <div>
            <div>
                <h2>Press the button to get a new joke!</h2>
                <h3>{joke.setup}</h3>
                <h3>{joke.delivery}</h3>
            </div>
            <button onClick={handleClick}>New Joke</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        joke: state.joke,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps)(Joke);