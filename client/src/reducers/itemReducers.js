import {
All_ITEM_REQUEST,
All_ITEM_SUCCESS,
All_ITEM_FAIL,
ITEM_DETAILS_REQUEST,
ITEM_DETAILS_SUCCESS,
ITEM_DETAILS_FAIL,
CLEAR_ERRORS
} from '../constants/itemConstants';

//   Reducer for all product
export const itemsReducer = (state = { items: [] },action) =>{
switch(action.type){
    case All_ITEM_REQUEST:
        return { 
            loading:true,
            items:[]
        }
    case All_ITEM_SUCCESS:
        return {
          loading: false,
          items: action.payload.items,
        };
    case All_ITEM_FAIL:
        return {
            loading:false,
            error:action.payload 
        }
    case CLEAR_ERRORS:
        return {
            ...state,
            error:null
        }
    default:
        return state;    
} 
}

// Reducer for single product
export const itemDetailsReducer = (state = { item: {} }, action) => {
  switch (action.type) {
    case ITEM_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ITEM_DETAILS_SUCCESS:
      return {
        loading: false,
        item: action.payload,
      };
    case ITEM_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};