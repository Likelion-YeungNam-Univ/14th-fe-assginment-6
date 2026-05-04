import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import MyPage from './mypage';
import NotFound from './NotFound';
import Navbar from './Navbar';
import Layout from './Layout';



function App() {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);

  return (    
    <BrowserRouter>
      <Routes>
        <Route element={<Layout userId={userId} setUserId={setUserId}/>}>
          <Route path="/" element={<Home userId={userId} setUserId={setUserId} />} />  
            <Route path="mypage" element={<MyPage userId={userId} setUserId={setUserId}/>} />
        </Route>   

        <Route path="/login" element={<Login userId={userId} 
          setUserId={setUserId} 
          password={password} 
          setPassword={setPassword}/>} 
        />  
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
