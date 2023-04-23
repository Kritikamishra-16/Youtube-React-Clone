import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import { VIDEO_DATA_API,GOOGLE_API_KEY } from '../utils/constants';
import Shimmer from './Shimmer';
import { toggleSubscribe } from '../utils/subscribeSlice';
import SuggestionVideos from './SuggestionVideos';
import VideoDescription from './VideoDescription';
import { toggleSubBtn } from '../utils/descriptionBtnSlice';
import LiveChat from './LiveChat';
import { addCls } from '../utils/clsSlice';

const toggleBtn=(id,items)=>{
    const result = items?.find(item=>item.hasOwnProperty(id));
    return result ? 'Unsubscribe' : 'Subscribe';
}

const WatchPage = () => {
    const dispatch=useDispatch();
    const [videoData,setVideoData]=useState("");
    const {channelId} =videoData?.snippet||{};
    const items=useSelector(store=>store.subscribe.items);
    let [subData,setSubData]=useState(toggleBtn(channelId,items)); 
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

    let css="";

    if(isMenuOpen){
        dispatch(addCls("absolute z-[1] bg-white"));
        css="opacity-50 text-black/[.54]  pointer-events-none";
    }



    const [searchParams]=useSearchParams();
    const videoId=searchParams.get("v");

    const getVideoData= async ()=>{
        const data=await fetch(VIDEO_DATA_API+videoId+"&key="+GOOGLE_API_KEY);
        const json=await data.json();
        setVideoData(json.items[0]);
    }
   //console.log(videoData);

    const toggleSubscribeBtn=(item)=>{
        const {channelId} =item.snippet;
        dispatch(toggleSubscribe({[channelId]:item}));
    }

    const showMore=()=>{
        dispatch(toggleSubBtn());
    }
    
    //whenever we hit watch page we will close the sidebar once initially
    useEffect(()=>{
        dispatch(closeMenu());
        getVideoData();
        return()=>{
            dispatch(addCls(""));
            
        }
    },[videoId]);

    useEffect(()=>{
        setSubData(toggleBtn(channelId,items))
    },);

    //we can not use it here to access params bcz here we have query params not normal : params
    // const params=useParams();
    // console.log(params)

    //we use useSearchParams
    //urlsearchparams

    return (!videoData)? <Shimmer/>: (
                <div className={'pl-5 py-3 flex -space-x-16 '+css}>
                    <div  className='flex flex-col'>
                        <iframe 
                            width="980" 
                            height="470" 
                            src={"https://www.youtube.com/embed/"+searchParams.get("v") }
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                        <div>
                            <div className='mx-5 mt-3 font-bold text-xl "Roboto","Arial",sans-serif '>
                                {videoData.snippet.title}
                            </div>    
                            <div className='flex mt-2 mx-5'>
                                <img
                                className='rounded-full h-7 w-7 mr-3 mt-2'
                                alt="channel thumbnail"
                                src={videoData.snippet.thumbnails.default.url}
                                >
                                </img>
                                <div className='font-medium text-sm mr-5 mt-2'>
                                    {videoData.snippet.channelTitle}
                                </div>
                                <button className='h-9  w-32 bg-black text-white rounded-3xl'
                                onClick={()=>{
                                    toggleSubscribeBtn(videoData);
                                }}
                                >{subData}</button>
                                <button
                                onClick={()=>{
                                    showMore();
                                }}
                                className='ml-[40%] h-9  w-12 bg-gray-300  rounded-3xl font-bold'>...</button>
                            </div>
                            <div className='h-auto w-[1100px]'>
                                <VideoDescription data={videoData.snippet}/>
                                <CommentsContainer/>
                            </div>
                        </div>
                    </div>
                    <div className='w-[390px]'>
                        <LiveChat/>
                        <SuggestionVideos id={videoData.id}/>
                    </div>
                </div>
    )
}

export default WatchPage