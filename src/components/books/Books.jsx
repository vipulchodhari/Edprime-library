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
    const [bookList, setBookList] = useState([]);
    console.log("booklist", bookList);
    const handleDelete = (id) => {
        // axios.delete(`http://192.100.100.52:5000/books/${id}`)
        //   .then((res) => console.log(res))
        //   .then((res) => setBookList(res))
    }

    const getBooksData = async () => {
        await axios.get(booksUrl)
            .then((res) => setBookList(res.data))
    }

    useEffect(() => {
        getBooksData()
    }, [])
    return <div className="Books-container">
        <h1>Book List</h1>
        <div className="author-cont">
            <Link to='/add-books' >
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
                        <th>Created By</th>
                        <th>Publisher</th>
                        <th>Remove</th>
                        <th>Edit</th>
                    </tr>
                    {bookList.map((item, i) => {
                        return <tr key={i}>
                            <td>{i + 1}</td>
                            <td className='author-list-imgTag'>
                                <Link to='/book-details' className='link-decoration'>
                                    <img
                                        className='author-list-img'
                                        src={`http://192.100.100.52:2500/${item.book_Images}`}
                                        alt=''
                                    />
                                </Link>
                            </td>
                            <td>
                                <Link to='/book-details' className='link-decoration'>
                                    {item.book_title}
                                </Link>
                            </td>
                            <td>{item.created_by}</td>
                            <td>{item.publisher.title}</td>
                            <td>
                                <img
                                    alt='Delete'
                                    src={remove}
                                    onClick={(e) => handleDelete(item.id)}
                                    className='category-list-icon'
                                />
                            </td>
                            <td>
                                <Link to={`/edit-book/${item.id}`}><img
                                    alt='Edit'
                                    className='category-list-icon'
                                    // onClick={(e) => handleEdit(item)}
                                    src={edit}
                                /></Link>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>

            {/* {close ? <BookEdit setClose={setClose} editBookData={editBookData} /> : ""} */}
        </div>
    </div>
}