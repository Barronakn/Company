import React from 'react';
import { Link } from '@inertiajs/react';
import avatar1 from "../../../public/assets/avatar3.png";

const Comments = () => {
    const comments = [
        {
            image: avatar1,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            author: "Alex"
        },
        {
            image: avatar1,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            author: "Alex"
        },
        {
            image: avatar1,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            author: "Alex"
        }
    ]
    return (
        <div>
            {
                comments.map((comment, index) => (
                    <div className='flex py-2' key={index}>
                        <div>
                            <img loading='lazy' className='w-32 h-20' src={comment.image} alt="author-img" />
                        </div>
                        <div className='text-sm ml-3'>
                            <p>{comment.text}</p>
                            <span>By <Link href='#' className='hover:text-green-500'>{comment.author}</Link> </span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Comments;
