import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgInputFilePicker } from "../../utils/common";
import customerBorder from '../../assets/upload.jpg';
import { getAuthorData, getCategoryData, getClassData, getGenreData, getLanguageData, getSubjectData } from "../../utils/getApi";
const BookEditnew = () => {
    const params = useParams();
    const BookId  = params.id;
    console.log("params", BookId);

    const [editBookData, setEditBookData] = useState();

    
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

    // console.log('author seclect,', author);
    // console.log('genre seclect,', genre);
    // console.log('classs seclect,', classs);
    // console.log('subject seclect,', subject);
    
    const mydata = () => {
        axios.get(`http://192.100.100.111:3000/books/${BookId}`)
        .then((res) => {
         setEditBookData(res.data)
        });
    }
    console.log("edit params", editBookData);

    const [text, setText] = useState({
        book_title: "",
        category_id: "",
        language_id: "",
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
        // console.log("text", text);
    }

    const handleSubmit = () => {
        axios.post(`http://192.100.100.111:3000/books`, {
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
        mydata()
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

    const handleUpload = async () => {
        try {
            const book_Images = await imgInputFilePicker();
            setText({
                ...text,
                book_Images: book_Images.base64,
            })
        } catch (err) {
            console.log("error", err);
        }
    }

    return(
        <div className="addbook-controller">
        <h1>Book Create</h1>
        <div className="addbook-cont">
            <form className='addbook-form' onSubmit={(e) => e.preventDefault()}>
                <label className="addbook-lable"><u>Author name</u> :--</label>
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
                        let autId = [...author, selectedItem._id]
                        setAuthor(autId);

                        // console.log("author data", selectedItem);
                    }}
                    placeholder={"Select author"}
                />
                <label className="addbook-lable"><u>Book Title</u> :--</label>
                <input onChange={handleChange} name='book_title' type='text' placeholder="Enter book title..." />
                <label className="addbook-lable"><u>Category Type</u> :--</label>
                <select className="addbook-status" name="category_id" onChange={handleChange}>
                    <option className="addbook-select-hidden">Select Category</option>
                    {categoryData.map((el, i) => {
                        return <option value={el.id} key={i}>{el.title}</option>
                    })}
                </select>
                <label className="addbook-lable"><u>Genre name</u> :--</label>
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
                <label className="addbook-lable"><u>Book status</u> :--</label>
                <select className="addbook-status" name="language_id" onChange={handleChange}>
                    <option className="addbook-select-hidden">Select Language</option>
                    {languageData.map((el, i) => {
                        return <option value={el.id} key={i}>{el.title}</option>
                    })}
                </select>
                <label className="addbook-lable"><u>Class name</u> :--</label>
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
                <label className="addbook-lable"><u>Subject name</u> :--</label>
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
                <label className="addbook-lable"><u>ISBN Number</u> :--</label>
                <input onChange={handleChange} name="isbn" style={{letterSpacing:"2px"}} type='text' placeholder="Enter isbn..." />
                <label className="addbook-lable" style={{ marginTop: "30px"}}><u>Upload book Image</u> :--</label>
                {/* <input onChange={handleChange} name="addbook_Images" type='text' placeholder="Enter book images..." /> */}
                <img
                    style={{ width: "90px", height: "90px", borderRadius: "5px", cursor: 'pointer' }}
                    onClick={handleUpload}
                    src={
                        text.book_Images.length
                            ? `data:image/jpeg;base64,${text.book_Images}`
                            : customerBorder
                    }
                    alt="Upload Pic"
                    title=""
                />
                <label className="addbook-lable"><u>Book status :--</u></label>
                <select className="addbook-status" name="status" onChange={handleChange}>
                    <option className="addbook-select-hidden">Select</option>
                    <option value='true'>Active</option>
                    <option value='false'>In Active</option>
                </select>
                <label className="addbook-lable"><u>Member name</u> :--</label>
                <input onChange={handleChange} name="created_by" type='text' placeholder="Create By..." /><br/>

                <input onClick={handleSubmit} id='addbookCont-submit-btn' type='submit' />
            </form>
        </div>
    </div>
    )
}
export default BookEditnew;