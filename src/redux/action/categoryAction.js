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

export const Request_Add_Data = (title, status) => {
    // console.log("add action called", title, status);
    return {
        type: REQUEST_ADD_DATA,
        payload: {title, status}
    }
}

export const Request_Edit_Data = (name, Status, id) => {
    // console.log("edit action called", name, Status, id);
    return {
        type: REQUEST_EDIT_DATA,
        payload: {name, Status, id}
    }
}