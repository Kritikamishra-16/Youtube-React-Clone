import React from 'react'

const SearchChannelCard = ({info}) => {
    const {channelTitle,description,thumbnails}=info.snippet;
  return (
    <div className='pl-6 ml-24  space-x-20 pb-5 hover:bg-gray-200'>
        <hr/>
        <div className='flex'>
        <div className='p-4'>
            <img
            className='rounded-full '
            src={thumbnails.medium.url}
            alt="channelThumbnail"
            >
            </img>
        </div>
        <div className='p-3 "Roboto","Arial",sans-serif '>
            <p className='text-base font-medium'>
            {channelTitle}
            </p>
            <p className='text-xs pt-2 text-gray-500'>
                {description}
            </p>
        </div>  
        </div>
        <hr/>
    </div>
  )
}

export default SearchChannelCard;