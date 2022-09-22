import axios from "axios";
import { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown"

import { imgInputFilePicker } from "../../utils/common";
import customerBorder from '../../assets/upload.jpg';
import { getAuthorData, getCategoryData, getClassData, getGenreData, getLanguageData, getSubjectData } from "../../utils/getApi";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const BookEdit = () => {
    const [editBookData, setEditBookData] = useState();
    const [EauthorData, setEauthorData] = useState([]);
    const [EgenreData, setEgenreData] = useState([]);
    const [EclassData, setEclassData] = useState([]);
    const [EsubjectData, setEsubjectData] = useState([]);
    const [showImg, setShowImg] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const BookId  = params.id;
    console.log("params", BookId);
    
    const mydata = () => {
        axios.get(`http://192.100.100.111:1000/books/${BookId}`)
        .then((res) => {
            setEditBookData(res.data)
            setEauthorData(res.data.authors)
            setEgenreData(res.data.genres)
            setEclassData(res.data.edClasss)
            setEsubjectData(res.data.subjects)

            console.log("get DAta", res.data)
        });
    }
    console.log("edit books params", editBookData); 
    console.log("EauthorData", EauthorData);  
    let imgSrc = `http://192.100.100.52:3500/${editBookData?.book_Images}`
                      
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

    const handleChange = (e) => {
        const { name } = e.target;
        setEditBookData({
            ...editBookData,
            [name]: e.target.value
        })
    };

    const handleSubmit = () => {
        axios.put(`http://192.100.100.111:1000/books/${BookId}`, {
            book_title: editBookData.book_title,
            bookCategoryId: editBookData.bookCategoryId,
            publisherId: editBookData.publisherId,
            authorIds: author,
            genreIds: genre,
            languageId: editBookData.languageId,
            edClassIds: classs,
            subjectIds: subject,
            isbn: editBookData.isbn,
            book_Images: editBookData.book_Images,
            status: editBookData.status,
            created_by: editBookData.created_by,
            modified_by: editBookData.modified_by
        })
            .then((data) => console.log("post data", data))
            .catch((err) => console.log("post error", err.response.data.error))

            navigate("/books")
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
            return target.id !== el;
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

    // const handleUpload = async () => {
    //     try {
    //         const book_Images = await imgInputFilePicker();
    //         setText({
    //             ...text,
    //             book_Images: book_Images.base64,
    //         })
    //     } catch (err) {
    //         console.log("error", err);
    //     }
    // }

    const handleUpload = (e) => {
        let files = e.target.files;
        console.log("image", files[0])

        setEditBookData({
            ...editBookData,
            book_Images: files[0]
        })
        setShowImg(URL.createObjectURL(files[0]))
        // setAuthro_image()
    }

    return<div className="addbook-controller">
        <h1>Book Edit</h1>
        {/* {editBookData?.map((el) => {
            return <h3>{el?.authors?.title ?? "ksfjfgkfdg"}</h3>
        })} */}
        <div className="addbook-cont">
            <form className='addbook-form' onSubmit={(e) => e.preventDefault()}>
                <label className="addbook-lable"><u>Author name</u> :--</label>
                <Multiselect 
                    options={authorData}
                    displayValue="title"   
                    // closeIcon="close"
                    isObject={true}
                    selectedValues={EauthorData}    
                    onKeyPressFn={function noRefCheck() { }}
                    onRemove={(selectedList,selectedItem) => {
                        removeAuthor(selectedList,selectedItem);    
                    }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(selectedList,selectedItem) => {
                        let autId = [...author, selectedItem.id]
                        console.log("author id", selectedItem.id);
                        setAuthor(autId);
                    }}
                    placeholder={"Select author"}
                />
                <label className="addbook-lable"><u>Book Title</u> :--</label>
                <input value={editBookData?.book_title ?? ""} onChange={handleChange} name='book_title' type='text' placeholder="Enter book title..." />
                <label className="addbook-lable"><u>Category Type</u> :--</label>
                <select defaultValue={editBookData?.languageId} className="addbook-status" name="category_id" onChange={handleChange}>
                    <option value={editBookData?.bookCategoryId} className="addbook-select-hidden">{editBookData?.bookCategory?.title ?? ""}</option>
                    {categoryData?.map((el, i) => {
                        return <option value={el?.id ?? "dummy"} key={i}>{el?.title ?? 'dummy'}</option>
                    })}
                </select>
                <label className="addbook-lable"><u>Genre name</u> :--</label>
                <Multiselect 
                    options={genreData}
                    displayValue="title"   
                    isObject={true}
                    selectedValues={EgenreData}
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
                <select defaultValue={editBookData?.languageId} className="addbook-status" name="language_id" onChange={handleChange}>
                    <option value={editBookData?.languageId} className="addbook-select-hidden">{editBookData?.language?.title ?? ""}</option>
                    {languageData?.map((el, i) => {
                        return <option value={el?.id ?? 'dummy'} key={i}>{el?.title ?? 'dummy'}</option>
                    })}
                </select>
                <label className="addbook-lable"><u>Class name</u> :--</label>
                <Multiselect 
                    options={classData}
                    displayValue="title"   
                    selectedValues={EclassData}
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
                    selectedValues={EsubjectData}
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
                <input value={editBookData?.isbn ?? ""} onChange={handleChange} name="isbn" style={{letterSpacing:"2px"}} type='text' placeholder="Enter isbn..." />
                <label className="addbook-lable" style={{ marginTop: "30px"}}><u>Upload book Image</u> :--</label>
                {/* <img
                    style={{ width: "90px", height: "90px", borderRadius: "5px", cursor: 'pointer' }}
                    onClick={handleUpload}
                    src={
                        text.book_Images.length
                            ? `data:image/jpeg;base64,${text.book_Images}`
                            : customerBorder
                    }
                    alt="Upload Pic"
                    title=""
                /> */}
                
                <div style={{display: "flex"}}>
                 <label htmlFor="file-input">
                    <img style={{ cursor: 'pointer', width: "90px", height: "90px", borderRadius: "5px" }} src={showImg? showImg: imgSrc} alt="upload pic" />
                    <p style={{ marginTop: '0px', color: 'gray' }}><strong>{showImg?editBookData?.book_Images.name:editBookData?.book_Images}</strong></p>
                </label>
                <input
                    style={{ display: 'none', cursor: 'pointer' }}
                    id="file-input"
                    type='file'
                    onChange={handleUpload}
                />
                </div>
                <label className="addbook-lable"><u>Book status :--</u></label>
                <select defaultValue={editBookData?.languageId} className="addbook-status" name="status" onChange={handleChange}>
                    <option value={editBookData?.status} className="addbook-select-hidden">{editBookData?.status === true?"Active":"In Active"}</option>
                    <option value='true'>Active</option>
                    <option value='false'>In Active</option>
                </select>
                <label className="addbook-lable"><u>Member name</u> :--</label>
                <input value={editBookData?.created_by} onChange={handleChange} name="created_by" type='text' placeholder="Create By..." /><br/>
                <input value={editBookData?.modified_by} onChange={handleChange} name="modified_by" type='text' placeholder="Modified By..." /><br />

                <input onClick={handleSubmit} id='addbookCont-submit-btn' type='submit' />
            </form>
        </div>
    </div>
}   