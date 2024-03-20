import ApiService from 'common/API/route'

export const createPost = async (data) => {
  try {
    console.log(data)
    const postService = new ApiService('posts')
    const res = await postService.create(data)
    console.log(res)
    return 'posts is successful'
  } catch (e) {
    throw new Error(e.message)
  }
}

export const getAllPost = async () => {
  try {
    const postService = new ApiService('posts')
    const res = await postService.getAll()
    return res
  } catch (e) {
    throw new Error(e.message)
  }
}
