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

export const AddMember = () => {
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
        <h1><u>Add Memeber</u></h1>
        <div className='member-form-cont'>
            <form className='user-form' onSubmit={(e) => {
                e.preventDefault();
                setText({
                    name: "",
                    member_type: "",
                    sso_id: "",
                    created_by: "",
                    modified_by: "",
                    status: ""
                })
            }}>
                <input
                    onChange={handleChange}
                    name="name"
                    type='text'
                    value={text.name}
                    placeholder='Enter member name...'
                />&nbsp;&nbsp;&nbsp;
                <input
                    onChange={handleChange}
                    name="member_type"
                    type='text'
                    value={text.member_type}
                    placeholder='Enter member type...'
                />
                <input
                    onChange={handleChange}
                    name="sso_id"
                    type='text'
                    value={text.sso_id}
                    placeholder='Enter member sso-id...'
                />&nbsp;&nbsp;&nbsp;
                <input
                    onChange={handleChange}
                    name="created_by"
                    type='text'
                    value={text.created_by}
                    placeholder='Created By...'
                />
                <input
                    onChange={handleChange}
                    name="modified_by"
                    type='text'
                    value={text.modified_by}
                    placeholder='Modified By...'
                />&nbsp;&nbsp;&nbsp;
                <select className="category-status" name="status" onChange={handleChange}>
                    <option className="addbook-select-hidden">Select</option>
                    <option value={true}>Active</option>
                    <option value={false}>In Active</option>
                </select><br />

                <input onClick={handleSubmit} id='submit-btn' type='submit' />
            </form>

        </div>

      
    </div>
}