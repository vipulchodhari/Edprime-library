import { RECEIVE_ADD_MEMBER, RECEIVE_DELETE_MEMBER, RECEIVE_EDIT_MEMBER, RECEIVE_MEMBER_DATA, RECEIVE_SEARCH_MEMBER } from "../action/actionTypes";

const init_state = {
    data: []
}

export const memberReducer = (state = init_state, { type, payload }) => {
    switch (type) {
        case RECEIVE_MEMBER_DATA:
            // console.log("reducer data", payload.data.data);
            return {
                ...state,
                data: payload.data.data
            }
        case RECEIVE_SEARCH_MEMBER:
            console.log("reducer data", payload.data.data);
            return {
                ...state,
                data: payload.data.data
            }
        case RECEIVE_EDIT_MEMBER:
            console.log("reducer data", payload.data.data);
            return {
                ...state,
                data: payload.data.data
            }
        case RECEIVE_ADD_MEMBER:
            console.log("reducer data", payload.data.data);
            return {
                ...state,
                data: payload.data.data
            }
        case RECEIVE_DELETE_MEMBER:
            console.log("reducer data", payload.data.data);
            return {
                ...state,
                data: payload.data.data
            }

        default:
            return state
    }
}