import { createContext, useState } from "react";

 export  const MoviesContext = createContext();
export default function MoviesContextProvider({children}) {
    const [favorite,setFavorite] = useState([]);
  
    
      
       
  
    
    
  return (
 
    
        <MoviesContext.Provider value={{ favorite,setFavorite}}>
          {children}
        </MoviesContext.Provider>
      
   
  );
}


