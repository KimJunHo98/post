import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dbService, dbCollection, authService } from "../myBase";
import { query, orderBy, where, onSnapshot } from "firebase/firestore";

// fontawesome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Profile = ({useObj}) => {
    const navigate = useNavigate("");

    const onLogOutClick = () => {
        authService.signOut().then(() => navigate("/")); // 로그아웃시 홈화면으로 이동
    }

    useEffect(() => {
        const q = query(
            dbCollection(dbService, "upload"),
            where("createdId", "==", `${useObj.uid}`),
            orderBy("createdAt", "desc")
        );

        onSnapshot(q, (snapshot) => {
            snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
        });
    }, [useObj.uid]);

    return (
        <>
            <section id="profile">
                <div className="container">
                    <div className="inner">
                        <div className="profile">
                            <div className="profile_thumb">
                                <FontAwesomeIcon icon={faCircleUser} />
                            </div>
                            <p className="user_name">{useObj.displayName}님</p>
                            <button className="logout_btn" onClick={onLogOutClick}>로그아웃</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;