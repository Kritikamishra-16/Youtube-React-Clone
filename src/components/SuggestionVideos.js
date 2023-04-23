import React, { useEffect,useState } from 'react';
import { SUGGESTED_VIDEOS_API,GOOGLE_API_KEY } from '../utils/constants';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import SuggestionVideoCards from './SuggestionVideoCards';
import { useDispatch } from 'react-redux';
import { addHistory } from '../utils/historySlice';

const SuggestionVideos = ({id}) => {
    const [suggestionVideos,setSuggestionVideos]= useState([]);
    const dispatch=useDispatch();

    const addHistoryMethod=(video)=>{
        dispatch(addHistory(video));
    }

    //console.log(id);
    useEffect(()=>{
        getSuggestionVideos();
    },[id]);

    const getSuggestionVideos=async ()=>{
        const data=await fetch(SUGGESTED_VIDEOS_API+id+"&type=video&key="+GOOGLE_API_KEY);
        const json=await data.json();
        //console.log(json);
        setSuggestionVideos(json?.items);
    }

  return !suggestionVideos ? <Shimmer/> :(
    <div>
        <h1 className='text-base font-medium ml-0 pt-3'>Suggestions</h1>
        {
            suggestionVideos.map((video)=>{
                //console.log(video.id.videoId);
                return(
                <Link to={"/watch?v="+video?.id?.videoId}  key={video?.id?.videoId}
                onClick={()=>{
                    addHistoryMethod(video);
                }}
                >
                    <SuggestionVideoCards info={video}/>
                </Link>
                )
            })
        }
    </div>
  )
}

export default SuggestionVideos