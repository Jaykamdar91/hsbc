import axios from 'axios';
//Used it when we need to set token.
const setAuthToken = token => {
    if (token) {
        //axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        //delete axios.defaults.headers.common['x-auth-token'];
    }
};

export default setAuthToken;