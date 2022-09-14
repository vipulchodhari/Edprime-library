import { REQUEST_ADD_DATA, REQUEST_DELETE, REQUEST_EDIT_DATA, REQUEST_FETCHDATA } from "./actionTypes"

export const Request_Fetchdata = () => {
    // console.log("action called");
    return {
        type: REQUEST_FETCHDATA
    }
}

export const Request_Delete = (id) => {
    // console.log("action called", id);
    return {
        type: REQUEST_DELETE,
        id
    }
}

export const Request_Add_Data = (image, title, created_by, modified_by, status) => {
    console.log("add action called", image, title, created_by, modified_by, status);
    return {
        type: REQUEST_ADD_DATA,
        payload: {image, title, created_by, modified_by, status}
    }
}

export const Request_Edit_Data = (image, title, created_by, modified_by, status, id) => {
    console.log("edit action called", image, title, created_by, modified_by, status, id);
    return {
        type: REQUEST_EDIT_DATA,
        payload: {image, title, created_by, modified_by, status, id}
    }
}