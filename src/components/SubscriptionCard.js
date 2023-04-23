import React from 'react';


const SubscriptionCard = ({info}) => {
    console.log(info);
    const {snippet}=info||{};
    const {channelTitle,title,thumbnails}=snippet||{};

  return (
    <div className='p-2 m-4 w-96 h-43 shadow-lg'>
        <img
            className='rounded-lg'
            alt="thumbnail"
            src={thumbnails?.medium.url}
        ></img>
        <ul className='"Roboto","Arial",sans-serif mt-2'>
            <li className='text-base font-medium flex '>
                <img
                className='rounded-full h-7 w-7 mr-3'
                alt="channel thumbnail"
                src={thumbnails?.default.url}
                >
                </img>
               {title} 
            </li>
            <li className='text-gray-500 flex mt-2'>  
                {channelTitle}
            </li>
        </ul>
    </div>
  )
}

export default SubscriptionCard;