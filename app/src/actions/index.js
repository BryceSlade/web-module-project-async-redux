import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_START = 'FETCH_START';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getJoke = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('https://v2.jokeapi.dev/joke/Any')
            .then(response => {
                dispatch(fetchSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchError(error))
            });
    }
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (joke) => {
    return({type: FETCH_SUCCESS, payload: joke});
}

export const fetchError = (errorMessage) => {
    return({type: FETCH_ERROR, payload: errorMessage});
}