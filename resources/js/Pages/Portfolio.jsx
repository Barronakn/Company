import ArrowUp from '@/Components/ArrowUp';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import item1 from '../../../public/assets/item1.png';
import item2 from '../../../public/assets/item2.png';
import item3 from '../../../public/assets/item3.png';
import item4 from '../../../public/assets/item4.png';
import item5 from '../../../public/assets/item5.png';
import item6 from '../../../public/assets/item6.png';
import item7 from '../../../public/assets/item7.png';
import item8 from '../../../public/assets/item8.png';

const Portfolio = () => {

    const portfolios = [
        {
            image: item1,
            titre: "Business theme",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority",
        },
        {
            image: item2,
            titre: "Business theme",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority",
        },
        {
            image: item3,
            titre: "Business theme",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority",
        },
        {
            image: item4,
            titre: "Business theme",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority",
        },
        {
            image: item5,
            titre: "Business theme",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority",
        },
        {
            image: item6,
            titre: "Business theme",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority",
        },
        {
            image: item7,
            titre: "Business theme",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority",
        },
        {
            image: item8,
            titre: "Business theme",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority",
        },
    ]

    const { url } = usePage()

    const links = [
        {
            text: "All Works",
            url: "portfolio",
        },
        {
            text: "Creative",
            url: "portfolio#creative",
        },
        {
            text: "Photography",
            url: "portfolio#photography",
        },
        {
            text: "Web Development",
            url: "portfolio#webdevelopment",
        },
    ]

    return (
        <div className='portfolios'>
            <Nav />

            <section className='uppercase px-32 pt-28 pb-14 font-sans text-black bg-green-500 h-20'>
                <ul className='flex gap-1 items-center justify-center'>
                    <li>
                        <Link className='text-black hover:text-white text-xs font-bold' href='/'>Home</Link>
                    </li>
                    <span className='text-gray-300'>/</span>
                    <li>
                        <span className='text-white hover:text-black text-xs font-bold'>Portfolio</span>
                    </li>
                </ul>
            </section>

            <section className='section_1'>
                <div className='py-14'>
                    <h1 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt</h1>
                </div>
                <div>
                    <ul className='flex gap-7 justify-center flex-wrap items-center'>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link className={url === link.url ? "active_portfolio_link" : 'text-xs rounded-md border-gray-500 border-1 p-3 uppercase hover:bg-green-500 hover:text-white'} href={link.url}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className='section_2 mx-20 grid grid-cols-4 py-10'>
                {
                    portfolios.map((portfolio, index) => (
                        <div className='flex flex-col gap-4 py-4' key={index}>
                            <img loading='lazy' src={portfolio.image} alt={"item" + index} />
                            <Link className='text-2xl hover:text-green-500 active:underline' href='#'>{portfolio.titre}</Link>
                            <p className='text-sm'>{portfolio.text}</p>
                            <Link className='text-sm hover:text-green-500 active:underline' href='#'>View</Link>
                        </div>
                    ))
                }
            </section>

            <ArrowUp />

            <Footer />
        </div>
    );
};

export default Portfolio;
