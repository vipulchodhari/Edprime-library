import axios from "axios";
import Multiselect from "multiselect-react-dropdown"
import { useEffect, useState } from "react";
import customerBorder from '../../assets/upload.jpg';
import { getAuthorData, getCategoryData, getClassData, getGenreData, getLanguageData, getPublisherData, getSubjectData } from "../../utils/getApi";
import { useNavigate } from "react-router-dom";

export const AddBooks = () => {
    const [aunthorData, setAuthorData] = useState([]);
    const [genreData, setGenreData] = useState([]);
    const [classData, setClassData] = useState([]);
    const [subjectData, setSubjectData] = useState([]);
    const [languageData, setLanguageData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [publisherData, setPublisherData] = useState([]);
    const [author, setAuthor] = useState([]);
    const [genre, setGenre] = useState([]);
    const [classs, setClasss] = useState([]);
    const [subject, setSubject] = useState([]);

    const navigate = useNavigate();

    console.log('author seclect,', author);
    console.log('genre seclect,', genre);
    console.log('classs seclect,', classs);
    console.log('subject seclect,', subject);

    const [text, setText] = useState({
        book_title: "",
        bookCategoryId: 0,
        languageId: 0,
        publisherId: 0,
        isbn: "",
        book_Images: "",
        status: "",
        created_by: "",
        modified_by: "",
        show_img: ""
    })
    console.log("pubshiler", text.publisherId, text.bookCategoryId);

    const handleChange = (e) => {
        const { name } = e.target;
        setText({
            ...text,
            [name]: e.target.value
        })
        // console.log("text", text);
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", text.book_Images)

        try {
            const res = await axios({
                method: "post",
                url: 'http://192.100.100.52:3500/files',
                data: formData
            })
            console.log("response", res);
            await axios.post(`http://192.100.100.111:1000/books`, {
            book_title: text.book_title,
            bookCategoryId: +text.bookCategoryId,
            authorIds: author,
            genreIds: genre,
            languageId: +text.languageId,
            edClassIds: classs,
            subjectIds: subject,
            publisherId: +text.publisherId,
            isbn: text.isbn,
            book_Images: res.data,
            status: text.status === "true",
            created_by: text.created_by,
            modified_by: text.modified_by
        })
            .then((data) => console.log("post data", data))
            alert("final submit work")
            navigate("/books")
        } catch (err) {
            console.log("error", err)
        }

        
            // .catch((err) => console.log("post error", err.response.data.error))
    }

    useEffect(() => {
        getAuthorData().then((res) => setAuthorData(res))
        getGenreData().then((res) => setGenreData(res))
        getClassData().then((res) => setClassData(res))
        getSubjectData().then((res) => setSubjectData(res))
        getLanguageData().then((res) => setLanguageData(res))
        getCategoryData().then((res) => setCategoryData(res))
        getPublisherData().then((res) => setPublisherData(res))
    }, [])

    const removeAuthor = async (arr, element) => {
        setAuthor(arr.filter(chekout))
        function chekout(target) {
            let el = element;
            return target !== el;
        }
        // console.log('seclect author', author); 
    }

    const removeGenre = async (arr, element) => {
        setGenre(arr.filter(chekout))
        function chekout(target) {
            let el = element;
            return target !== el;
        }
    }

    const removeClass = async (arr, element) => {
        setClasss(arr.filter(chekout))
        function chekout(target) {
            let el = element;
            return target !== el;
        }
    }

    const removeSubject = async (arr, element) => {
        setSubject(arr.filter(chekout))
        function chekout(target) {
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
        // setFile(URL.createObjectURL(e.target.files[0]));
        console.log("image", files[0])

        setText({
            ...text,
            show_img: URL.createObjectURL(files[0]),
            book_Images: files[0]
        })
        // setAuthro_image()
    }
    console.log("jfkldfjdl", text.book_Images);

    return <div className="addbook-controller">
        <h1>Book Create</h1>
        <div className="addbook-cont">
            <form className='addbook-form'>
                <label className="addbook-lable"><u>Author name</u> :--</label>
                <Multiselect
                    options={aunthorData}
                    displayValue="title"
                    // closeIcon="close"
                    onKeyPressFn={function noRefCheck() { }}
                    onRemove={(selectedList, selectedItem) => {
                        removeAuthor(selectedList, selectedItem);
                    }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(selectedList, selectedItem) => {
                        let autId = [...author, selectedItem.id]
                        setAuthor(autId);

                        // console.log("author data", selectedItem);
                    }}
                    placeholder={"Select author"}
                />
                <label className="addbook-lable"><u>Book Title</u> :--</label>
                <input onChange={handleChange} name='book_title' type='text' placeholder="Enter book title..." />
                <label className="addbook-lable"><u>Category Type</u> :--</label>
                <select className="addbook-status" name="bookCategoryId" onChange={handleChange}>
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
                    onRemove={(selectedList, selectedItem) => {
                        removeGenre(selectedList, selectedItem);
                    }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(selectedList, selectedItem) => {
                        let autId = [...genre, selectedItem.id]
                        setGenre(autId);
                    }}
                    placeholder={"Select Genre"}
                />
                <label className="addbook-lable"><u>Book status</u> :--</label>
                <select className="addbook-status" name="languageId" onChange={handleChange}>
                    <option className="addbook-select-hidden">Select Language</option>
                    {languageData.map((el, i) => {
                        return <option value={el.id} key={i}>{el.title}</option>
                    })}
                </select>
                <label className="addbook-lable"><u>Publisher Name</u> :--</label>
                <select className="addbook-status" name="publisherId" onChange={handleChange}>
                    <option className="addbook-select-hidden">Select Publisher</option>
                    {publisherData.map((el, i) => {
                        return <option value={el.id} key={i}>{el.title}</option>
                    })}
                </select>
                <label className="addbook-lable"><u>Class name</u> :--</label>
                <Multiselect
                    options={classData}
                    displayValue="title"
                    onKeyPressFn={function noRefCheck() { }}
                    onRemove={(selectedList, selectedItem) => {
                        removeClass(selectedList, selectedItem);
                    }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(selectedList, selectedItem) => {
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
                    onRemove={(selectedList, selectedItem) => {
                        removeSubject(selectedList, selectedItem);
                    }}
                    onSearch={function noRefCheck() { }}
                    onSelect={(selectedList, selectedItem) => {
                        let autId = [...subject, selectedItem.id]
                        setSubject(autId);
                    }}
                    placeholder={"Select Subject"}
                />
                <label className="addbook-lable"><u>ISBN Number</u> :--</label>
                <input onChange={handleChange} name="isbn" style={{ letterSpacing: "2px" }} type='text'   placeholder="Enter isbn..." />

                <label className="addbook-lable" style={{ marginTop: "30px" }}><u>Upload book Image</u> :--</label>
                <div style={{display: "flex"}}>
                <label htmlFor="file-input">
                    <img style={{ cursor: 'pointer', width: "90px", height: "90px", borderRadius: "5px" }} src={    text.book_Images? text.show_img : customerBorder} alt="upload pic" />
                    <p style={{ marginTop: '0px', color: 'gray' }}><strong>{text.book_Images.name}</strong></p>
                </label>
                <input
                    style={{ display: 'none', cursor: 'pointer' }}
                    // style={{ marginTop:'25px' }}
                    id="file-input"
                    type='file'
                    onChange={handleUpload}
                />
                {/* <img 
                  style={{ width: "90px", height: "90px", borderRadius: "5px"}}
                  src={text.book_Images? text.show_img : ""} alt=''/> */}
                </div>

                <label className="addbook-lable"><u>Book status :--</u></label>
                <select className="addbook-status" name="status" onChange={handleChange}>
                    <option className="addbook-select-hidden">Select</option>
                    <option value='true'>Active</option>
                    <option value='false'>In Active</option>
                </select>
                <label className="addbook-lable"><u>Member name</u> :--</label>
                <input onChange={handleChange} name="created_by" type='text' placeholder="Create By..." /><br />
                <input onChange={handleChange} name="modified_by" type='text' placeholder="Modified By..." /><br />

                <input onClick={handleSubmit} id='addbookCont-submit-btn' type='submit' />
            </form>
        </div>
    </div>
}   