import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RightNavBar from "../MainComponents/rightNavBar/rightNavBar";
import DownBar from "../MainComponents/DownBar/DownBar";
import Error from "../CommonToAll/Error";
import Home from "../MainComponents/Home/Home";
import Courses from "../MainComponents/Courses/Courses";
import Competitive from "../MainComponents/Competitive/Competitive";
import Blogs from "../MainComponents/Blogs/Blogs";
import LogIn from "../MainComponents/rightNavBar/auth/LogIn";
import SignUp from "../MainComponents/rightNavBar/auth/signUp";
import ProfilePage from "../MainComponents/rightNavBar/profilePage/profilePage";
import Upload from "../MainComponents/rightNavBar/uploadPage/upload";
import OtpGenerator from "../MainComponents/rightNavBar/Generator/generator";

export default function Main() {
  const logOut = () => {
    localStorage.removeItem("bhaagB**");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiryDatelodu");
  };

  const setAutoLogOut = (remainingMilliSec) => {
    setTimeout(() => {
      logOut();
      window.location.replace("/");
    }, remainingMilliSec);
  };

  useEffect(() => {
    const expiryDate = localStorage.getItem("expiryDatelodu");
    if (!window.$IsAuth || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logOut();
      return;
    }
    const remainingMilliSec = new Date(expiryDate).getTime() - new Date().getTime();
    setAutoLogOut(remainingMilliSec);
  }, []); // If there's no dependency that dictates when this effect should re-run, you can leave the dependency array empty.

  return (
    <>
      <DownBar />
      <RightNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/competitive" element={<Competitive />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/user/upload" element={<Upload />} />
        <Route path="/user/profilePage" element={<ProfilePage />} />
        <Route path="/user/login" element={window.$IsAuth ? <Navigate to="/" replace /> : <LogIn previousLocation="/user/profilePage" />} />
        <Route path="/user/signup" element={window.$IsAuth ? <Navigate to="/" replace /> : <SignUp previousLocation="/user/profilePage" />} />
        {localStorage.getItem("userId") === '60fa7604e9c10e00041d8396' && (
          <Route path="/user/generator" element={<OtpGenerator />} />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
