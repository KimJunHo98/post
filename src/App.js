import React, { useEffect, useState } from "react";
import RouterApp from "./components/RouterApp";
import { authService } from "./myBase";

// css
import "./css/style.css";

const App = () => {
    const [init, setInit] = useState(false); // firebase db 초기화
    const [useObj, setUserObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if(user){
                setUserObj(user);

                if (user.displayName === null) {
                    const name = user.email.split("@")[0];
                    user.displayName = name;
                }
            }else{
                setUserObj(null);
            }
            setInit(true);
        }); // 유저의 상태 변화를 감지(로그아웃, 로그인, 계정생성, firebase 초기화)
    }, []);

    return (
        <div id="wrap">
            {init ? <RouterApp isLogIn={Boolean(useObj)} useObj={useObj} /> : "잠시만 기다려주세요..."}
            <footer id="footer">
                <div className="container">
                    <div className="inner">
                        <h2 className="ir_so">푸터</h2>
                        <div className="footer">
                            <p className="ft_copy">&copy; {new Date().getFullYear()} Post</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
