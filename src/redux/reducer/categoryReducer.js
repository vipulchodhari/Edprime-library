import { RECEIVE_ADD_DATA, RECEIVE_DELETE, RECEIVE_EDIT_DATA, RECEIVE_FETCHDATA } from "../action/actionTypes"

const init_state = {
     data: []
}

export const categoryReducer = (state=init_state, {type, payload}) => {
    switch(type){
        case RECEIVE_FETCHDATA:
            // console.log("reducer data", payload.data.data);
            return {
                ...state,
                data: payload.data.data
            }
        case RECEIVE_DELETE:
            // console.log("reducer DELETEdata", payload);
            return {
                ...state,
                data:  payload.data.data
            }
        case RECEIVE_ADD_DATA:
            // console.log("reducer Add data", payload);
            return {
                ...state,
                data:  payload.data.data
            }
        case RECEIVE_EDIT_DATA:
            console.log("reducer Edit data", payload);
            return {
                ...state,
                data:  payload.data.data
            }

            default:
                return state
    }
}