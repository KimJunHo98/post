import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { email, password, userName, error, handleSignup, onChange, onSubmit } = useAuth();

    return (
        <section id="signup">
            <div className="container">
                <div className="inner">
                    <h2 className="ir_so">회원가입 및 로그인</h2>
                    <div className="signup">
                        <h3 className="twit">Twit</h3>
                        <div className="signup_form">
                            <form onSubmit={onSubmit}>
                                <input
                                    className="login_input"
                                    autoFocus
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    value={userName}
                                    onChange={onChange}
                                />
                                <input
                                    className="login_input"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={onChange}
                                />
                                <input
                                    className="login_input"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={onChange}
                                />
                                <span className="error">{error}</span>
                                <div className="auth_btns">
                                    <button className="signup_btn" type="submit" onClick={handleSignup}>
                                        <span className="signup">회원 가입</span>
                                    </button>
                                    <Link to={"/login"} className="login_btn">
                                        이미 계정이 있으신가요? <span className="move_login">로그인 하기</span>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
