import { REQUEST_CLASS_DATA, REQUEST_GENRE_DATA, REQUEST_SUBJECT_DATA } from "./actionTypes";

export const Request_Subject_Data = () => {
    console.log('action called');
    return {
        type: REQUEST_SUBJECT_DATA
    }
}

export const Request_Genre_Data = () => {
    // console.log('action called');
    return {
        type: REQUEST_GENRE_DATA
    }
}

export const Request_Class_Data = () => {
    console.log('action called');
    return {
        type: REQUEST_CLASS_DATA
    }
}