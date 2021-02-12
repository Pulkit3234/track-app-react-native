import React, {useState,} from 'react';
import createDataContext from './createDataContext';
import server from '../api/server'
import {Navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type){
        case  'error_msg':
            return {...state, errorMessage : action.payload};
            case 'signup':
                return {error: '', token : action.payload}
    default:
        return state;
    }
}


const Signup = (dispatch) => {
    return async({email, password}) => {

        try{

        const response = await server.post('/signup', {email, password});
            console.log(response.data);
            dispatch({type : 'signup', payload : response.data.token});

            navigate('Tracklist');
        }
        catch(error){
            console.log(error.message);
            dispatch({type : 'error_msg', payload : 'Something went wrong'})
        }

        const app = () => {
            
        }



    }
}


export const {Context, Provider} = createDataContext(authReducer, {Signup}, {token : null, errorMessage : ''});