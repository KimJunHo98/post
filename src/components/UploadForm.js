import React, { useState } from "react";
import { dbService, dbAddDoc, dbCollection, storageService } from "../myBase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const UploadForm = ({useObj}) => {
    const [upload, setUpload] = useState("");
    const [fileUrl, setFileUrl] = useState("");

    const onChange = (e) => {
        setUpload(e.target.value);
    }
    
    const onFileChange = (e) => {
        const {target: 
            {
                files
            },
        } = e;

        const theFile = files[0];
        const reader = new FileReader();

        reader.readAsDataURL(theFile);
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: 
                {
                    result
                },
            } = finishedEvent;

            setFileUrl(result);
        }
    }

    const onClearImage = () => {
        setFileUrl(null);
    }

    const onSubmit = async (e) => {
        let uploadedFileUrl = "";

        e.preventDefault();

        if(fileUrl !== ""){
            const fileRef = ref(storageService, `${useObj.uid}/${uuidv4()}`);
    
            await uploadString(fileRef, fileUrl, "data_url");
            await getDownloadURL(fileRef)
            .then(url => {
                uploadedFileUrl = url;
            })
            .catch(err => {
                console.log(err);
            });
        };
        
        const uploadObj = {
            text: upload,
            createdAt: Date.now(),
            createdId: useObj.uid,
            uploadedFileUrl,
        };
        
        await dbAddDoc(dbCollection(dbService, "upload"), uploadObj);
        
        setUpload(""); // 업로드가 되면 input 초기화
        setFileUrl("");

        console.log(uploadedFileUrl);
    }; // 사진 업로드 함수

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="upload_input">
                    <input className="texting_input" type="text" maxLength={120} placeholder="게시물을 작성해보세요" value={upload} onChange={onChange} />
                    <input className="upload_btn" type="submit" value="→" />
                </div>
                <div className="add_files">
                    <label htmlFor="add_photo"><span>Add photos</span><FontAwesomeIcon icon={faPlus} /></label>
                    <input id="add_photo" type="file" accept="image/*" onChange={onFileChange} />
                </div>
                {fileUrl && (
                    <div className="upload_img_box">
                        <img className="upload_img" src={fileUrl} alt=""  />
                        <button className="delete_img_btn" onClick={onClearImage}>
                            삭제<FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                )}
            </form>
        </>
    );
}
export default UploadForm;