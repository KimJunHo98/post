import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = getAuth();
    const navigate = useNavigate("");

    const handleSignup = async () => {
        if (userName === "" || email === "" || password === "") return;

        try {
            const credentials = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(credentials.user, {
                displayName: userName,
            });
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleLogin = async () => {
        if (email === "" || password === "") return;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            setUserName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return { email, password, error, handleSignup, handleLogin, onChange, onSubmit };
};

export default useAuth;
