import {REQUEST_FETCHDATA_GENRE,  REQUEST_DELETE_GENRE, REQUEST_ADD_DATA_GENRE, REQUEST_EDIT_DATA_GENRE } from "./actionTypes"

export const Request_Genre_Data = () => {
    // console.log("action called");
    return {
        type: REQUEST_FETCHDATA_GENRE
    }
}

export const Request_Delete_Genre = (id) => {
    console.log("action called", id);
    return {
        type: REQUEST_DELETE_GENRE,
        id
    }
}

export const Request_Add_Genre= (image, title, created_by, modified_by, status) => {
    console.log("add action called", image, title, created_by, modified_by, status);
    return {
        type: REQUEST_ADD_DATA_GENRE,
        payload: {image, title, created_by, modified_by, status}
    }
}

export const Request_Edit_Genre = (image, title, created_by, modified_by, status, id) => {
    console.log("edit action called", image, title, created_by, modified_by, status, id);
    return {
        type: REQUEST_EDIT_DATA_GENRE,
        payload: {image, title, created_by, modified_by, status, id}
    }
}