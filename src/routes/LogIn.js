import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const LogIn = () => {
    const { email, password, error, handleLogin, onChange, onSubmit } = useAuth();

    return (
        <section id="login">
            <div className="container">
                <div className="inner">
                    <h2 className="ir_so">회원가입 및 로그인</h2>
                    <div className="login">
                        <h3 className="twit">Twit</h3>
                        <div class="login_form">
                            <form onSubmit={onSubmit}>
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
                                    <button className="login_btn" type="submit" onClick={handleLogin}>
                                        <span className="login">로그인</span>
                                    </button>
                                    <Link to={"/signup"} className="signup_btn">
                                        계정이 없으신가요? <span className="move_signup">회원가입 하기</span>
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

export default LogIn;
