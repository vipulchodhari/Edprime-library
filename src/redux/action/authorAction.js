import { REQUEST_ADD_AUTHOR, REQUEST_AUTHOR_DATA, REQUEST_DELETE_AUTHOR, REQUEST_EDIT_AUTHOR, REQUEST_FILTER_AUTHOR } from "./actionTypes"

export const Request_Author_Data = () => {
    // console.log("action called");
    return {
        type: REQUEST_AUTHOR_DATA
    }
}

export const Request_Author_Delete = (id) => {
    console.log("action called", id);
    return {
        type: REQUEST_DELETE_AUTHOR,
        id
    }
}

export const Request_Add_author = (name, img, Cname) => {
    // console.log("action called", name, img, Cname);
    return {
        type: REQUEST_ADD_AUTHOR,
        payload: {name, img, Cname}
    }
}

export const Request_Edit_author = (name, Cname, id) => {
    // console.log("action called", name, Cname, id);
    return {
        type: REQUEST_EDIT_AUTHOR,
        payload: {name, Cname, id}
    }
}

export const Request_Filter_author = (query) => {
    // console.log("action called", query);
    return {
        type: REQUEST_FILTER_AUTHOR,
        payload: {query}
    }
}