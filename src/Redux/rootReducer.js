import { combineReducers } from 'redux'
import { createPostReducer } from './Reducers/createPostReducer'
import { getAllPostReducer } from './Reducers/getAllPostReducer'

const rootReducer = combineReducers({
  posts: createPostReducer,
  allPosts: getAllPostReducer,
})

export default rootReducer
