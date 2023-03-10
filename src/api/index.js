import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:5000` });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

// Authentication
export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

// Question
export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value) =>
  API.patch(`/questions/vote/${id}`, { value });
// API.patch(`/questions/vote/${id}`, { value, userId });

// Answers
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { id, answerId, noOfAnswers });

export const getAllUsers = () => API.get(`/user/getAllUsers`);

export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

// community
export const postPost = (postBody) => API.post("/post/post", postBody);
export const deletePost = (id) => API.delete(`/post/delete/${id}`);
export const likePost = (id, count) => API.patch(`/post/like/${id}`, { count });
export const disLikePost = (id, count) =>
  API.patch(`/post/dislike/${id}`, { count });
export const getAllPosts = () => API.get("/post/get");
