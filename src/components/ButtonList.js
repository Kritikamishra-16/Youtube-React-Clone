import Button from './Button';
import { Link } from 'react-router-dom';


const list=["All","Live","Gaming","Soccer", "Songs","News", "Movies", "Cricket", "Fashion", "Food", "Destinations", "Actors", "Weddings", "Clothing","IPL", "ViratKohli"]
const ButtonList = () => {
   
  return (
      <div className='w-[70%] ml-40 flex'>
       
            {
          list.map((element,index)=>{
            return (element=="All")?
            <Link key={index} to={"/"}>
                <Button name={element}/>
              </Link>
             :(
              <Link key={index} to={"/results?search_query="+element}>
                <Button name={element}/>
              </Link>
            )
          })
          }
    </div>
  
  )
}

export default ButtonList