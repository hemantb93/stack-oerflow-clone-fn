import React from "react";
import { Route, Routes } from "react-router-dom";
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import DisplayQuestions from "./pages/Questions/DisplayQuestions";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import Subscriptions from "./subscription/Paymentgetway/Subscriptions";
import ToChecoutForm from "./subscription/ToChecoutForm";
import CommunityPage from "./community/CommunityPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/Questions/:id" element={<DisplayQuestions />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Users/:id" element={<UserProfile />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/ToChecoutForm" element={<ToChecoutForm />} />
      <Route path="/CommunityPage" element={<CommunityPage />} />
    </Routes>
  );
};

export default AllRoutes;
