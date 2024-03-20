import { createSelector } from '@reduxjs/toolkit'

const selectPosts = (state) => state.allPosts

export const getAllPosts = createSelector([selectPosts], (post) => {
  return post.titles
})
