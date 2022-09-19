import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Request_Edit_Member } from "../../redux/action/memberAction";

export const MemberEdit = ({ setClose, editData, }) => {
    const [Ename, setEName] = useState(editData.name);
    const [Emember_type, setEMember_type] = useState(editData.member_type);
    const [Ecreate_by, setECreated_by] = useState(editData.created_by);
    const [Emodified_by, setEModified_by] = useState(editData.modified_by);
    const [EStatus, setEStatus] = useState(editData.status);
    const dispatch = useDispatch()

    console.log("receive edit", editData);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(Request_Edit_Member(Ename,Emember_type, Ecreate_by, Emodified_by, EStatus, editData._id))
        setClose(false)
    }
    return <div className='categoryedit-cont'>
        <p className="authoredit-close-btn" onClick={() => {setClose(false)}}>x</p>
        <form onSubmit={handleSubmit} className='categoryedit-form'>
            <input
                value={Ename}
                className='categoryedit-input'
                onChange={(e) => setEName(e.target.value)}
            />&nbsp;&nbsp;
            <input
                value={Emember_type}
                className='categoryedit-input'
                onChange={(e) => setEMember_type(e.target.value)}
            /><br/>
            <input
                value={Ecreate_by}
                className='categoryedit-input'
                onChange={(e) => setECreated_by(e.target.value)}
            />&nbsp;&nbsp;
            <input
                value={Emodified_by}
                className='categoryedit-input'
                onChange={(e) => setEModified_by(e.target.value)}
            />
            <select className='categoryedit-input' name="Status" onChange={(e) => setEStatus(e.target.value)}>
                <option className="addbook-select-hidden">Select</option>
                <option value="Active">Active</option>
                <option value="In Active">In Active</option>
            </select><br />

            <input className='submit category-edit-submit' type='submit' />
        </form>
    </div>
}