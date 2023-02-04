import {
  All_RESTAURANT_REQUEST,
  All_RESTAURANT_SUCCESS,
  All_RESTAURANT_FAIL,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/restaurantConstants";

//   Reducer for all product
export const restaurantsReducer = (state = { restraunts: [] }, action) => {
  switch (action.type) {
    case All_RESTAURANT_REQUEST:
      return {
        loading: true,
        items: [],
      };
    case All_RESTAURANT_SUCCESS:
      return {
        loading: false,
        items: action.payload.items,
      };
    case All_RESTAURANT_FAIL:
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

// Reducer for single product
export const restaurantDetailsReducer = (state = { restaurant: {} }, action) => {
  switch (action.type) {
    case RESTAURANT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case RESTAURANT_DETAILS_SUCCESS:
      return {
        loading: false,
        item: action.payload,
      };
    case RESTAURANT_DETAILS_FAIL:
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
