import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dbService, dbCollection, authService } from "../myBase";
import { query, orderBy, where, onSnapshot } from "firebase/firestore";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ useObj }) => {
    const [randomName, setRandomName] = useState("");
    const navigate = useNavigate();

    const onLogOutClick = () => {
        authService.signOut().then(() => navigate("/signup"));
    };

    useEffect(() => {
        const q = query(dbCollection(dbService, "upload"), where("createdId", "==", `${useObj.uid}`), orderBy("createdAt", "desc"));

        onSnapshot(q, (snapshot) => {
            snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
        });
    }, [useObj.uid]);

    const generateRandomName = () => {
        const randomString = `asci${Math.random().toString(36).substring(7)}`;
        setRandomName(randomString);
    };

    useEffect(() => {
        generateRandomName();
    }, []);

    return (
        <section id="profile">
            <div className="container">
                <div className="inner">
                    <div className="profile">
                        <div className="profile_thumb">
                            <FontAwesomeIcon icon={faCircleUser} />
                        </div>
                        {useObj.displayName ? (
                            <p className="user_name">{useObj.displayName}님</p>
                        ) : (
                            <p className="user_name">{randomName}님</p>
                        )}
                        <button className="logout_btn" onClick={onLogOutClick}>
                            로그아웃
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
