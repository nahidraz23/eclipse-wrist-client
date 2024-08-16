import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useWatches from '../hooks/useWatches';

const Products = () => {

    // const { watches, setLoading } = useContext(AuthContext);
    // const axiosPublic = useAxiosPublic();
    const [watcheCount, setWatchCount] = useState(null);

    const [watches] = useWatches();
    // console.log(watches)

    // axiosPublic.get('/watchesCount')
    //     .then(res => setWatchCount(res.data.count))
    //     .catch((err) => console.error(err))
    //     .finally(() => {
    //         setLoading(false)
    //     })

    // const itemsPerPage = 10;
    // const totalPages = Math.ceil(watcheCount / itemsPerPage);
    // console.log(totalPages)

    return (
        <div className='min-h-screen'>
            <div className='grid grid-cols-3 gap-8'>
                {
                    watches.map((item, index) => <ProductCard
                        key={index}
                        title={item.name}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        category={item.category}
                        rating={item.rating}
                        date_time={item.date_time}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;