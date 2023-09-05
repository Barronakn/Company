import React from 'react';
import { Link } from '@inertiajs/react';
import blog1 from "../../../public/assets/blog1.jpg"
import blog2 from "../../../public/assets/blog2.jpg"

const BlogList = () => {
    const articles = [
        {
            image: blog1,
            titre: "Consequat bibendum quam liquam viverra",
            text: "Curabitur quis libero leo, pharetra mattis eros. Praesent consequat libero eget dolor convallis vel rhoncus magna scelerisque. Donec nisl ante, elementum eget posuere a, consectetur a metus. Proin a adipiscing sapien. Suspendisse vehicula porta lectus vel semper. Nullam sapien elit, lacinia eu tristique non.posuere at mi. Morbi at turpis id urna ullamcorper ullamcorper.",
            date: "07  JUNY",
            author: "John Doe",
            comments: "02 Comments",
            likes: "56 Likes",
        },
        {
            image: blog2,
            titre: "Consequat bibendum quam liquam viverra",
            text: "Curabitur quis libero leo, pharetra mattis eros. Praesent consequat libero eget dolor convallis vel rhoncus magna scelerisque. Donec nisl ante, elementum eget posuere a, consectetur a metus. Proin a adipiscing sapien. Suspendisse vehicula porta lectus vel semper. Nullam sapien elit, lacinia eu tristique non.posuere at mi. Morbi at turpis id urna ullamcorper ullamcorper.",
            date: "07  JUNY",
            author: "John Doe",
            comments: "02 Comments",
            likes: "56 Likes",
        }
    ]
    return (
        <div>

            <div>
                {
                    articles.map((article, index) => (
                        <div className='articles flex' key={index}>
                            <div className='left w-40'>
                                <div className='w-28'>
                                    <h6 className='rounded-tl-md rounded-tr-md text-white p-2 text-xs bg-green-500'>{article.date}</h6>
                                    <div className='bg-gray-800 w-full h-1'></div>
                                </div>
                                <ul className='flex flex-col'>
                                    <li className='w-28 bg-gray-100'>
                                        <Link className="text-xs p-2 text-gray-500" href='#'>{article.author}</Link>
                                    </li>
                                    <li className='w-28 bg-gray-100'>
                                        <Link className="text-xs p-2 text-gray-500" href='#'>{article.comments}</Link>
                                    </li>
                                    <li className='w-28 bg-gray-100 rounded-bl-md rounded-br-md'>
                                        <Link className=" text-xs p-2 text-gray-500" href='#'>{article.likes}</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='center w-full flex flex-col gap-7 pb-10'>
                                <img loading='lazy' src={article.image} alt="blog-img" />
                                <h3 className='text-lg'>{article.titre}</h3>
                                <p className='text-xs'>{article.text}</p>
                                <Link class="bg-green-500 p-2 rounded-lg w-24 hover:text-green-600 hover:bg-gray-400" href="/">Read More</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogList;
