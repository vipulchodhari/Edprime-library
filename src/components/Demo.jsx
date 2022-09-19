import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react"
import customerBorder from '../assets/upload.jpg';
import { imgInputFilePicker } from "../utils/common";

export const Demo = () => {
    const [author_image, setAuthor_image] = useState("");
    const [userpic, setUserpic] = useState("");
    const [demo, setDemo] = useState([]);
    console.log("demo data", demo);

    // const handleUpload = async (e) => {
    //     try {
    //         const authorImg = await imgInputFilePicker();
    //         setUserpic(authorImg.base64)
    //     } catch (err) {
    //         console.log("error", err);
    //     }
    // }

    const handleUpload = (e) => {
        let files = e.target.files;
        console.log("image", files[0])

        setAuthor_image(files[0])
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
            await axios.post('http://192.100.100.52:2500/authors', {
                file: res.data
            })
            alert("final submit work")
        } catch (err) {
            console.log("error", err)
        }
    }

    // async function finalSubmit(data){
    //     try {
    //         await axios.post('http://192.100.100.52:2500/authors', {
    //             file: data
    //         })
    //         alert("final submit work")
    //     } catch (err) {
    //         console.log("error", err)
    //     }
    // }

    useEffect(() => {
        axios.get(`http://192.100.100.52:2500/authors`)
            .then((res) => setDemo(res.data))
    }, [])

    return <div>
        <h1>Demo</h1>
        {/* <img
            style={{ width: "90px", height: "90px", borderRadius: "5px", cursor: 'pointer' }}
            onClick={handleUpload}
            src={
                userpic.length
                    ? `data:image/jpeg;base64,${userpic}`
                    : customerBorder
            }
            alt="Upload Pic"
            title=""
        /><br /> */}

        <form >
            <label htmlFor="file-input">
                <img style={{ cursor: 'pointer', width: '100px' }} src={customerBorder} alt="upload pic" />
                <p style={{ marginTop: '-20px', color: 'gray' }}><strong>{author_image.name}</strong></p>
            </label>
            <input
                style={{ display: 'none', cursor: 'pointer' }}
                id="file-input"
                type='file'
                onChange={handleUpload}
            /><br />

            <button onClick={handleSubmit}>Submit</button>&nbsp;
        </form>

        {demo.map((el, i) => {
            return <div key={i}>
                <h3>{i}</h3>
                <img src={`http://192.100.100.52:2500/${el.file}`} alt="imag" />
                <hr />
            </div>
        })}
    </div>
}