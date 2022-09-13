import axios from "axios";
import { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown"

import { imgInputFilePicker } from "../../utils/common";
import customerBorder from '../../assets/upload.jpg';
import { getAuthorData, getCategoryData, getClassData, getGenreData, getLanguageData, getSubjectData } from "../../utils/getApi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const BookEdit = () => {
    const [editBookData, setEditBookData] = useState();
    const params = useParams();
    const BookId  = params.id;
    console.log("params", BookId);
    
    const mydata = () => {
        axios.get(`http://192.100.100.111:3000/books/${BookId}`)
        .then((res) => {
            setEditBookData(res.data)
            //  console.log(editBookData)
        });
    }
    console.log("edit books params", editBookData.author.title);   
                      
    const [authorData, setAuthorData] = useState();
    const [genreData, setGenreData] = useState();
    const [classData, setClassData] = useState();
    const [subjectData, setSubjectData] = useState();
    const [languageData, setLanguageData] = useState();
    const [categoryData, setCategoryData] = useState();
    const [author, setAuthor] = useState();
    const [genre, setGenre] = useState();
    const [classs, setClasss] = useState();
    const [subject, setSubject] = useState();

    // console.log('author seclect,', author);
    // console.log('genre seclect,', genre);
    // console.log('classs seclect,', classs);
    // console.log('subject seclect,', subject);

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
        mydata();
        getAuthorData().then((res) => setAuthorData(res))
        getGenreData().then((res) => setGenreData(res))
        getClassData().then((res) => setClassData(res))
        getSubjectData().then((res) => setSubjectData(res))
        getLanguageData().then((res) => setLanguageData(res))
        getCategoryData().then((res) => setCategoryData(res))
    }, [])
    // console.log("author data", authorData);

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

    // console.log("title", text.book_title);

    return<div className="addbook-controller">
        <h1>Book Edit</h1>
        
        <div className="addbook-cont">
        {/* <p className="authoredit-close-btn" onClick={() => {setClose(false)}}>x</p> */}
            <form className='addbook-form' onSubmit={(e) => e.preventDefault()}>
                <label className="addbook-lable"><u>Author name</u> :--</label>
                <Multiselect 
                    options={authorData}
                    displayValue="title"   
                    // closeIcon="close"
                    selectedValues={author}
                    onKeyPressFn={function noRefCheck() { }}
                    onRemove={(selectedList,selectedItem) => {
                        removeAuthor(selectedList,selectedItem);    
                    }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(selectedList,selectedItem) => {
                        let autId = [...author, selectedItem._id]
                        console.log("author id", selectedItem._id);
                        setAuthor(autId);
                    }}
                    placeholder={"Select author"}
                />
                <label className="addbook-lable"><u>Book Title</u> :--</label>
                <input onChange={handleChange} name='book_title' type='text' placeholder="Enter book title..." />
                {/* <input value={Ename} onChange={(e) => setEname(e.target.value)} name='book_title' type='text' placeholder="Enter book title..." /> */}
                <label className="addbook-lable"><u>Category Type</u> :--</label>
                <select className="addbook-status" name="category_id" onChange={handleChange}>
                    <option className="addbook-select-hidden">{text.category_id}</option>
                    {/* {categoryData.map((el, i) => {
                        return <option value={el.id} key={i}>{el.title}</option>
                    })} */}
                </select>
                <label className="addbook-lable"><u>Genre name</u> :--</label>
                <Multiselect 
                    options={genreData}
                    displayValue="title"   
                    selectedValues={genre}
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
                <label className="addbook-lable"><u>Book Language</u> :--</label>
                <select className="addbook-status" name="language_id" onChange={handleChange}>
                    <option className="addbook-select-hidden">{text.language_id}</option>
                    {/* {languageData.map((el, i) => {
                        return <option value={el.id} key={i}>{el.title}</option>
                    })} */}
                </select>
                <label className="addbook-lable"><u>Class name</u> :--</label>
                <Multiselect 
                    options={classData}
                    displayValue="title"   
                    selectedValues={classs}
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
                    selectedValues={subject}
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
                    <option value={text.status?"Active":"In Active"} className="addbook-select-hidden">{text.status?"Active":"In Active"}</option>
                    <option value='true'>Active</option>
                    <option value='false'>In Active</option>
                </select>
                <label className="addbook-lable"><u>Member name</u> :--</label>
                <input onChange={handleChange} name="created_by" type='text' placeholder="Create By..." /><br/>

                <input onClick={handleSubmit} id='addbookCont-submit-btn' type='submit' />
            </form>
        </div>
    </div>
}   