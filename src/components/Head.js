import React,{ useState, useEffect } from "react";
import img from "../img/images.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faMicrophone,faBell,faVideo } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import ButtonList from "./ButtonList"
import { Link } from "react-router-dom";

const Head=()=>{

    //it is a constant but still we are able to change it bcz it a new variable every time we re render
    const [searchQuery, setSearchQuery]=useState("");
    const [suggestions, setSuggestions]=useState([]); //empty array
    const [showSuggestions, setShowSuggestions]=useState(false);
    const [searchItem, setSearchItem]=useState("");

    const searchCache=useSelector((store)=>store.search);

    const dispatch = useDispatch();


    //DEBOUNCING-> make API calls when difference between two key strokes is 200 ms
    //make an API call after evry key press
    //but if the difference between 2 key strokes id <200ms
    //decline the API call
    useEffect(()=>{
        //making API call after 200 ms
        const timer=setTimeout(()=>{
            //if searchQuery is present in cache directly set suggestions
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }
            else{ //else make an api call
                getSearchSuggestions();
            }
        },200);
        return ()=>{
            clearTimeout(timer);
        }
    },[searchQuery]);

    //console.log(searchItem);


    //THIS FUNCTION IS MAKING API CALL FOR SEARCH
    const getSearchSuggestions=async ()=>{
        const data=await fetch(YOUTUBE_SEARCH_API+ searchQuery);
        const json=await data.json();
        setSuggestions(json[1]);

        //searchQuery is not present in cache making an api call and 
        //update the cache by dispatching an action
        dispatch(cacheResults({
            [searchQuery] : json[1]
            //"ip" :["iphone", "iphone 11"]
            //iphone: [1,2,3]
        }));

    }
    /*
     * key-> i
     * -component gets render
     * -useEffect() is called
     * -timer startes=> makes an api call after 200ms
     * 
     * 
     * key-> ip (pressed key p before 200 ms)
     * -destroy the previous rendered component(useEffect return method also -> which destroys the timer for that api call)
     * -re-render the component
     * -useEffect() is called
     * -timer startes=> makes an api call after 200ms 
     * 
     * =>IN THIS WAY ONLY ONE API CALL IS MADE WITH 2 KEY STROKES WITHIN 200 MS
     * 
     *   
     */

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    return (
    <div className="fixed top-0 w-full z-10 bg-white p-3 "> 
    <div className="grid grid-flow-col">
        <div className="flex col-span-1">
                <img
                    onClick={()=>toggleMenuHandler()}
                    className="h-7 cursor-pointer"
                    alt="menu"
                    src={img} 
                />
                <a href="/">
                    <img
                        className="h-5 ml-5 mt-1"
                        alt="youtube-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png?20220605194644"
                    >
                    </img>
                </a>
            </div>
            <div className="col-span-10  pl-[20%] py-1.5">
                <div className="mt-0">
                    <input
                        className="mb-1 px-5 w-[60%] border border-gray-300 p-1.5 rounded-l-full"
                        type="text"
                        placeholder="Search"
                        onChange={(e)=>{
                            setSearchQuery(e.target.value);
                            setShowSuggestions(true);
                        }}
                        value={searchQuery}
                        //onBlur={()=>setShowSuggestions(false)}
                    ></input>
                        <Link to={"/results?search_query="+searchItem}>
                        <button 
                            className="border border-gray-300 p-1.5 rounded-r-full w-[10%] bg-gray-100"
                            onClick={(e)=>{
                                setSearchItem(searchQuery);
                                setShowSuggestions(false);
                            }}   
                        ><FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        </Link>
                    <button className="mx-2 w-10 h-10 text-center text-lg hover:bg-gray-300 rounded-full">
                        <FontAwesomeIcon  icon={faMicrophone} />
                    </button>
                </div>
                {
                    showSuggestions &&
                    (<div className="fixed border border-gray-100 rounded-lg shadow-lg bg-white ml-1 py-2 px-5 w-[32rem]">
                    <ul>
                        {
            
                            suggestions?.map((s)=>{
                                return (
                                <Link key={s} to={"/results?search_query="+s}>
                                <li 
                            
                                    className="py-2 shadow-sm hover:bg-gray-100"
                                    onClick={()=>{
                                        setSearchItem(s);
                                        setSearchQuery(s);
                                        setShowSuggestions(false);
                                    }}
                                    ><FontAwesomeIcon icon={faMagnifyingGlass} /> {s}
                                </li>
                                </Link>)})
                        }
                    </ul>
                    </div>)
                }
            </div>
            <div className="ml-auto col-span-1 flex flex-row mt-3 text-lg pr-0 float-right">
                <div className="mr-7 float-right">
                    <FontAwesomeIcon icon={faVideo} />                
                </div>
                <div className="mr-7 float-right">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                   <Link to="https://github.com/Kritikamishra-16/">
                    <img
                        className="h-7 float-right"
                        alt="user"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAY1BMVEX///8AAAD6+vrV1dU3Nzfc3Nzw8PDNzc3FxcXS0tKurq7l5eW7u7uGhoZYWFg6OjpPT0+cnJxsbGwbGxuoqKhhYWE/Pz8lJSUyMjK1tbWOjo5HR0cQEBAtLS10dHQWFhZ9fX0MZjZhAAAEu0lEQVRoge1b15brIAw0JO4lzU51sv7/r9z1JrnB1KFkfe45mXcYbIQ0EiKKPvjgg/8PNCkXaZZl6aJM6N8y523dLQmLZVe3+V+sIsnqPVFhX2fJW8mr7qAkv+PQVe9aQlwfDeR3HOv4DexVA5Hf0VSB2U87C/YRu1M4clqtLNlHrKpA52GxdmAfsV4EYKdnR/YRZ+9fkC/NLBoscz/6jRf7iI0He7L1pidk6+yP4ksAekIuju4oDcI+InWhPwWjJ8TBGRUB6Qkp5qW3XkDIn3+H1RbkwekJsfBEcf8G/h4+hkmYc8/jgjqiEF5Phi1G7+/zVYBiwTts7wnABqlfwNVjadYDPnLDjLOJfvFWekIMkoziWu96K9KfxI8maXG7wqPW+h2o0Hm2GTsRzeAzq88MQKF9E31ZfMOGrnT0YNiRfwP473SBCMpy1io/mkDGs1PTQ1+wVVsQhaxAbQFIitnpDJh2wAyNanQMDL7qzw9FTqIqENceY22+oZYPTYDygjmCAdHzKDdgwPoACYGIF7kFAraDqFhAOXfShZtKS4R8IQoq+TLOc5DNk5nXrTAcDoAZZ27DsDwOyBtlH6IuK/4DVs2g5on2TqOWEH0UAQpO/BJAdoL6GdHvohBtzYOM4u0BQEK2wiDA/NBSDuACRQMEvE9AftEDAUYT8P8LpgyYf0j7Ew5AAozRSkcGiIjlPXAJjAnnfwgpuUFQ3hPM/4p5EDQoWPwRPwWIfoT0UPyFijd8BIT4Q+kPZ/6L2QIpVjzi+cFibxD9OYLffzTvN12puM4Dnf8fHA35B3ZFKJ5/xP/9otHmX/AlIX+SIKf1i5uGH6wBEIkrxcteF/7fPVHidVNRyiGZ6wM7Rf3B4o5UjP+Q13zCo/5yh+jJAf03WcHUgWRW7DL9Z1127W9FWiY0KdPiZl2vF/UvfgBCQHKIgfwnGCT5j50BekImJLAISNbDsJUftF03DGD5Vpb/Avk/WT0EwGLgLa4fHhGlANSnNP83e6Br8TKbpG1e6z007WtGWhhrYNL6h7H+M3CrLvNiUw/1psg5h5wMhpnk/lNf/7raXCKn2l+gqH9pT4Cm6iqDthKrktGa2qF9F4NGhylrmEr1YH19HWl0sLL+q7RAp/4BpaTV3IDIHYtrD4s8pGnq//L7D5mzwiB1qdqLeInzEkM1Domo0CfxogWgRQ85xFKI/v5LuP9be9FHkTCfwY/w+YtvMyOfVxhb0qZ/zL+PcLqj5t2c3H+rXQUO1qkB99/sqd2FaOSMGacCeZKX5+7dj/4L2UuqgFGEiV1unpcF44XR+iF7heTZP8juJtz/MgnEflvAemALY2JDl0vsfYKNwVZbyQYiXcKvB5sUWrbgsStvVAm/HiV78r0a8A4ubrA6+NBzWsC6iXTauurUjJ1PcpyNjQCmE/XZOx7iaf8rm/0Y2KcZkGv/q9D/uz9B9efTNJN37/+NBBV/NT4tiGsu9fHpf44k/d+XjXo38w1fgfPt/5b2v/ddkZZTY6BlWnRiFci//z1S9P9f981wbk9VVZ3a89DsZQlnkP7/aPb3DyNmff/xi3nfv4yY9/3PiHnfP92XMOf7rwfmfP/GrGK2938ffPBBGHwDC1s8lJFOq84AAAAASUVORK5CYII="
                    >
                    </img>
                    </Link>
            </div>
            
    </div>
        <div className="flex flex-col">
        <ButtonList/>
        </div>
    </div>
    )
};

export default Head;

