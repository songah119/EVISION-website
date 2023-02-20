import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "pages/login/Login";
import Signup from "pages/sign/Signup";
import MainPage from "pages/Main/MainPage";
import CurriculumPage from "pages/Curriculum/CurriculumPage";
import Post from "pages/board/post";
import PostMain from "pages/Post/PostMain";
import PostView from "pages/Post/PostView";
import PostList from "pages/Post/PostList";
import Header from "components/header";
import Footer from "components/footer";
import ApplyInfo from "pages/Apply/ApplyInfo";
import ApplyForm from "pages/Apply/ApplyForm";
import Admin from "pages/Admin/Admin";
import MyPage from "pages/Modify/MyPage";
import Modify from "pages/Modify/Modify";

const App = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/curriculum" element={<CurriculumPage></CurriculumPage>} />
        <Route path="/postview/:no" element={<PostView></PostView>} />
        <Route path="/postmain" element={<PostMain></PostMain>} />
        <Route path="/postlist" element={<PostList></PostList>} />
        <Route path="/board" element={<Post></Post>} />
        <Route path="/admin" element={<Admin></Admin>} />
        <Route path="/recruit" element={<ApplyInfo></ApplyInfo>} />
        <Route path="/applyform" element={<ApplyForm></ApplyForm>} />
        <Route path="/mypage" element ={<MyPage></MyPage>}/>
        <Route path="/modify" element={<Modify></Modify>}/>


      </Routes>
      <Footer />
    </>
  );
};

export default App;
