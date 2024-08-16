import React from 'react';

const ProductCard = ({ image, title, price, category, description, date_time }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Watch image"
                    className='h-72'
                />
            </figure>
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <div className="badge badge-secondary font-semibold p-3">${price}</div>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    {/* <div className="badge badge-outline">Products</div> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;