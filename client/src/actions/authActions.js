// Register User
import axios from 'axios';
// import {TEST_DISPATCH} from "./types";
import setAuthToken from '../utils/setAuthToken'
import jwt_Decode from 'jwt-decode';

import {GET_ERRORS, SET_CURRENT_USER} from "./types";



export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
    // console.log(newUser);
    // return {
    //     type: TEST_DISPATCH,
    //     payload: userData
    // }
}
// Login
export const loginUser = userData => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data
            // Set token to localStorage
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            //  decode Token to get user data
            const decoded = jwt_Decode(token);
            //  Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//  Log user out
export const logoutUser = () => dispatch => {
    //  Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
}
