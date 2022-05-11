import { API } from "../api"
import { getNameAndCategory } from "../utiles";
const SET_CATEGORIES = 'SET_CATEGORIES'



let initialState = {

categories: []

};


const categoryReducer = (state = initialState, action) => {

   switch (action.type) {

        
    
      case SET_CATEGORIES:
     
          return {
     
            
              ...state,
              
         categories: [...action.payload]
                      
            
          }


          default:

                return state;
      }
    
  }

    


export const setCategories = (payload) =>
({ type: SET_CATEGORIES, payload});


export const getCategories = () => async (dispatch) => {


       const response = await API.getCategories()
       const arr = getNameAndCategory(response)
                
       dispatch(setCategories(arr))

      

}    

 


export default categoryReducer