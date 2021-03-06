import React from 'react';
import {baseUrl, USER_INFO, USER_TOKEN} from "../util/Constants";
import axios from "axios";

let user_ = localStorage.getItem(USER_INFO) ? JSON.parse(localStorage.getItem(USER_INFO)) : {};
let token_ = localStorage.getItem(USER_TOKEN) ? localStorage.getItem(USER_TOKEN) : "";

const initialState = {
    user: {...user_},
    token: token_,
    loading: false,
    errorMessage: null,
}


const AuthContext = React.createContext({
    user: {},
    dispatch: (props) => {
    }, logout: () => {
    }, loginUser: (loginPayload) => {
    }
});

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...state,
                loading: true
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            }
        case "LOGOUT":
            return {
                loading: false,
                errorMessage: null,
                token: ""
            };
        default:
            throw new Error("Accion no soportada: " + action.type);

    }
}


export const useAuthContext = () => {
    return React.useContext(AuthContext);
}


const AuthProvider = ({children}) => {

    const [context, dispatch] = React.useReducer(AuthReducer, initialState);
    const {user} = context;
    const loginUser = async (loginPayload) => {
        try {
            dispatch({error: null, payload: null, type: 'REQUEST_LOGIN'});
            let response = await axios.post(baseUrl + "/autenticacion/genera-token", loginPayload);
            let data = response?.data;
            if (data !== null) {
                console.log("data", JSON.stringify(data));

                localStorage.setItem(USER_INFO, JSON.stringify(data));
                localStorage.setItem(USER_TOKEN, data.token);
                dispatch({error: null, type: 'LOGIN_SUCCESS', payload: {user: data}});
                return data;
            } else {
                console.log("error");
                dispatch({error: "Error en autenticacion", type: 'LOGIN_ERROR', payload: null});
                return null;
            }

        } catch (error) {
            console.log("error: " + error);
            dispatch({error: "Error en autenticacion", type: 'LOGIN_ERROR', payload: null});
            return null;
        }

    };
    const logout = () => {
        localStorage.removeItem(USER_INFO);
        dispatch({error: null, payload: null, type: 'LOGOUT'});
    }


    return (<AuthContext.Provider children={children} value={{user, dispatch, logout, loginUser}}/>)
};

export default AuthProvider;