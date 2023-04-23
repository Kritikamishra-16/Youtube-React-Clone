import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SuggestionVideoCards = ({info}) => {
    const {snippet}=info;
    const {channelTitle,thumbnails,description,title}=snippet;
    
    return (
        <div className='space-x-5 flex w-96 h-36 mr-14 shadow-lg my-4  rounded-md border border-gray-300'>
        <img
            className='rounded-lg h-32 m-2 p-1 w-48'
            alt="thumbnail"
            src={thumbnails.medium.url}
        ></img>
        <ul className='"Roboto","Arial",sans-serif p-1 m-2'>
            <li className='text-xs font-medium'>
               {title} 
            </li>
            <li className='font-medium text-xs pt-2 text-gray-500 flex'>
            <FontAwesomeIcon icon={faUser} className='p-1 bg-gray-300 rounded-full mr-2'/>
               {channelTitle}
            </li >
            
        </ul>
    </div>
    )
}

export default SuggestionVideoCards;