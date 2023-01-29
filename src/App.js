import React, {useContext}  from 'react';
import Home from './pages/home page/Home';
import Login from './pages/login page/Login';
import Single from './pages/single page/Single';
import List from './pages/list page/List';
import New from './pages/new page/New';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { productInputs, userInputs } from './formSource';
import './style/Dark.css';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
        <Route path="/">
            <Route index element={<Login />} />
            <Route path='home' element={<Home  />}  />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="users">
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={userInputs} title="Add New User" buttonText="Send" />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} title="Add New Item" buttonText="Add"/>} />
            </Route>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
