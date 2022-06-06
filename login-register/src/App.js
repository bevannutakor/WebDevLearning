import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register'
import {AuthProvider} from './Authentication/Auth';
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
