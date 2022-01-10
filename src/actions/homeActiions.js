import {
    HOME_DATA_FAIL,
    HOME_DATA_SUCCESS,
    HOME_DATA_REQUEST,
} from '../constants/homeConstants';
import axios from 'axios';




export const home = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: HOME_DATA_REQUEST });

        // const config = { headers: { 'Content-Type': 'application/json' } };
        // const { data } = await axios.post(
        //     'http://localhost:4000/api/v1/login',
        //     { email, password },
        //     config
        // );
        // let token = data.token;

        dispatch({
            type: HOME_DATA_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: HOME_DATA_FAIL,
            payload: error.response.data.message
        });
    }
}