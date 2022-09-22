import '../../styles/category.css';
import edit from '../../assets/edit.png';
import remove from '../../assets/remove.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemberEdit } from './MemberEdit';
import SearchIcon from '@mui/icons-material/Search';
import { Request_Add_Member, Request_Delete_Member, Request_Member_Data } from '../../redux/action/memberAction';
import '../../styles/member.css';

export const ActiveMember= () => {
    const [editData, setEditData] = useState();
    const [close, setClose] = useState(false);
    const [query, setQuery] = useState("");
    const [text, setText] = useState({
        name: "",
        member_type: "",
        sso_id: "",
        created_by: "",
        modified_by: "",
        status: ""
    });

    let { memberData } = useSelector((state) => ({
        memberData: state.memberState.data
    }))
    console.log("saga data in component", memberData);

    memberData = memberData.filter((catg) =>
        catg.name.toLowerCase().includes(query) ||
        catg.member_type.toLowerCase().includes(query) ||
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
        dispatch(Request_Delete_Member(id))
    }

    const handleEdit = (item) => {
        setEditData(item)
        setClose(true);
        console.log("edit item", item);
    }

    const handleSubmit = () => {
        dispatch(Request_Add_Member(text.name, text.member_type, text.sso_id, text.created_by, text.modified_by, text.status))
    }

    const filterData = (e) => {
        e.preventDefault();
        // let query = e.target.vaule;

        setQuery(e.target.value);

    };

    useEffect(() => {
        dispatch(Request_Member_Data());
    }, [])



    return <div className='user-container'>
        <h1><u>Active Member</u></h1>
        
       <div>
            <form className='user-form author-search'>
                <SearchIcon className='author-searchIcon' />
                <input onChange={filterData} type='text' placeholder='    Search by name, type, created-by, modified-by...' />&nbsp;&nbsp;
            </form>
        </div>

        <div className='member-list-cont'>
            <table className='category-list-table member-list-table'>
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>MAID</th>
                        <th>Member Name</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Borrowings</th>
                        <th>Due Books</th>
                        <th>Overdue Books</th>
                        <th>Edit</th>
                    </tr>

                    {memberData ? memberData.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item?.name ?? ''}</td>
                            <td>{item?.member_type ?? ''}</td>
                            <td>{item?.sso_id ?? ''}</td>
                            <td>{item?.created_by ?? ''}</td>
                            <td>{item?.modified_by ?? ''}</td>
                            <td className={item.status ? "status-green" : "status-red"}>{item.status ? "Active" : "In Active"}</td>
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

            {close ? <MemberEdit setClose={setClose} editData={editData} /> : ""}
        </div>
    </div>
}