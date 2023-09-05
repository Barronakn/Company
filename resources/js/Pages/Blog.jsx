import ArrowUp from '@/Components/ArrowUp';
import BlogList from '@/Components/BlogList';
import Comments from '@/Components/Comments';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { Link } from '@inertiajs/react';
import React from 'react';

const Blog = () => {
    return (
        <div className='blog'>
            <Nav />

            <section className='uppercase px-32 pt-28 pb-14 font-sans text-black bg-green-500 h-20'>
                <ul className='flex gap-1 items-center justify-center'>
                    <li>
                        <Link className='text-black hover:text-white text-xs font-bold' href='/'>Home</Link>
                    </li>
                    <span className='text-gray-300'>/</span>
                    <li>
                        <span className='text-white hover:text-black text-xs font-bold'>Blog</span>
                    </li>
                </ul>
            </section>

            <section className='section flex mx-32 py-20 gap-10'>
                <BlogList />
                <div className='right w-11/12'>
                    <input className='text-sm text-gray-400 w-full h-12 rounded-md border-gray-400 placeholder:text-gray-400' type="search" name="search" placeholder='Search Here' id="search" />
                    <div>
                        <h2 className='text-2xl py-5 uppercase'>Recent Comments</h2>
                        <Comments />
                    </div>
                    <div>
                        <h2 className='text-2xl py-5 uppercase'>Categories</h2>
                        <ul className='flex flex-col gap-7'>
                            <li>
                                <Link className='text-xs rounded-md p-3 text-gray-500 bg-gray-300 hover:bg-green-500 hover:text-white' href='#'>Computers</Link>
                            </li>
                            <li>
                                <Link className='text-xs rounded-md p-3 text-gray-500 bg-gray-300 hover:bg-green-500 hover:text-white' href='#'>Smartphone</Link>
                            </li>
                            <li>
                                <Link className='text-xs rounded-md p-3 text-gray-500 bg-gray-300 hover:bg-green-500 hover:text-white' href='#'>Gedgets</Link>
                            </li>
                            <li>
                                <Link className='text-xs rounded-md p-3 text-gray-500 bg-gray-300 hover:bg-green-500 hover:text-white' href='#'>Technology</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl py-5 uppercase'>Archieve</h2>
                        <ul className='flex flex-col gap-7'>
                            <li>
                                <Link className='text-sm hover:text-green-500 flex justify-between border-b-2 border-b-gray-100' href='#'>
                                    <span>Computers</span>
                                    <span>(97)</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='text-sm hover:text-green-500 flex justify-between border-b-2 border-b-gray-100' href='#'>
                                    <span>Smartphone</span>
                                    <span>(32)</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='text-sm hover:text-green-500 flex justify-between border-b-2 border-b-gray-100' href='#'>
                                    <span>Gedgets</span>
                                    <span>(19)</span>
                                </Link>
                            </li>
                            <li>
                                <Link className='text-sm hover:text-green-500 flex justify-between border-b-2 border-b-gray-100' href='#'>
                                    <span>Technology</span>
                                    <span>(08)</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <ArrowUp />

            <Footer />
        </div>
    );
};

export default Blog;
