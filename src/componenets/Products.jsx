import ProductCard from './ProductCard';
import useWatchCount from '../hooks/useWatchCount';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';


const Products = () => {
    const axiosPublic = useAxiosPublic();
    const [watchesCount] = useWatchCount();

    const [currentPage, setCurrentPage] = useState(0);
    const [watches, setWatches] = useState(null)
    const [searchText, setSearchText] = useState(null)
    const [loading, setLoading] = useState(true);
    const [asc, setAsc] = useState(true);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(watchesCount / itemsPerPage);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axiosPublic.get(`/searchWatches?search=${searchText}`)
                return setWatches(res.data)
            }
            catch (err) {
                console.error(err)
            }
            finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [loading, searchText])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axiosPublic.get(`/sortWatches?sort=${asc ? 'asc' : 'desc'}`)
                return setWatches(res.data)
            }
            catch (err) {
                console.error(err)
            }
            finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [asc])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axiosPublic.get(`/watches?page=${currentPage}&size=${itemsPerPage}`)
                return setWatches(res.data)
            }
            catch (err) {
                console.error(err)
            }
            finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [loading, currentPage, itemsPerPage])

    const pages = [];
    for (let i = 0; i < totalPages; i++) {
        pages.push(i);
    }

    const handleCustomClick = (page) => {
        setCurrentPage(page);
    }

    const handlePrevBtn = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextBtn = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearchText(searchText)
    }

    return (
        <div className='min-h-screen'>
            <div className='md:py-8 flex items-center justify-evenly'>
                <form onSubmit={handleSearch} className='space-x-2 flex items-center justify-center'>
                    <input name='search' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Search" className='btn btn-success text-white' />
                </form>
                <div>
                    <button onClick={() => setAsc(!asc)} className='btn btn-info text-white'>{asc ? 'Price: High to Low' : 'Price: Low to High'}</button>
                </div>
            </div>
            {
                loading ?
                    <progress className="progress w-56"></progress>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
            }
            <div className='flex justify-center gap-2 py-8'>
                <div>
                    <button onClick={handlePrevBtn} className='btn '>Prev</button>
                </div>
                {
                    pages.map((page, index) => <button
                        onClick={() => handleCustomClick(page)}
                        className={currentPage === page ? 'bg-secondary text-white btn space-x-2' : undefined}
                        key={index}>{page}</button>)
                }
                <div>
                    <button onClick={handleNextBtn} className='btn '>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Products;