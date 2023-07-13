import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

const RouterApp = ({isLogIn, useObj}) => {
    return (
        <>
            {isLogIn && <Header useObj={useObj} />}
            <Routes>
                {isLogIn ? (
                    <>
                        <Route path="/" element={<Home useObj={useObj} />}></Route>
                        <Route path="/Profile" element={<Profile useObj={useObj} />}></Route>
                    </> 
                    ) : ( 
                    <Route path="/" element={<Auth />}></Route> 
                )}
            </Routes>
        </>
    );
}

export default RouterApp;