import { useState, useEffect, useCallback } from 'react'
import { getAllPost } from 'Service/posts/postService'
// import { getAllPosts } from "Redux/Selectors/postSelectors";
import { useDispatch } from 'react-redux'
import { saveAllPost } from 'Redux/Actions/Posts'

export const usePostList = () => {
  const [isPost, setPost] = useState(false)
  //   const getAllPostFromStore = useSelector(state => getAllPosts(state));
  const dispatch = useDispatch()

  const handleGetAllPostFromServer = useCallback(async () => {
    const res = await getAllPost()
    dispatch(saveAllPost(res.data))
    res.data ? setPost(true) : setPost(false)
  }, [dispatch])
  useEffect(() => {
    const fetchData = async () => {
      await handleGetAllPostFromServer()
    }
    fetchData()
  }, [handleGetAllPostFromServer])
  return isPost
}
