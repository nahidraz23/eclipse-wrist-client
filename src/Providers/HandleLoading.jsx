import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import useWatches from '../hooks/useWatches';

const HandleLoading = ({ children }) => {
    const { loading } = useContext(AuthContext);
    const [isLoading] = useWatches();

    // if (isLoading) {
    //     return <progress className="progress w-56"></progress>
    // }

    return children;
};

export default HandleLoading;