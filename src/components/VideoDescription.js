import React from 'react'
import { useSelector } from 'react-redux';

const VideoDescription = ({data}) => {
    console.log(data);
    const isSubBtnOpen=useSelector(store=>store.description.isSubBtnOpen);

    if(!isSubBtnOpen) //early return
    return null;

  return (
    <div className='m-6 bg-gray-300 p-6 rounded-lg text-sm w-[87%]'>
        <p>{data.localized.description}</p>
    </div>
  )
}

export default VideoDescription