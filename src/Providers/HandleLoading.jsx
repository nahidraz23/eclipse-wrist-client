import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const HandleLoading = ({ children }) => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return children;
};

export default HandleLoading;