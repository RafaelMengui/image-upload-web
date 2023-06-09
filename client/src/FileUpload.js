import React, {useState} from "react";
import axios from "axios";
import "./FileUpload.css"

function FileUpload() {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
            const res = await axios.post("http://localhost:3000/upload", formData);
            console.log(res);
        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <div className="App" >
            <input type="file" className="form-control-file" onChange={saveFile} />
            <button className="btn btn-success" onClick={uploadFile}>Upload</button>
        </div>
    );
}

export default FileUpload;

