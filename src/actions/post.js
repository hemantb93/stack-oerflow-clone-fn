import * as api from "../api/index";

export const postPost = (postData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postPost(postData);
    dispatch({ type: "POST_POST", payload: data });
    dispatch(api.getAllPosts());
    navigate("/community");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllPosts();
    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id, navigate) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch(fetchAllPosts());
    navigate("/community");
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id, value) => async (dispatch) => {
  try {
    await api.likePost(id, value);
    dispatch(fetchAllPosts());
  } catch (error) {
    console.log(error);
  }
};
export const disLikePost = (id, value) => async (dispatch) => {
    try {
      await api.disLikePost(id, value);
      dispatch(fetchAllPosts());
    } catch (error) {
      console.log(error);
    }
  };