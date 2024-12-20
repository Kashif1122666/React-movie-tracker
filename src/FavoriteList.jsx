import {useContext} from 'react'
import imageOne from "./fims-Pictures/imageOne.jpg"
import imageTwo from "./fims-Pictures/imageTwo.jpg"
import imageThree from "./fims-Pictures/imageThree.jpg"
import imageFour from "./fims-Pictures/imageFour.jpg";
import imageFive from "./fims-Pictures/imageFive.jpg";
import imageSix from "./fims-Pictures/imageSix.jpg";
import imageSeven from "./fims-Pictures/imageSeven.jpg";
import imageEight from "./fims-Pictures/imageEight.jpg";
import { MoviesContext } from './MovieContext';

function FavoriteList() {
  
  
  const { favorite, setFavorite } = useContext(MoviesContext);
          
     return (
      <>
       
        <div className='p-10 m-0 mt-14 ml-16' >
  
        <ul className='grid grid-cols-4 gap-x-4 gap-y-4'>
          {
            favorite.map((item,index)=>(
              <li key={item.id}  >
                  <div className='border border-black  max-w-[200px] bg-gray-700  rounded-lg text-white'>
            <img src={item.img} alt="fim-pic"  className='h-40 rounded-lg w-full' />
            <ul>
            <li><span className='text-yellow-300'>Title:</span> {item.title}</li>
              <li><span className='text-yellow-300'>Genre:</span> {item.genre}</li>
              <li><span className='text-yellow-300'>Year:</span>: {item.year}</li>
              <button onClick={()=>{
                  setFavorite(favorite.filter((fav)=> fav.id !== item.id))
              }}  className='border border-black rounded-lg p-2 bg-orange-600 hover:bg-orange-700  hover:px-4'>Remove from Favorite</button>
            </ul>
        </div> 
              </li>)
            )
          }
        </ul>
  
  
        </div>
        
      </>
    )
                     
}


  




export default FavoriteList