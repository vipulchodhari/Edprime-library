import React, { useContext, useState } from "react";
const editbookContext = React.createContext()

export function useEditBook() {
    return useContext(editbookContext)
}

export function EditBookProvider(){
    const [EditBookData, setEditBookData] = useState([]);
}