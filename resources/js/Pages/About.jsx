import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import React from 'react';
import { Link } from '@inertiajs/react';
import about from '../../../public/assets/7.jpg';
import team1 from '../../../public/assets/1.jpg';
import team2 from '../../../public/assets/2.jpg';
import team3 from '../../../public/assets/3.jpg';
import ArrowUp from '@/Components/ArrowUp';

const About = () => {
    return (

        <div className='about'>
            <Nav />

            <section className='uppercase px-32 pt-28 pb-14 font-sans text-black bg-green-500 h-20'>
                <ul className='flex gap-1 items-center justify-center'>
                    <li>
                        <Link className='text-black hover:text-white text-xs font-bold' href='/'>Home</Link>
                    </li>
                    <span className='text-gray-300'>/</span>
                    <li>
                        <span className='text-white hover:text-black text-xs font-bold'>About Us</span>
                    </li>
                </ul>
            </section>

            <section className='section_1 px-32 py-10 gap-5'>
                <h1 className='text-2xl font-bold py-6'>Our company information</h1>
                <hr />

                <div className="flex gap-14">
                    <div className='flex flex-col left w-3/5'>
                        <div className='mt-6'>
                            <img loading='lazy' className='rounded-lg' src={about} alt="about-img" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-xl font-bold py-4'>We Create, Design and Make it Real</h2>
                            <p className='text-xs text-stone-700 leading-6'>Nam tempor velit sed turpis imperdiet vestibulum. In mattis leo ut sapien euismod id feugiat mauris euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus id nulla risus, vel tincidunt turpis. Aliquam a nulla mi, placerat blandit eros.</p>
                            <p className='text-xs text-stone-700 leading-6'>In neque lectus, lobortis a varius a, hendrerit eget dolor. Fusce scelerisque, sem ut viverra sollicitudin, est turpis blandit lacus, in pretium lectus sapien at est. Integer pretium ipsum sit amet dui feugiat vitae dapibus odio eleifend.</p>
                        </div>
                    </div>

                    <div className='right mt-6 w-2/5'>
                        <div>
                            <h2 className='text-3xl'>Our Skills</h2>
                            <p className='text-xs my-6 text-stone-700 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <div className='percent'>
                                <h3 className='text-2xl font-bold'>Graphic Design</h3>
                                <div className='bg-gray-300 w-full h-4'>
                                    <div className='bg-cyan-700 w-85 h-4'></div>
                                </div>
                            </div>
                            <div className='percent'>
                                <h3 className='text-xl font-bold'>HTML</h3>
                                <div className='bg-gray-300 w-full h-4'>
                                    <div className='bg-green-600 w-95 h-4'></div>
                                </div>
                            </div>
                            <div className='percent'>
                                <h3 className='text-xl font-bold'>CSS</h3>
                                <div className='bg-gray-300 w-full h-4'>
                                    <div className='bg-yellow-400 w-80 h-4'></div>
                                </div>
                            </div>
                            <div className='percent'>
                                <h3 className='text-xl font-bold'>Wordpress</h3>
                                <div className='bg-gray-300 w-full h-4'>
                                    <div className='bg-red-500 w-90 h-4'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='section_2 bg-gray-200 px-32 py-12'>
                <h1 className='text-2xl text-stone-700 font-bold'>Our Team</h1>
                <div className='flex justify-between gap-14 items-center py-10 px-20 text-center'>
                    <div>
                        <img loading='lazy' className='rounded-lg' src={team1} alt="team1-img" />
                        <h3 className='text-lg font-bold'>John Doe</h3>
                        <p className='text-xs my-3 text-stone-700 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>
                    </div>
                    <div>
                        <img loading='lazy' className='rounded-lg' src={team2} alt="team2-img" />
                        <h3 className='text-lg font-bold'>John Doe</h3>
                        <p className='text-xs my-3 text-stone-700 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>
                    </div>
                    <div>
                        <img loading='lazy' className='rounded-lg' src={team3} alt="team3-img" />
                        <h3 className='text-lg font-bold'>John Doe</h3>
                        <p className='text-xs my-3 text-stone-700 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>
                    </div>
                </div>
            </section>

            <ArrowUp />

            <Footer />
        </div>
    );
};

export default About;
