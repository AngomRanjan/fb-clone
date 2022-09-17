import React from "react";
import Login from "./components/login/Login";
import { useSelector } from 'react-redux';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import "./App.css";

function App() {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            {/*Sidebar*/}
            <div className="app__sidebar"><Sidebar /></div>
            {/*feed*/}
            <div className="app__feed"><Feed /></div>
            {/*widgets*/}
            {/* <div className="app__widgets"><Widgets /></div> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
