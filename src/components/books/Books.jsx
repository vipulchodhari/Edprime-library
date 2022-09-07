import axios from "axios";
import Multiselect from "multiselect-react-dropdown"
import { useEffect, useState } from "react";
import "../../styles/books.css";

export const Books = () => {
    const [bookData, setBookData] = useState([]);
    const [author, setAuthor] = useState([]);
    console.log('seclect author', author);
    const [text, setText] = useState({
        book_title: "",
        category_id: "",
        genre_id: "",
        language_id: "",
        class_id: "",
        subject_id: "",
        isbn: "",
        book_Images: "",
        status: "",
        created_by: ""
    })

    const handleChange = (e) => {
        const { name } = e.target;
        setText({
            ...text,
            [name]: e.target.value
        })
        console.log("text", text);
    }

    const handleSubmit = () => {
        axios.post(`http://192.100.100.52:5000/books`, {
            book_title: text.book_title,
            category_id: text.category_id,
            author_id: author,
            genre_id: [text.genre_id],
            language_id: text.language_id,
            class_id: [text.class_id],
            subject_id: [text.subject_id],
            isbn: text.isbn,
            book_Images: text.book_Images,
            status: text.status,
            created_by: text.created_by
        })
            .then((data) => console.log("post data", data))
            .catch((err) => console.log("post error", err.response.data.error))
    }

    const getBookData = () => {
        fetch(`http://192.100.100.52:5000/authors`)
            .then((data) => data.json())
            .then((res) => setBookData(res))
    }
    // console.log("data", bookData);
    useEffect(() => {
        getBookData()
    }, [])

    const removeAuthor = async (arr, element) => {
        setAuthor(arr.filter(chekout))

        function chekout(target){
            let el = element;
            return target !== el;
        }
        // console.log('seclect author', author); 
    }
    return <div className="book-controller">
        <h1>Book Manage</h1>
        <div className="book-cont">
            <form className='book-form' onSubmit={(e) => e.preventDefault()}>
                <Multiselect 
                    options={bookData}
                    displayValue="title"   
                    closeIcon="close"
                    onKeyPressFn={function noRefCheck() { }}
                    onRemove={(selectedList,selectedItem) => {
                        removeAuthor(selectedList,selectedItem);    
                    }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(selectedList,selectedItem) => {
                        let autId = [...author, selectedItem.id]
                        setAuthor(autId);
                        // console.log("id", autId);
                        // console.log("selectedList", selectedItem);
                    }}
                    placeholder={"Select author"}
                />
                <input onChange={handleChange} name='book_title' type='text' placeholder="Enter book title..." />
                <input onChange={handleChange} name="category_id" type='text' placeholder="Enter category name..." />
                <input onChange={handleChange} name="genre_id" type='text' placeholder="Enter genre name..." />
                <input onChange={handleChange} name="language_id" type='text' placeholder="Enter language..." />
                <input onChange={handleChange} name="class_id" type='text' placeholder="Enter class..." />
                <input onChange={handleChange} name="subject_id" type='text' placeholder="Enter subject..." />
                <input onChange={handleChange} name="isbn" type='text' placeholder="Enter isbn..." />
                <input onChange={handleChange} name="book_Images" type='text' placeholder="Enter book images..." />
                {/* <input onChange={handleChange} name="status" type='text' placeholder="Enter book title1235..." /> */}
                <select className="book-status" name="status" onChange={handleChange}>
                    <option className="book-select-hidden">Select</option>
                    <option value='Active'>Active</option>
                    <option value='In Active'>In Active</option>
                </select>
                <input onChange={handleChange} name="created_by" type='text' placeholder="Create By..." /><br/>
                {/* <input type='text' placeholder="Enter book title..." /> */}

                <input onClick={handleSubmit} id='bookCont-submit-btn' type='submit' />
            </form>
        </div>
    </div>
}   