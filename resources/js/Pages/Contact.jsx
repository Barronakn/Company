import ArrowUp from '@/Components/ArrowUp';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { Link } from '@inertiajs/react';
import React from 'react';

const Contact = () => {
    return (
        <div className='contact'>
            <Nav />

            <section className='uppercase px-32 pt-28 pb-14 font-sans text-black bg-green-500 h-20'>
                <ul className='flex gap-1 items-center justify-center'>
                    <li>
                        <Link className='text-black hover:text-white text-xs font-bold' href='/'>Home</Link>
                    </li>
                    <span className='text-gray-300'>/</span>
                    <li>
                        <span className='text-white hover:text-black text-xs font-bold'>Contact</span>
                    </li>
                </ul>
            </section>

            <section className='px-32 mb-20'>
                <div className='text-center'>
                    <h1 className='text-4xl pt-10'>Drop Your Message</h1>
                    <p className='text-xs text-stone-700 leading-6 mt-6'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <form className="flex justify-center items-center gap-10" method='post'>
                    <div className="flex flex-col w-1/2 w-100 gap-6">
                        <div className="flex flex-col">
                            <label>Name *</label>
                            <input className="" type="text" id='name' name="name" required="required" />
                        </div>
                        <div className="flex flex-col">
                            <label>Email *</label>
                            <input type="email" name="email" id='email' className="" required="required" />
                        </div>
                        <div className="flex flex-col">
                            <label>Phone</label>
                            <input type="number" id='phone' className="" />
                        </div>
                        <div className="flex flex-col">
                            <label>Company Name</label>
                            <input type="text" id='company' className="" />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 w-100 mt-16 gap-6">
                        <div className="flex flex-col">
                            <label>Subject *</label>
                            <input type="text" name="subject" id="subject" className="" required="required" />
                        </div>
                        <div className="flex flex-col">
                            <label>Message *</label>
                            <textarea name="message" id="message" required="required" className="" rows="8"></textarea>
                        </div>
                        <div className="flex flex-col">
                            <button className="text-xl text-white hover:text-green-500 bg-green-500 hover:bg-gray-300 w-44 rounded-md" type="submit" name="submit" required="required">Submit Message</button>
                        </div>
                    </div>
                </form>
            </section>

            <ArrowUp />

            <Footer />
        </div>
    );
};

export default Contact;
