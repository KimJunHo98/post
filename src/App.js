import React, { useEffect, useState } from "react";
import RouterApp from "./components/RouterApp";
import { authService } from "./myBase";
import { getCLS, getFID, getLCP } from 'web-vitals';

import "./css/style.css";

function sendToAnalytics({ name, delta, id }) {
    console.log({ name, delta, id });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);

const App = () => {
    const [init, setInit] = useState(false); // firebase db 초기화
    const [useObj, setUseObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUseObj(user);
            } else {
                setUseObj(null);
            }
            setInit(true);
        }); // 유저의 상태 변화를 감지(로그아웃, 로그인, 계정생성, firebase 초기화)
    }, []);

    return <div id="wrap">{init ? <RouterApp isLogIn={Boolean(useObj)} useObj={useObj} /> : "잠시만 기다려주세요..."}</div>;
};

export default App;
