import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

const App   = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Navigate replace to="/home"/>}/>
      <Route path="/home" element={<Home/>}>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}
 
export default App;