import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import SignUp from "../routes/SignUp";
import LogIn from "../routes/LogIn";

const RouterApp = ({ isLogIn, useObj }) => {
    return (
        <Router>
            {isLogIn && <Header useObj={useObj} />}
            <Routes>
                {isLogIn ? (
                    <>
                        <Route path="/" element={<Home useObj={useObj} />} />
                        <Route path="/profile" element={<Profile useObj={useObj} />} />
                    </>
                ) : (
                    <>
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<LogIn />} />
                    </>
                )}
            </Routes>
            <Footer />
        </Router>
    );
};

export default RouterApp;