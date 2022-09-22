import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const NewEditBook = () => {
    const [editBookData, setEditBookData] = useState();
    const params = useParams();
    const BookId  = params.id;
    console.log("params", BookId);
    
    const mydata = () => {
        axios.get(`http://192.100.100.111:1000/books/${BookId}`)
        .then((res) => {
            setEditBookData(res.data)
             console.log("get DAta", res.data)
        });
    }
    console.log("edit books params", editBookData);
    
    const handleChange = (e) => {
        const { name } = e.target;
        setEditBookData({
            ...editBookData,
            [name] : e.target.value
        })
    }

    useEffect(() => {
        mydata()
    }, [])
    return <div>
        <h1>hello</h1>
        <input value={editBookData?.book_title ?? ""} onChange={handleChange} name="book_title" type='text' />
    </div>
}