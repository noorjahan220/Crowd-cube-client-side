import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState, useMemo } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create a new user
    const createUser = async (email, password, name, photoURL) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: name,
                photoURL: photoURL,
            });
            setUser({ ...userCredential.user, displayName: name, photoURL: photoURL });
            setLoading(false);
            return userCredential;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    // Sign in an existing user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign out the current user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth).finally(() => setLoading(false));
    };

    // Sign in with Google
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Handle authentication state changes
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, []);

    // Memoized user info
    const userInfo = useMemo(() => ({
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
    }), [user, loading]);

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
