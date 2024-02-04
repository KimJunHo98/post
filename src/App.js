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
    const [init, setInit] = useState(false);
    const [useObj, setUseObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUseObj(user);
            } else {
                setUseObj(null);
            }
            
            setInit(true);
        });
    }, []);

    return <div id="wrap">{init ? <RouterApp isLogIn={Boolean(useObj)} useObj={useObj} /> : <p>잠시만 기다려주세요...</p>}</div>;
};

export default App;
