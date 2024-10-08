import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navabar = () => {

    const {user, signOutUser} = useContext(AuthContext);

    // console.log(user)

    const handleSignOut = () => {
        signOutUser()
    }

    const navLinks = (
        <div className='flex gap-8 text-lg font-semibold'>
            <NavLink>Home</NavLink>
            <NavLink>Men's Collection</NavLink>
            <NavLink>Women's Collection</NavLink>
            <NavLink>About us</NavLink>
        </div>
    )

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="text-2xl font-bold">EclipseWrist</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                    <button onClick={handleSignOut} className="btn font-semibold btn-accent text-white text-lg">Sign Out</button>
                    :
                    <Link to={'/login'} className="btn font-semibold btn-accent text-white text-lg">Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Navabar;