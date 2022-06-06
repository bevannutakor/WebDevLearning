import React, { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "./Authentication/Auth";
import firebaseConfig from "./firebase";

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = e.target;
        try{
            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        } catch(error){
            alert(error);
        }
    }
    const { currentUser } = useContext(AuthContext);
    if(currentUser){
        return <Navigate to="/" />
    }

    return(
        <>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Email" />
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
            <Link to="/register">Register</Link>
        </>
    )
}

export default Login;