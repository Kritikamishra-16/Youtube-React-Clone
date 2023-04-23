import React,{useEffect,useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import {GOOGLE_API_KEY, SURFING_API } from "../utils/constants";
import SearchResultCards from './SearchResultCards';
import { Link } from 'react-router-dom';
import SearchChannelCard from './SearchChannelCard';

const SearchResults = () => {
  const [searchPramas]=useSearchParams();
  //console.log(searchPramas.get("search_query"));
  const query=searchPramas.get("search_query");
  const [queryResult, setQueryResult]=useState([]);
  
  const getSearchResult=async()=>{
      const data=await fetch(SURFING_API+query+"&key="+GOOGLE_API_KEY);
      const json =await data.json();
      setQueryResult(json.items);
  }

  useEffect(()=>{
      getSearchResult();
  },[query]);

  console.log(queryResult)

  return (
     <div>
      {
        queryResult?.map((result)=>{
          const kind=result.id.kind;
          return(
                ((kind=="youtube#channel")?
                <div>
                <Link to={"/channel/"+result.id.channelId} key={result.id.channelId}>
                 <SearchChannelCard info={result}/>
                </Link>
                <p className='ml-28 pb-4 "Roboto","Arial",sans-serif text-base font-medium'>Latest from {result.snippet.channelTitle}</p>
                </div>
                :((kind=="youtube#video")?(<div>
                  <Link to={"/watch?v="+result.id.videoId}  key={result.id.videoId}>
                  <SearchResultCards info={result} />
                  </Link>
                </div>):null )
              )
         )
        })
      }
     </div>
  )
}

export default SearchResults;