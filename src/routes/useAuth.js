import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const useAuth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = getAuth();

    const handleSignup = async () => {
        try {
            const data = await createUserWithEmailAndPassword(auth, email, password);
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleLogin = async () => {
        try {
            const data = await signInWithEmailAndPassword(auth, email, password);
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };


    return { email, password, error, handleSignup, handleLogin, onChange };
};

export default useAuth;
