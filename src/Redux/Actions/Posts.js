import { ADD_POST, GET_ALL_POST } from 'Constants/appConstants'

export const addPost = (payload) => ({
  type: ADD_POST,
  payload: payload,
})

export const saveAllPost = (payload) => ({
  type: GET_ALL_POST,
  payload,
})
