import { RECEIVE_CLASS_DATA, RECEIVE_EDITBOOK_DATA, RECEIVE_GENRE_DATA } from "../action/actionTypes"

const init_state = {
    data: []
}

export const bookAddReducer = (state = init_state, { type, payload }) => {
    switch (type) {
        case RECEIVE_GENRE_DATA:
            // console.log("reducer data", payload.data.data);
            return {
                ...state,
                data: payload.data.data
            }
        case RECEIVE_EDITBOOK_DATA:
            console.log("reducer data", payload.data.data);
            return {
                ...state,
                data: payload.data.data
            }

        default:
            return state
    }
}