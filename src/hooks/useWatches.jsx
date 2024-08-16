import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useWatches = () => {
    const axiosPublic = useAxiosPublic();

    const {data: watches = []} = useQuery({
        queryKey: ['watches'],
        queryFn: async () => {
            const res = await axiosPublic.get('/watches')
            console.log(res.data)
            return res.data;
        }
    })

    return [watches];
};

export default useWatches;