import { RECEIVE_BOOK_DATA, RECEIVE_EDITBOOK_DATA } from "../action/actionTypes"

const init_state = {
    data: []
}

export const bookAddReducer = (state = init_state, { type, payload }) => {
    switch (type) {
        case RECEIVE_BOOK_DATA:
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