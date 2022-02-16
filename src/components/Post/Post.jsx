import React from 'react';
import Photo from '../../assets/img/Photo1.png'

import Vector from '../../assets/img/Vector.svg';
import noUserAvatar from '../../assets/img/NoUserAvatar.png'

import './Post.css';


export default function Post ({ post }) {
    let users = JSON.parse(localStorage.getItem('users'))
    let user = users.find(user => user.userID == post.userID)
    return (
        <div className='Post-box'>
            <div>
                <img className='Post-Photo' src={Photo} alt="MyArticlesPost"/>
            </div>
            <article className='Post-read-box'>
                <div className='Post-tag-box'>
                    <span className='Post-tag'>
                        {post.category}
                    </span>
                </div>
                <div className='Post-topic-box'>
                    <span className='Post-topic'> {post.topic} </span>
                </div>
                <div className='Post-text-box'>
                    <p className='Post-text'> {post.text} </p>
                </div>
                <div className='Post-info-box'>
                    <div className='Post-info-box__user-avatar-box'>
                        <img className='Post-info-box__user-avatar' src={user.userAvatar || noUserAvatar} alt="user-avatar-MyArticlesPost"/>
                    </div>
                    <div className='Post-info-box__user-name-box'>
                        <span className='Post-info-box__user-name'>{`${user.firstName} ${user.lastName}`}</span>
                    </div>
                    <div className='Post-info-box__dataPost-box'>
                        <span className='Post-info-box__dataPost'> Jun 13 · 5 min read </span>
                    </div>
                    <img className='Post-info-box__vector' src={Vector} alt="Vector-MyArticlesPost"/>
                    <span className='Post-info-box__views'> 1690 </span>
                </div>
            </article>
        </div>
    )
}