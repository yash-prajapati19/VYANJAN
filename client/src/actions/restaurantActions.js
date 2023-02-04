import axios from "axios";
import {
  All_RESTAURANT_REQUEST,
  All_RESTAURANT_SUCCESS,
  All_RESTAURANT_FAIL,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/restaurantConstants";


// Fetching items data from backend
export const getRestaurant = () => async (dispatch) => {
  try {
    dispatch({ type: All_RESTAURANT_REQUEST });

    let link = `/`;

    //   if(category){
    //     link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
    //   }

    const { data } = await axios.get(link);

    dispatch({
      type: All_RESTAURANT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: All_RESTAURANT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Fetching single item data
export const getItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: RESTAURANT_DETAILS_REQUEST });

    const { data } = await axios.get(`/${id}`);

    dispatch({
      type: RESTAURANT_DETAILS_SUCCESS,
      payload: data.restaurant,
    });
  } catch (error) {
    dispatch({
      type: RESTAURANT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Clearing Errors

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
