import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "./home/Home.jsx"
import Auth from "./auth/Auth.jsx";
import Header from "../components/header/Header.jsx";
import Messages from "./messages/Messages.jsx"

const AllRautes = () => {
  return (
    <>
        <Header/>
        <Routes>
          <Route   path='/' element={<Home/>} />
          <Route   path='/auth' element={<Auth/>} />
          <Route path='/messages' element={<Messages/>} />
          
        </Routes>
    </>
  )
}

export default AllRautes