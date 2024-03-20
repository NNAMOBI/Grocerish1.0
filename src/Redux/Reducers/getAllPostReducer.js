import { GET_ALL_POST } from 'constants/appConstants'

const initialState = {
  titles: [],
  error: false,
  loading: false,
}

export const getAllPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        titles: action.payload,
      }
    default:
      return state
  }
}
