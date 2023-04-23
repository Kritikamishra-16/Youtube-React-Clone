import React from 'react'


const VideoCard = ({info}) => {
    //console.log(info);
    const {snippet, statistics}=info || {};
    const {channelTitle,title,thumbnails}=snippet;

  return (
    <div className='p-2 m-2 w-80 h-43 '>
        <img
            className='rounded-lg'
            alt="thumbnail"
            src={thumbnails.medium.url}
        ></img>
        <ul className='"Roboto","Arial",sans-serif mt-2'>
            <li className='text-base font-medium flex '>
                <img
                className='rounded-full h-7 w-7 mr-3'
                alt="channel thumbnail"
                src={thumbnails.default.url}
                >
                </img>
            {/* <FontAwesomeIcon icon={faUser} className='p-1 bg-gray-300 rounded-full mr-2'/> */}
               {title} 
            </li>
            <li className='text-gray-500 flex mt-2'>  
                {channelTitle}
            </li>
            <li className='text-gray-500'>
                {statistics?.viewCount} views
            </li>
        </ul>
    </div>
  )
}

export default VideoCard