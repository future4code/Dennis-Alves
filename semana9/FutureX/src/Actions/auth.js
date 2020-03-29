import axios from 'axios'
import { push } from "connected-react-router";
import {routes} from '../containers/Router'

export const login = (email, password) => async (dispatch, getState) => {
    try {
        const result = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/dennis/login`,
            {
                email,
                password,
            } 
        );
        const token = result.data.token
        window.localStorage.setItem("token", token)
        dispatch(push(routes.listTrip))
    }catch(error){
        console.log(error);
    }
    
};