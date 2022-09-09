import { RECEIVE_ADD_AUTHOR, RECEIVE_AUTHOR_DATA, RECEIVE_DELETE_AUTHOR, RECEIVE_EDIT_AUTHOR, RECEIVE_FILTER_AUTHOR } from "../action/actionTypes"

const init_state = {
    data: []
}

export const authorReducer = (state = init_state, { type, payload }) => {
    switch (type) {
        case RECEIVE_AUTHOR_DATA:
            // console.log("reducer data", payload.data.data);
            return {
                ...state,
                data: payload.data.data
            }
        case RECEIVE_ADD_AUTHOR:
            // console.log("reducer Add data", payload.data.data);
            return {
                ...state,
                data: payload.data.data
            }
        case RECEIVE_DELETE_AUTHOR:
            // console.log("reducer DELETEauthor", payload);
            return {
                ...state,
                data: payload.data.data
            }
        case RECEIVE_EDIT_AUTHOR:
            // console.log("reducer Edit data", payload);
            return {
                ...state,
                data: payload.data.data
            }
        case RECEIVE_FILTER_AUTHOR:
            // console.log("reducer Edit data", payload);
            return {
                ...state,
                data: payload.data.data
            }

        default:
            return state
    }
}