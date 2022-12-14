import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react"
import customerBorder from '../assets/upload.jpg';
import { imgInputFilePicker } from "../utils/common";

export const Demo = () => {
    const [author_image, setAuthor_image] = useState("");
    const [image, setImage] = useState("");

    // const handleUpload = async () => {
    //     try {
    //         const authorImg = await imgInputFilePicker();
    //         setAuthor_image(authorImg.base64)
    //     } catch (err) {
    //         console.log("error", err);
    //     }
    // }

    const handleUpload = (e) => {
        let files = e.target.files;
        console.log("image", files[0])

        setAuthor_image(files[0])
        setImage(files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", author_image)
        try {
            const res = await axios({
                method: "post",
                url: 'http://192.100.100.52:2500/files',
                data: formData
            })
            console.log("response", res);
            setImage(res.data)
        } catch (err) {
            console.log("error", err)
        }
    }

    const finalSubmit = (e) => {
        e.preventDefault()
        try{
            axios.post('http://192.100.100.52:2500/authors', {
                file: image
            })
            alert("final submit work")
        }catch(err){
            console.log("error", err)
        }
    }

    return <div>
        <h1>Demo</h1>
            {/* <img
                        style={{ width: "90px", height: "90px", borderRadius: "5px", cursor: 'pointer' }}
                        onClick={handleUpload}
                        src={
                            author_image.length
                                ? `data:image/jpeg;base64,${author_image}`
                                : customerBorder
                        }
                        alt="Upload Pic"
                        title=""
            /><br /> */}
        <form >
            <label htmlFor="file-input">
               <img style={{cursor:'pointer', width:'100px'}} src={customerBorder} alt="upload pic"/>
               <p style={{marginTop:'-20px', color:'gray'}}><strong>{image.name}</strong></p>
            </label>
            <input
                style={{display:'none', cursor:'pointer'}}
                id="file-input"
                type='file'
                onChange={handleUpload}
            /><br/>
            {/* <input type='submit' /> */}
            <button onClick={handleSubmit}>Submit</button>&nbsp;
            <button onClick={finalSubmit}>Final Submit</button>
        </form>
    </div>
}