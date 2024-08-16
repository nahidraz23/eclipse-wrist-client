import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useWatchCount = () => {
    const axiosPublic = useAxiosPublic();

    const {data: watchesCount = []} = useQuery({
        queryKey: 'watchesCount',
        queryFn: async () => {
            const res = await axiosPublic('/watchesCount');
            return res.data.count;
        }
    })
    return [watchesCount]
};

export default useWatchCount;