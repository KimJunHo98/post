import React, { useEffect, useState } from "react";
import { dbService, dbCollection } from "../myBase";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import Upload from "../components/Upload";
import UploadForm from "../components/UploadForm";

const Home = ({ useObj }) => {
    const [uploads, setUploads] = useState("");

    useEffect(() => {
        const q = query(dbCollection(dbService, "upload"), orderBy("createdAt", "desc"));

        onSnapshot(q, (snapshot) => {
            const uploadArr = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            setUploads(uploadArr);
        }); // db에 저장된 정보 가져와서 실시간으로 화면에 뿌려주기
    }, []);

    return (
        <main id="main">
            <section id="upload">
                <div className="container">
                    <div className="inner">
                        <h2 className="ir_so">게시물 업로드</h2>
                        <div className="upload">
                            <div className="upload_form">
                                <UploadForm useObj={useObj} />
                            </div>
                            <div className="upload_post">
                                {uploads.map((upload) => (
                                    <Upload key={upload.id} uploadObj={upload} isUser={upload.createdId === useObj.uid} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
