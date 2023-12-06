import React from "react";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="inner">
                    <h2 className="ir_so">푸터</h2>
                    <div className="footer">
                        <p className="ft_copy">&copy; {new Date().getFullYear()} Twit</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
