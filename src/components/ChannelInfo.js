import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CHANNEL_API,GOOGLE_API_KEY } from '../utils/constants';
import Shimmer from './Shimmer';

const ChannelInfo = () => {
  const {id}=useParams();
  //console.log(id);
  const [channelData, setChannelData]=useState([]);

  useEffect(()=>{
    getChannelInfo();
  },[]);

  const getChannelInfo=async()=>{
    const data=await fetch(CHANNEL_API+id+"&key="+GOOGLE_API_KEY);
    const json =await data.json();
    setChannelData(json.items);
    //console.log(channelData);
  }
  console.log(channelData);

  // const {customUrl,title,description,thumbnails}=channelData[0]?.snippet;
  // const {subscriberCount, videoCount,viewCount}=channelData[0]?.statistics;

  return (channelData?.length==0)? <Shimmer/>: (
    <div className=' flex m-14 space-x-11 shadow-lg w-[80%] hover:bg-gray-300'>
      {/* {console.log(channelData[0])} */}
      <img
      className='rounded-full border border-gray-400'
      src={channelData[0].snippet.thumbnails.medium.url}
      alt="thumbnail"
      />
      <div className='p-8 "Roboto","Arial",sans-serif text-sm'>
        <p className='text-2xl font-medium'>
          {channelData[0].snippet.title}
        </p>
        <p className='pt-5 p-4'>
          <div className='font-medium'>{channelData[0].snippet.customUrl}</div>
          <p className='font-medium'>{ channelData[0].statistics.subscriberCount} subscribers</p>
          <p>{ channelData[0].statistics.videoCount} videos</p>
          <p>{ channelData[0].statistics.viewCount} views</p>
        </p>
        <p className='text-cyan-600'>
          {channelData[0].snippet.description}
        </p>
      </div>
    </div>
  )
}

export default ChannelInfo;