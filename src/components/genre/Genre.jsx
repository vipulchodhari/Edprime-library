import '../../styles/genre.css';
import edit from '../../assets/edit.png';
import remove from '../../assets/remove.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GenreEdit } from './GenreEdit';
import SearchIcon from '@mui/icons-material/Search';
// import { Request_Add_Data, Request_Delete } from '../../redux/action/genAction';
import { Request_Delete_Genre, Request_Genre_Data , Request_Add_Genre} from '../../redux/action/genreAction';

export const Genre = () => {

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

    let { genreData } = useSelector((state) => ({
        genreData: state.genreState.data
    }))
    console.log("saga data in component", genreData);

    genreData = genreData.filter((gen) =>
        gen.title.toLowerCase().includes(query) ||
        gen.created_by.toLowerCase().includes(query) ||
        gen.modified_by.toLowerCase().includes(query)
       
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
        dispatch(Request_Delete_Genre(id))
    }

    const handleEdit = (item) => {
        setEditData(item)
        setClose(true);
        console.log("edit item", item);
    }

    const handleSubmit = () => {
        dispatch(Request_Add_Genre(text.category_image, text.title, text.created_by, text.modified_by, text.status))
    }

    const filterData = (e) => {
        e.preventDefault();
        // let query = e.target.vaule;

        setQuery(e.target.value);
    
    };

    useEffect(() => {
        dispatch(Request_Genre_Data());
    }, [])

    return <div className='user-container'>
        <h1><u>Genre List</u></h1>
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
                    placeholder='Enter Genre image...'
                />&nbsp;&nbsp;&nbsp;
                <input
                    onChange={handleChange}
                    name="title"
                    type='text'
                    value={text.title}
                    placeholder='Enter Genre name...'
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

                    {genreData?genreData.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item?.genre_image ?? ''}</td>
                            <td>{item?.title ?? ''}</td>
                            <td>{item?.created_by ?? ''}</td>
                            <td>{item?.modified_by ?? ''}</td>
                            <td className={item.status ? "status-green" : "status-red"}>{item.status ? "Active" : "In Active"}</td>
                            <td>
                                <img
                                    alt=''
                                    src={remove}
                                    onClick={(e) => handleDelete(item.id)}
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
            {close ? <GenreEdit setClose={setClose} editData={editData} /> : ""}
        </div>
    </div>
}


