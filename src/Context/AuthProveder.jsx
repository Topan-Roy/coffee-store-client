import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const AuthProveder = ({children}) => {
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const userInfo={
       createUser,
       signinUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProveder;