import '../../styles/category.css';
import edit from '../../assets/edit.png';
import remove from '../../assets/remove.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryEdit } from './CategoryEdit';
import { Request_Add_Data, Request_Delete, Request_Fetchdata } from '../../redux/action/categoryAction';

export const Category = () => {
    const [editData, setEditData] = useState();
    const [close, setClose] = useState(false);
    // let [status, setStatus] = useState();
    const [text, setText] = useState({
        title: "", 
        status: ""
    });

    const { catgData } = useSelector((state)=> ({
        catgData: state.categoryState.data
    }))
    console.log("saga data in component", catgData);

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
        dispatch(Request_Add_Data(text.title, text.status))
    }

    const filterData = (e) => {
         e.preventDefault();
         let query = e.target.vaule;

         
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
                    name:"",
                    status:""
                })
            }}>
                <input
                    onChange={handleChange}
                    name="title"
                    type='text'
                    value={text.name}
                    placeholder='Enter category name...'
                /><br />
                <select className="category-status" name="status" onChange={handleChange}>
                    <option className="addbook-select-hidden">Select</option>
                    <option value={true}>Active</option>
                    <option value={false}>In Active</option>
                </select><br />

                <input onClick={handleSubmit} id='submit-btn' type='submit' />
            </form>

            <form className='user-form'>
                <input onChange={filterData} type='text' placeholder='Search by name...'/>
            </form>
        </div>

        <div className='category-list-cont'>
            <table className='category-list-table'>
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Remove</th>
                        <th>Edit</th>
                    </tr>
              
                    {catgData.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.title}</td>
                            <td className={item.status?"status-green":"status red"}>{item.status? "Active" : "In Active"}</td>
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
                    )
                    )}
                </tbody>
            </table>

            {close ? <CategoryEdit setClose={setClose} editData={editData}/> : ""}
        </div>
    </div>
}