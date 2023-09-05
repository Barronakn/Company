import Nav from '@/Components/Nav';
import React from 'react';
import { Link } from '@inertiajs/react';
import headerimg from "../../../public/assets/img3.png";
import about from "../../../public/assets/6.jpg";
import news from "../../../public/assets/4.jpg";
import partner1 from "../../../public/assets/partner1.png";
import partner2 from "../../../public/assets/partner2.png";
import partner3 from "../../../public/assets/partner3.png";
import partner4 from "../../../public/assets/partner4.png";
import partner5 from "../../../public/assets/partner5.png";
import contact from "../../../public/assets/contact.png";
import Footer from '@/Components/Footer';
import ArrowUp from '@/Components/ArrowUp';
import book from "../../../public/assets/book-white.svg";
import laptop from "../../../public/assets/laptop.svg";
import love from "../../../public/assets/love.svg";
import cloud from "../../../public/assets/cloud.svg";

const Welcome = () => {

    return (
        <div className='welcome'>
            <Nav />

            <header className='px-32 flex justify-evenly pt-32 text-white'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h1 className='font-bold text-5xl uppercase'>Welcome <span className='text-green-500'>Company</span></h1>
                    <p className='text-gray-200 text-2xl py-5'>Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</p>
                    <Link className='bg-green-500 p-2 rounded-lg w-24 hover:bg-green-600' href="/">Read More</Link>
                </div>

                <div className='w-1/2'>
                    <img loading='lazy' src={headerimg} alt="headerimg" />
                </div>
            </header>

            <section className='section_1 flex gap-16 py-6 items-center px-32'>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-24 h-24 bg-green-500 rounded-full p-5' loading='lazy' src={book} alt="book" />
                    <h2 className='text-xl text-green-500 text-center mb-5'>Full Responsive</h2>
                    <p className='text-xs leading-5 text-center'>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-24 h-24 bg-green-500 rounded-full p-5' loading='lazy' src={laptop} alt="laptop" />
                    <h2 className='text-xl text-green-500 text-center mb-5'>Retina Ready</h2>
                    <p className='text-xs leading-5 text-center'>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-24 h-24 bg-green-500 rounded-full p-5' loading='lazy' src={love} alt="love" />

                    <h2 className='text-xl text-green-500 text-center mb-5'>Full Responsive</h2>
                    <p className='text-xs leading-5 text-center'>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-24 h-24 bg-green-500 rounded-full p-5' loading='lazy' src={cloud} alt="cloud" />
                    <h2 className='text-xl text-green-500 text-center mb-5'>Retina Ready</h2>
                    <p className='text-xs leading-5 text-center'>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
                </div>
            </section>

            <section className='section_2 px-32 py-20 flex justify-between gap-10 bg-gray-200'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-3xl'>about us</h1>
                    <img loading='lazy' className='rounded-xl' src={about} alt="about-img" />
                    <p className='text-xs text-stone-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>
                </div>

                <div className='flex flex-col gap-7'>
                    <h1 className='text-3xl'>Template built with Twitter Bootstrap</h1>
                    <p className='text-xs  text-stone-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>
                    <p className='text-xs  text-stone-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>
                    <p className='text-xs  text-stone-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>
                </div>
            </section>

            <section className='section_3 py-6 px-32'>
                <h1 className='uppercase text-center text-xl font-bold pt-10 pb-16'>Lates News</h1>

                <div className='flex gap-8 items-center'>
                    <div className='text-justify'>
                        <img loading='lazy' className='rounded-md' src={news} alt="news-img" />
                        <h2 className='py-4 text-2xl'>Template built with Twitter Bootstrap</h2>
                        <p className='text-xs leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget.
                            Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget.
                            Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget.
                            Curabitur lacinia pellentesque</p>
                    </div>

                    <div className='text-justify'>
                        <img loading='lazy' className='rounded-md' src={news} alt="news-img" />
                        <h2 className='py-4 text-2xl'>Template built with Twitter Bootstrap</h2>
                        <p className='text-xs leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>
                    </div>

                    <div className='text-justify'>
                        <img loading='lazy' className='rounded-md' src={news} alt="news-img" />
                        <h2 className='py-4 text-2xl'>Template built with Twitter Bootstrap</h2>
                        <p className='text-xs leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>
                    </div>
                </div>
            </section>

            <section className='section_4 bg-img text-white px-32 py-24 flex flex-col justify-center items-center'>
                <div className=''>
                    <h1 className='text-3xl text-center'>Our Partners</h1>
                    <p className='text-xl py-10 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>

                <div className='flex gap-14'>
                    <Link href=''>
                        <img loading='lazy' src={partner1} alt="partner1-img" />
                    </Link>
                    <Link href=''>
                        <img loading='lazy' src={partner2} alt="partner2-img" />
                    </Link>
                    <Link href=''>
                        <img loading='lazy' src={partner3} alt="partner3-img" />
                    </Link>
                    <Link href=''>
                        <img loading='lazy' src={partner4} alt="partner4-img" />
                    </Link>
                    <Link href=''>
                        <img loading='lazy' src={partner5} alt="partner5-img" />
                    </Link>
                </div>
            </section>

            <section className='section_5 flex gap-14 px-32'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-3xl'>Have a question or need a custom quote?</h1>
                    <p className='text-xs text-stone-700 leading-6'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation +0123 456 70 80
                    </p>
                </div>

                <div>
                    <img className='w-full h-full' src={contact} alt="contact-img" />
                </div>
            </section>

            <ArrowUp />

            <Footer />
        </div>
    );
};

export default Welcome;
