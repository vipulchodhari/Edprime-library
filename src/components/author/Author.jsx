import edit from '../../assets/edit.png';
import remove from '../../assets/remove.png';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Request_Add_author, Request_Author_Data, Request_Author_Delete, Request_Filter_author } from "../../redux/action/authorAction";
import { AuthorEdit } from './AuthorEdit';
import axios from 'axios';
import { imgInputFilePicker } from '../../utils/common';
import customerBorder from '../../assets/upload.jpg';
import SearchIcon from '@mui/icons-material/Search';
import '../../styles/author.css';
import { Link } from 'react-router-dom';

export const Author = () => {
    const [editData, setEditData] = useState();
    const [close, setClose] = useState(false);
    const [query, setQuery] = useState('')
    
    const [text, setText] = useState({
        title: "",
        author_image: "",
        created_by: ""
    });

    let { authorData } = useSelector((state) => ({
        authorData: state.authorState.data
    }))
    console.log("saga data in component", authorData);

    authorData = authorData.filter((author) =>
                    author.title.toLowerCase().includes(query) ||
                    author.created_by.toLowerCase().includes(query)
    )

    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name } = e.target;
        setText({
            ...text,
            [name]: e.target.value
        });
        // console.log("text", e.target.value);
    }

    const handleUpload = async () => {
        try {
            const authorImg = await imgInputFilePicker();
            setText({
                ...text,
                author_image: authorImg.base64,
            })
        } catch (err) {
            console.log("error", err);
        }
    }

    // const handleUpload = (e) => {
    //     let files = e.target.files;
    //     let reader = new FileReader();

    //     reader.readAsDataURL(files[0]);
    //     reader.onload = (e) => {
    //         console.log("img data", e.target.result);
    //         setText({
    //             ...text,
    //             author_image: e.target.result
    //         })
    //     }
    // }

    const handleDelete = (id) => {
        dispatch(Request_Author_Delete(id))
    }

    const handleEdit = (item) => {
        setEditData(item)
        setClose(true);
        console.log("edit item", item);
    }

    const handleSubmit = () => {
        dispatch(Request_Add_author(text.title, text.author_image, text.created_by))
    }

    const filterData = (e) => {
        e.preventDefault()
        // let query = e.target.value;
        setQuery(e.target.value)

        // dispatch(Request_Filter_author(query))
    };

    useEffect(() => {
        dispatch(Request_Author_Data());
    }, [])

    return <div className="author-controller">
        <h1>author List</h1>
        <div className="author-cont">
            <form className='user-form' onSubmit={(e) => {
                e.preventDefault();
                setText({
                    title: "",
                    author_image: "",
                    created_by: ""
                })
            }}>
                <img
                    style={{ width: "90px", height: "90px", borderRadius: "50%", cursor: 'pointer' }}
                    onClick={handleUpload}
                    src={
                        text.author_image.length
                            ? `data:image/jpeg;base64,${text.author_image}`
                            : customerBorder
                    }
                    alt="Upload Pic"
                    title=""
                /><br />
                {/* <input
                    onChange={handleUpload}
                    name="author_image"
                    type='file'
                    // value={text.author_image}
                /><br /> */}
                <input
                    onChange={handleChange}
                    name="title"
                    type='text'
                    value={text.title}
                    placeholder='Enter author name...'
                /><br />
                <input
                    onChange={handleChange}
                    name="created_by"
                    type='text'
                    value={text.created_by}
                    placeholder='Enter created by...'
                /><br />

                <input onClick={handleSubmit} id='submit-btn' type='submit' />
            </form>

            <form className='user-form author-search'>
                <SearchIcon className='author-searchIcon' />
                <input onChange={filterData} type='text' placeholder='Search by name...' />&nbsp;&nbsp;
            </form>
        </div>

        <div className='category-list-cont'>
            <table className='category-list-table author-list-table'>
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>Author image</th>
                        <th>Author Name</th>
                        <th>Created By</th>
                        <th>Remove</th>
                        <th>Edit</th>
                    </tr>

                    {authorData.length?authorData.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td className='author-list-imgTag'>
                                <Link to='/author-details' className='link-decoration'>
                                    <img className='author-list-img' src={`data:image/jpeg;base64,${item.author_image}`} alt='' />
                                </Link>
                            </td>
                            <td>
                                <Link to='/author-details' className='link-decoration'>
                                    {item.title}
                                </Link>
                            </td>
                            <td>{item.created_by}</td>
                            <td>
                                <img
                                    alt='Delete'
                                    src={remove}
                                    onClick={(e) => handleDelete(item._id)}
                                    className='category-list-icon'
                                />
                            </td>
                            <td>
                                <img
                                    alt='Edit'
                                    className='category-list-icon'
                                    onClick={(e) => handleEdit(item)}
                                    src={edit}
                                />
                            </td>
                        </tr>
                    )): "No data Found"}
                </tbody>
            </table>

            {close ? <AuthorEdit setClose={setClose} editData={editData} /> : ""}
        </div>
    </div>
}