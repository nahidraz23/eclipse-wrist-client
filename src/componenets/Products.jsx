import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { AuthContext } from '../Providers/AuthProvider';

const Products = () => {

    const { watches } = useContext(AuthContext);

    return (
        <div className='min-h-screen'>
            <div className='grid grid-cols-3 gap-8'>
                {
                    watches.map(item => <ProductCard
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