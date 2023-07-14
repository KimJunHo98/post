import React, { useState } from "react";
import { dbService, storageService} from "../myBase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
dayjs.extend(relativeTime);

const Upload = ({uploadObj, isUser}) => {
    const [editing, setEditing] = useState(false);
    const [newUpload, setNewUpload] = useState(uploadObj.text);
    const [isOn, setIsOn ] = useState(false);

    const onDeleteClick = async () => {
        const ok = window.confirm("정말로 이 게시물을 삭제하시겠어요?");
        const uploadRef = doc(dbService, "upload", `${uploadObj.id}`);
        const uploadedFileUrlRef = ref(storageService, uploadObj.uploadedFileUrl);

        if(ok){
            if(uploadObj.uploadedFileUrl !== ""){
                // uploadedFileUrl이 있을 때
                try{
                    await deleteDoc(uploadRef);
                    await deleteObject(uploadedFileUrlRef);
                }
                catch(error){
                    window.alert("게시물을 삭제하는데 실패했습니다.");
                }
            }else{
                // uploadedFileUrl이 없을 때
                try{
                    await deleteDoc(uploadRef);
                }
                catch(error){
                    window.alert("게시물을 삭제하는데 실패했습니다.");
                }
            };
        };
    }

    const toggleEditing = () => {
        setEditing(prev => !prev);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        await updateDoc(doc(dbService, "upload", `${uploadObj.id}`), {
            text: newUpload
        });

        setEditing(false);
    }

    const onChage = (e) => {
        setNewUpload(e.target.value);
    }

    const onTogglebtnClick = () => {
        setIsOn(prev => !prev);
    }

    return (
        <> 
            {editing ? (
                <>
                    {isUser && (
                        <>
                            <div className="user_posts">
                                <div className="edit_post_box">
                                    <form onSubmit={onSubmit}>
                                        {uploadObj.uploadedFileUrl && (
                                            <>
                                                <div className="post_img_box">
                                                    <img className="user_post_img" src={uploadObj.uploadedFileUrl} alt="" />
                                                </div>
                                                <span className="line"></span>
                                            </>
                                        )}
                                        <div className="edit_inputbox">
                                            <input className="edit_post_input" type="text" placeholder="게시물을 수정하세요" required value={newUpload} onChange={onChage} wrap="hard"/>
                                            <label htmlFor="edit_btn"><FontAwesomeIcon icon={faPen} /></label>
                                            <input id="edit_btn" className="edit_btn" type="submit" value="수정" />
                                        </div>
                                    </form>
                                    <button className="cancle_btn" onClick={toggleEditing}><FontAwesomeIcon icon={faXmark} /></button>
                                </div>
                            </div>
                        </>
                    )}
                </>
                ) : (
                <div className="user_posts">
                    <span className="line top"></span>
                    <div className="user_post_box">
                        {uploadObj.uploadedFileUrl && (
                            <>
                                <div className="post_img_box">
                                    <img className="user_post_img" src={uploadObj.uploadedFileUrl} alt="" />
                                </div>
                                <span className="line"></span>
                            </>
                        )}
                        <p className="user_post_text">{uploadObj.text}</p>
                        <span className="uplaod_date">{dayjs(uploadObj.createdAt).format("YY/MM/DD")}</span>
                    </div>
                    {isUser && (
                        <>
                            <div className="dots_box" value={isOn} onClick={onTogglebtnClick}>
                                <span className="dots"></span>
                            </div>
                            <div className="post_togglebtn_box">
                                <ul className={isOn ? "show_btn" : "hide_btn"}>
                                    <li className="toggle_btns">
                                        <button className="toggle_btn" onClick={onDeleteClick}>삭제</button>
                                        <button className="toggle_btn" onClick={toggleEditing}>수정</button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
export default Upload;