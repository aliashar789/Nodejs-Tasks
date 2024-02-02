import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import AddNote from './components/AddNote';

function App() {
  const showAlert = (message, type) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <>
    <NoteState>
      <BrowserRouter>
        <div>
          <Navbar />
          <ToastContainer />
          <div className="container mt-5">
            <Routes>
              <Route path='/' element={<Home showAlert={showAlert} />} exact />
              <Route path='/addnote' element={<AddNote showAlert={showAlert} />} exact />
              <Route path='/profile' element={<Profile />} exact />
              <Route path='/login' element={<Login showAlert={showAlert} />} exact />
              <Route path='/signup' element={<Signup showAlert={showAlert} />} exact />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
