import React from "react";
import useAuth from "../hooks/useAuth"; // custom hook

const Auth = () => {
    const { email, password, error, handleSignup, handleLogin, onChange } = useAuth();

    return (
        <>
            <section id="auth">
                <div className="container">
                    <div className="inner">
                        <h2 className="ir_so">회원가입 및 로그인</h2>
                        <div className="auth">
                            <h1 className="post">Post</h1>
                            <div className="auth_form">
                                <form onSubmit={(e) =>  e.preventDefault()}>
                                    <input className="login_input" autoFocus type="email" name="email" placeholder="Email" required value={email} onChange={onChange} />
                                    <input className="login_input" type="password" name="password" placeholder="Password" required value={password} onChange={onChange} />
                                    <span className="error">{error}</span>
                                    <div className="auth_btns">
                                        <button className="signup_btn" type="button" onClick={handleSignup}>
                                            <span className="signup">회원 가입</span>
                                        </button>
                                        <button className="login_btn" type="button" onClick={handleLogin}>
                                            <span className="login">로그인</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Auth;
