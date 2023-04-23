import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

const SearchResultCards = ({info}) => {
    const {snippet}=info;
    const {channelTitle,thumbnails,description,title}=snippet;
    
    return (
        <div className='flex pl-6 ml-24  space-x-7 '>
        <img
            className='rounded-lg w-[30%] h-[20%] mb-10'
            alt="thumbnail"
            src={thumbnails.medium.url}
        ></img>
        <ul className='"Roboto","Arial",sans-serif '>
            <li className='text-base font-medium'>
               {title} 
            </li>
            <li className='font-medium text-xs pt-2 text-gray-500 flex'>
            <FontAwesomeIcon icon={faUser} className='p-1 bg-gray-300 rounded-full mr-2'/>
               {channelTitle}
            </li >
            <li className="text-sm pt-6 w-auto text-gray-600">
                {description}
            </li>
        </ul>
    </div>
    )
}

export default SearchResultCards;