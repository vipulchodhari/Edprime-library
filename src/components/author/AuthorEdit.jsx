import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Request_Edit_author } from "../../redux/action/authorAction";
import { imgInputFilePicker } from "../../utils/common";
import customerBorder from '../../assets/upload.jpg';

export const AuthorEdit = ({ setClose, editData, }) => {
    const [Ename, setEName] = useState(editData.title);
    const [Eemage, setEemage] = useState(editData.author_image);
    const [EcreateBy, setEcreateBy] = useState(editData.created_by);
    const dispatch = useDispatch()

    // console.log("receive edit", editData);

    const handleUpload = async () => {
        try {
            const authorImg = await imgInputFilePicker();
           setEemage(authorImg.base64)
        } catch(err){
            console.log("error", err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(Request_Edit_Data(Ename, EStatus, editData._id))
        dispatch(Request_Edit_author(Ename, Eemage, EcreateBy, editData.id))
        setClose(false)
    }
    return <div className='categoryedit-cont'>
        <p className="authoredit-close-btn" onClick={() => {setClose(false)}}>x</p>
        <form onSubmit={handleSubmit} className='categoryedit-form'>
            <img
                style={{ width: "90px", height: "90px", borderRadius: "50%", cursor: 'pointer' }}
                onClick={handleUpload}
                src={
                    Eemage.length
                        ? `data:image/jpeg;base64,${Eemage}`
                        : customerBorder
                }
                alt=""
                title=""
            /><br />
            <input
                value={Ename}
                className='categoryedit-input'
                onChange={(e) => setEName(e.target.value)}
            />
            <input
                value={EcreateBy}
                className='categoryedit-input'
                onChange={(e) => setEcreateBy(e.target.value)}
            />

            {/* <button className='submit' onClick={(e) => handleSubmit(data._id)}> OK</button> */}
            <input className='submit' type='submit' />
        </form>
    </div>
}