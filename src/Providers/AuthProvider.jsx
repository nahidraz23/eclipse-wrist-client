import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../config/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [watches, setWatches] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:5300/watches');
                const data = await res.json();
                setWatches(data);
            }
            catch (err) {
                console.error(err)
            }
            finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [])

    const authInfo = {
        loading,
        setLoading,
        watches
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;