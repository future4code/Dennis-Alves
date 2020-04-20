import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../Router';

const baseURL = 'https://us-central1-future-apis.cloudfunctions.net/fourEddit'

export const login = (email, password) => async (dispatch) =>{
    const loginData ={
        email,
        password,
    }

    try{
        const response = await axios.post(`${baseURL}/login`, loginData);

        const token = response.data.token;

        window.localStorage.setItem("token", token)

        dispatch(push(routes.UserPage))
    }
    catch(error){
        console.error(error)
        alert("Erro ao tentar fazer o login")
    }
}

export const signup = (email, password, username) => async (dispatch) => {
    const signupData={
        email,
        password,
        username
    }

    try{
        await axios.post(`${baseURL}/signup`, signupData);
        alert('Conta criada com sucesso!')
    }
    catch(error){
        console.error(error)
        alert("Erro ao tentar criar uma conta")
    }
}