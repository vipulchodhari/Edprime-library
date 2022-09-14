import '../../styles/category.css';
import edit from '../../assets/edit.png';
import remove from '../../assets/remove.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryEdit } from './CategoryEdit';
import SearchIcon from '@mui/icons-material/Search';
import { Request_Add_Data, Request_Delete, Request_Fetchdata } from '../../redux/action/categoryAction';

export const Category = () => {
    const [editData, setEditData] = useState();
    const [close, setClose] = useState(false);
    const [query, setQuery] = useState("");
    const [text, setText] = useState({
        category_image: "",
        title: "",
        created_by: "",
        modified_by: "",
        status: ""
    });

    let { catgData } = useSelector((state) => ({
        catgData: state.categoryState.data
    }))
    console.log("saga data in component", catgData);

    catgData = catgData.filter((catg) =>
        catg.title.toLowerCase().includes(query) ||
        catg.created_by.toLowerCase().includes(query) ||
        catg.modified_by.toLowerCase().includes(query)
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

    const handleDelete = (id) => {
        dispatch(Request_Delete(id))
    }

    const handleEdit = (item) => {
        setEditData(item)
        setClose(true);
        console.log("edit item", item);
    }

    const handleSubmit = () => {
        dispatch(Request_Add_Data(text.category_image, text.title, text.created_by, text.modified_by, text.status))
    }

    const filterData = (e) => {
        e.preventDefault();
        // let query = e.target.vaule;

        setQuery(e.target.value);

    };

    useEffect(() => {
        dispatch(Request_Fetchdata());
    }, [])



    return <div className='user-container'>
        <h1><u>Category List</u></h1>
        <div className='user-form-cont'>
            <form className='user-form' onSubmit={(e) => {
                e.preventDefault();
                setText({
                    category_image: "",
                    title: "",
                    created_by: "",
                    modified_by: "",
                    status: ""
                })
            }}>
                <input
                    onChange={handleChange}
                    name="category_image"
                    type='text'
                    value={text.category_image}
                    placeholder='Enter category image...'
                />&nbsp;&nbsp;&nbsp;
                <input
                    onChange={handleChange}
                    name="title"
                    type='text'
                    value={text.title}
                    placeholder='Enter category name...'
                />&nbsp;&nbsp;&nbsp;
                <input
                    onChange={handleChange}
                    name="created_by"
                    type='text'
                    value={text.created_by}
                    placeholder='Created By...'
                />&nbsp;&nbsp;&nbsp;
                <input
                    onChange={handleChange}
                    name="modified_by"
                    type='text'
                    value={text.modified_by}
                    placeholder='Modified By...'
                /><br />
                <select className="category-status" name="status" onChange={handleChange}>
                    <option className="addbook-select-hidden">Select</option>
                    <option value={true}>Active</option>
                    <option value={false}>In Active</option>
                </select><br />

                <input onClick={handleSubmit} id='submit-btn' type='submit' />
            </form>

            <form className='user-form author-search'>
                <SearchIcon className='author-searchIcon' />
                <input onChange={filterData} type='text' placeholder='Search by name, created-by, modified-by...' />&nbsp;&nbsp;
            </form>
        </div>

        <div className='category-list-cont'>
            <table className='category-list-table'>
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Created-By</th>
                        <th>Modified-By</th>
                        <th>Status</th>
                        <th>Remove</th>
                        <th>Edit</th>
                    </tr>

                    {catgData?catgData.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item?.category_image ?? ''}</td>
                            <td>{item?.title ?? ''}</td>
                            <td>{item?.created_by ?? ''}</td>
                            <td>{item?.modified_by ?? ''}</td>
                            <td className={item.status ? "status-green" : "status red"}>{item.status ? "Active" : "In Active"}</td>
                            <td>
                                <img
                                    alt=''
                                    src={remove}
                                    onClick={(e) => handleDelete(item._id)}
                                    className='category-list-icon' />
                            </td>
                            <td>
                                <img
                                    alt=''
                                    className='category-list-icon'
                                    onClick={(e) => handleEdit(item)}
                                    src={edit} />
                            </td>
                        </tr>
                    )) : <h1>No Data Found</h1>}
                </tbody>
            </table>

            {close ? <CategoryEdit setClose={setClose} editData={editData} /> : ""}
        </div>
    </div>
}