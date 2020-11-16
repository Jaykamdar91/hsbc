import { setAlert } from '../../redux/alert/alert.actions';
import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './auth.types';

import setAuthToken from './auth.utils';

// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        if (localStorage.token) {
            dispatch({
                type: USER_LOADED,
                payload: { token: 123 }
            });
        } else {
            dispatch({
                type: AUTH_ERROR
            });
        }
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Login User
export const login = ({ data }) => async dispatch => {

    const body = JSON.stringify({ data });

    try {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { token: 123 }
        });

        dispatch(setAlert("Loged In", 'success'));

        dispatch(loadUser());
    } catch (err) {
        dispatch(setAlert(err.response.data.message, 'danger'));

        dispatch({
            type: LOGIN_FAIL
        });
    }
};

//LOGOUT
export const logout = () => dispatch => {
    dispatch(setAlert('User has logged out', 'success'));

    dispatch({ type: LOGOUT });
};