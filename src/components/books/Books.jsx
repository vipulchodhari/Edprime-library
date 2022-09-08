import edit from '../../assets/edit.png';
import remove from '../../assets/remove.png';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/books.css";
import axios from 'axios';
import { BookEdit } from './BookEdit';
import { booksUrl } from '../../utils/common';
import { useDispatch } from 'react-redux';
import { Request_BookEdit_Data } from '../../redux/action/bookAddAction';

export const Books = () => {
    const [editData, setEditData] = useState();
    const [close, setClose] = useState(false);
    const [booksList, setBookList] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (id) => {
        axios.delete(`http://192.100.100.52:5000/books/${id}`)
          .then((res) => console.log(res))
        getBooksData().then((res) => setBookList(res))
    }

    const handleEdit = (item) => {
        setEditData(item)
        setClose(true);
        
        navigate('/edit-book')
        console.log("edit", item);

        // dispatch(Request_BookEdit_Data(item))

    }

    const getBooksData = async() => {
        await axios.get(booksUrl)
        .then((res) => setBookList(res.data))
    }

    useEffect(() => {
        getBooksData()
    }, [])
    return <div className="Books-container">
        <h1>Book List</h1>
        <div className="author-cont">
            <Link to='/add-books'>
                <button className="add-books-btn">Add Book</button>
            </Link>
        </div>
        <div className="category-list-cont">
            <table className="category-list-table books-list-table">
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>Book Image</th>
                        <th>Book name</th>
                        <th>Add by</th>
                        <th>Remove</th>
                        <th>Edit</th>
                    </tr>
                    {booksList.map((item, i) => {
                        return <tr key={i}>
                            <td>{i+1}</td>
                        <td className='author-list-imgTag'>
                            <img 
                                className='author-list-img' 
                                src={`data:image/jpeg;base64,${item.book_Images}`} 
                                alt=''
                            />
                        </td>
                        <td>{item.book_title}</td>
                        <td>{item.created_by}</td>
                        <td>
                            <img
                                alt='Delete'
                                src={remove}
                                onClick={(e) => handleDelete(item.id)}
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
                    })}
                    
                </tbody>
            </table>

            {close ? <BookEdit setClose={setClose} editData={editData} /> : ""}
            {/* <BookEdit editData={editData} /> */}
        </div>
    </div>
}