import axios from "axios";
import Multiselect from "multiselect-react-dropdown"
import { useEffect, useState } from "react";
import "../../styles/books.css";
import { getAuthorData, getCategoryData, getClassData, getGenreData, getLanguageData, getSubjectData } from "../../utils/getApi";

export const Books = () => {
    const [aunthorData, setAuthorData] = useState([]);
    const [genreData, setGenreData] = useState([]);
    const [classData, setClassData] = useState([]);
    const [subjectData, setSubjectData] = useState([]);
    const [languageData, setLanguageData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [author, setAuthor] = useState([]);
    const [genre, setGenre] = useState([]);
    const [classs, setClasss] = useState([]);
    const [subject, setSubject] = useState([]);

    console.log('author seclect,', author);
    console.log('genre seclect,', genre);
    console.log('classs seclect,', classs);
    console.log('subject seclect,', subject);
    const [text, setText] = useState({
        book_title: "",
        category_id: "",
        language_id: "",
        isbn: "",
        book_Images: "",
        status: "",
        created_by: ""
    })

    // const { booksAddData } = useSelector((state) => ({
    //     booksAddData: state.booksAddState.data
    // }))
    // console.log("saga data in component", booksAddData);
    // const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name } = e.target;
        setText({
            ...text,
            [name]: e.target.value
        })
        // console.log("text", text);
    }

    const handleSubmit = () => {
        axios.post(`http://192.100.100.52:5000/books`, {
            book_title: text.book_title,
            category_id: text.category_id,
            author_id: author,
            genre_id: genre,
            language_id: text.language_id,
            class_id: classs,
            subject_id: subject,
            isbn: text.isbn,
            book_Images: text.book_Images,
            status: text.status,
            created_by: text.created_by
        })
            .then((data) => console.log("post data", data))
            .catch((err) => console.log("post error", err.response.data.error))
    }

    useEffect(() => {
        getAuthorData().then((res) => setAuthorData(res))
        getGenreData().then((res) => setGenreData(res))
        getClassData().then((res) => setClassData(res))
        getSubjectData().then((res) => setSubjectData(res))
        getLanguageData().then((res) => setLanguageData(res))
        getCategoryData().then((res) => setCategoryData(res))
    }, [])

    const removeAuthor = async (arr, element) => {
        setAuthor(arr.filter(chekout))
        function chekout(target){
            let el = element;
            return target !== el;
        }
        // console.log('seclect author', author); 
    }

    const removeGenre = async (arr, element) => {
        setGenre(arr.filter(chekout))
        function chekout(target){
            let el = element;
            return target !== el;
        }
    }

    const removeClass = async (arr, element) => {
        setClasss(arr.filter(chekout))
        function chekout(target){
            let el = element;
            return target !== el;
        }
    }

    const removeSubject = async (arr, element) => {
        setSubject(arr.filter(chekout))
        function chekout(target){
            let el = element;
            return target !== el;
        }
    }
    return <div className="book-controller">
        <h1>Book Manage</h1>
        <div className="book-cont">
            <form className='book-form' onSubmit={(e) => e.preventDefault()}>
                <Multiselect 
                    options={aunthorData}
                    displayValue="title"   
                    // closeIcon="close"
                    onKeyPressFn={function noRefCheck() { }}
                    onRemove={(selectedList,selectedItem) => {
                        removeAuthor(selectedList,selectedItem);    
                    }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(selectedList,selectedItem) => {
                        let autId = [...author, selectedItem.id]
                        setAuthor(autId);
                    }}
                    placeholder={"Select author"}
                />
                <input onChange={handleChange} name='book_title' type='text' placeholder="Enter book title..." />
                <select className="book-status" name="category_id" onChange={handleChange}>
                    <option className="book-select-hidden">Select Category</option>
                    {categoryData.map((el, i) => {
                        return <option value={el.id} key={i}>{el.title}</option>
                    })}
                </select>
                <Multiselect 
                    options={genreData}
                    displayValue="title"   
                    onKeyPressFn={function noRefCheck() { }}
                    onRemove={(selectedList,selectedItem) => {
                        removeGenre(selectedList,selectedItem);    
                    }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(selectedList,selectedItem) => {
                        let autId = [...genre, selectedItem.id]
                        setGenre(autId);
                    }}
                    placeholder={"Select Genre"}
                />
                <select className="book-status" name="language_id" onChange={handleChange}>
                    <option className="book-select-hidden">Select Language</option>
                    {languageData.map((el, i) => {
                        return <option value={el.id} key={i}>{el.title}</option>
                    })}
                </select>
                <Multiselect 
                    options={classData}
                    displayValue="title"   
                    onKeyPressFn={function noRefCheck() { }}
                    onRemove={(selectedList,selectedItem) => {
                        removeClass(selectedList,selectedItem);    
                    }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(selectedList,selectedItem) => {
                        let autId = [...classs, selectedItem.id]
                        setClasss(autId);
                    }}
                    placeholder={"Select Class"}
                />
                <Multiselect 
                    options={subjectData}
                    displayValue="title"   
                    onKeyPressFn={function noRefCheck() { }}
                    onRemove={(selectedList,selectedItem) => {
                        removeSubject(selectedList,selectedItem);    
                    }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(selectedList,selectedItem) => {
                        let autId = [...subject, selectedItem.id]
                        setSubject(autId);
                    }}
                    placeholder={"Select Subject"}
                />
                <input onChange={handleChange} name="isbn" type='text' placeholder="Enter isbn..." />
                <input onChange={handleChange} name="book_Images" type='text' placeholder="Enter book images..." />
                <select className="book-status" name="status" onChange={handleChange}>
                    <option className="book-select-hidden">Select</option>
                    <option value='true'>Active</option>
                    <option value='false'>In Active</option>
                </select>
                <input onChange={handleChange} name="created_by" type='text' placeholder="Create By..." /><br/>

                <input onClick={handleSubmit} id='bookCont-submit-btn' type='submit' />
            </form>
        </div>
    </div>
}   