import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import { Route,Routes } from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import { useSelector } from 'react-redux';
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import About from "./components/About";
import Books from "./components/Book/Books";
import BookDetail from "./components/Book/BookDetail";

function App() {

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  return (
   <React.Fragment>
    <header>
    <Header/>
   </header>
   <main>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path = "/"      element={<Home/>}  exact />
      <Route path = "/add"   element={<AddBook/>}  exact />
      <Route path = "/books" element={<Books/>}  exact />
      <Route path = "/about" element={<About/>}  exact />
      <Route path = "/books/:id" element={<BookDetail/>} exact />
      {isLoggedIn && <Route path='/user' element={<Welcome/>}/> } {" "}
    </Routes>
   </main>
   </React.Fragment>
  );
}

export default App;
