import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Authentication/Auth";
import firebase from './firebase';

const Home = () => {
    const {currentUser} = useContext(AuthContext);
    return(
        <>
            <h1>Home</h1>
            {currentUser ? (
                <div>
                    <p>You are logged in</p>
                    <button onClick={() => firebase.auth().signOut()}>Sign out</button>
                </div>
            ) : (
                <Navigate to="/login"/>
            )}
        </>
    )
}

export default Home;