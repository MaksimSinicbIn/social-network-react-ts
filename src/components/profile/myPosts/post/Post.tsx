import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    id: number
    message: string
    likesCounts: number
}

export const Post = ({message, likesCounts, ...restProps}: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://sun9-60.userapi.com/impg/YdOcbH3mO846v2o4vHTD58R7cG0beppAXgKjXQ/P2dWvkdSoBU.jpg?size=512x512&quality=96&sign=b6e76ea19bb4a2c9237f3d552869684b&type=album' alt='bg-bear' />
            {message}
            <div>
                <span>Like</span> {likesCounts}
            </div>
        </div>
    );
};