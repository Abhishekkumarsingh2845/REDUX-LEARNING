import {ADD_TO_CARD} from "./Constant";

 const initalState = [];
  export const reducer =(state=initalState,action)=>
  {
    switch(action.type)
    {
        case ADD_TO_CARD:
            return [
                ...state,
            action.data    
                ]
                default:
                    return state
    }
  }
