import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { booksUrl } from "../utils/common";
const editbookContext = React.createContext()

export function useEditBook() {
    return useContext(editbookContext)
}

export function EditBookProvider({ children }){
    const [EditBookData, setEditBookData] = useState([]);
    const [bookList, setBookList] = useState([]);


    useEffect(() => {
        const getBooksData = async() => {
            await axios.get(booksUrl)
            .then((res) => setBookList(res.data))
        }
        return getBooksData
    }, [])
    console.log("booklist", bookList);

    const value = {
        bookList
    }

    return(
        <EditBookProvider value={value}>
            { children }
        </EditBookProvider>
    )
}