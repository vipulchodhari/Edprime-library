import {RECEIVE_FETCHDATA_GENRE , RECEIVE_DELETE_GENRE, RECEIVE_ADD_DATA_GENRE,RECEIVE_EDIT_DATA_GENRE } from "../action/actionTypes"

const init_state = {
     data: []
}

export const genreReducer = (state=init_state, {type, payload}) => {
    switch(type){
        case RECEIVE_FETCHDATA_GENRE :
            // console.log("reducer data", payload.data.data);
            return {
                ...state,
                data: payload.data.data
            }
        case  RECEIVE_DELETE_GENRE:
            console.log("reducer DELETEdata", payload);
            return {
                ...state,
                data:  payload.data.data
            }
        case RECEIVE_ADD_DATA_GENRE:
            // console.log("reducer Add data", payload);
            return {
                ...state,
                data:  payload.data.data
            }
        case RECEIVE_EDIT_DATA_GENRE:
            console.log("reducer Edit data", payload);
            return {
                ...state,
                data:  payload.data.data
            }

            default:
                return state
    }
}