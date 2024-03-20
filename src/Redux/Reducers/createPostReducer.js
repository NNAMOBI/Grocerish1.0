import { ADD_POST } from 'constants/appConstants'

const initialState = {
  titles: [],
  error: false,
  loading: false,
}

export const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        titles: action.payload,
      }
    default:
      return state
  }
}
