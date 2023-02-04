import axios from "axios";
import {
  All_ITEM_REQUEST,
  All_ITEM_SUCCESS,
  All_ITEM_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/itemConstants";

// Fetching items data from backend
export const getItem = () => 
  async (dispatch) => {
    try {
      dispatch({ type: All_ITEM_REQUEST });

      let link = `/resturant/:id`;

    //   if(category){
    //     link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
    //   }

      const { data } = await axios.get(link);
 
      dispatch({
        type: All_ITEM_SUCCESS, 
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: All_ITEM_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // Fetching single item data
export const getItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_DETAILS_REQUEST });

    const { data } = await axios.get(`/${id}`);

    dispatch({
      type: ITEM_DETAILS_SUCCESS,
      payload: data.item,
    });
  } catch (error) {
    dispatch({
      type: ITEM_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Clearing Errors

export const clearErrors = () => async (dispatch) => {
    dispatch ({ type: CLEAR_ERRORS })
}