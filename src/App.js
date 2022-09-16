import React from "react";
import Login from "./components/login/Login";
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="app__body">
            hi welcome
          </div>
        </>
      )}
    </div>
  );
}

export default App;
