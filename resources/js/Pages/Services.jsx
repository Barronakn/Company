import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import React from 'react';
import services from '../../../public/assets/4.jpg';
import { Link } from '@inertiajs/react';
import ArrowUp from '@/Components/ArrowUp';
import crayon from "../../../public/assets/crayon.svg"
import book from "../../../public/assets/book.svg"
import rocket from "../../../public/assets/rocket.svg"


const Services = () => {
    return (
        <div className='services'>
            <Nav />

            <section className='uppercase px-32 pt-28 pb-14 font-sans text-black bg-green-500 h-20'>
                <ul className='flex gap-1 items-center justify-center'>
                    <li>
                        <Link className='text-black hover:text-white text-xs font-bold' href='/'>Home</Link>
                    </li>
                    <span className='text-gray-300'>/</span>
                    <li>
                        <span className='text-white hover:text-black text-xs font-bold'>Services</span>
                    </li>
                </ul>
            </section>

            <section className='px-32 py-10 gap-5'>
                <h1 className='text-2xl font-bold py-6'>Company Services</h1>
                <hr />

                <div className="service flex gap-14 pt-10">
                    <div className='flex flex-col left w-1/2'>
                        <img loading='lazy' className='rounded-xl' src={services} alt="services-img" />
                        <p className='text-xs text-stone-700 leading-6 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>
                    </div>

                    <div className='right mt-6 w-1/2'>
                        <div>
                            <img className='w-10 h-10' loading='lazy' src={crayon} alt="crayon" />
                            <h2 className='text-xl font-bold text-green-500'>Web Development</h2>
                            <p className='text-xs text-stone-700 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
                        </div>
                        <div>
                            <img className='w-10 h-10' loading='lazy' src={book} alt="book" />
                            <h2 className='text-xl font-bold text-green-500'>Responsive Design</h2>
                            <p className='text-xs text-stone-700 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
                        </div>
                        <div>
                            <img className='w-10 h-10' loading='lazy' src={rocket} alt="rocket" />
                            <h2 className='text-xl font-bold text-green-500'>Bootstrap Themes</h2>
                            <p className='text-xs text-stone-700 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className='px-32 py-10 gap-5 pb-20 bg-gray-200'>

                <div className="service flex gap-14">

                    <div className='left mt-6 w-1/2'>
                        <div>
                            <img className='w-10 h-10' loading='lazy' src={crayon} alt="crayon" />
                            <h2 className='text-xl font-bold text-green-500'>Web Development</h2>
                            <p className='text-xs text-stone-700 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
                        </div>
                        <div>
                            <img className='w-10 h-10' loading='lazy' src={book} alt="book" />
                            <h2 className='text-xl font-bold text-green-500'>Responsive Design</h2>
                            <p className='text-xs text-stone-700 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
                        </div>
                        <div>
                            <img className='w-10 h-10' loading='lazy' src={rocket} alt="rocket" />
                            <h2 className='text-xl font-bold text-green-500'>Bootstrap Themes</h2>
                            <p className='text-xs text-stone-700 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.</p>
                        </div>
                    </div>

                    <div className='flex flex-col right w-1/2'>
                        <img loading='lazy' className='rounded-xl' src={services} alt="services-img" />
                        <p className='text-xs text-stone-700 leading-6 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>
                    </div>
                </div>

            </section>

            <ArrowUp />

            <Footer />
        </div>
    );
};

export default Services;
