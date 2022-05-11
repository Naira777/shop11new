
import * as axios from 'axios';





const instance = axios.create ({ 

    baseURL: 'https://api.thecatapi.com/v1/'
  

});



export const API = { 



getCategories ()  {
  
        return instance.get(`breeds`)
    
       .then(response =>

         {
             return response.data;
             
    
          });

}

}


