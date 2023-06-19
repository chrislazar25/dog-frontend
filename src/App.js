
import './index.css';
//import { useState } from 'react';

import Navigation from './components/Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogIn from './pages/LogIn';
import SearchDogs from './pages/SearchDogs';

function App() {
    return(
      <BrowserRouter>
        <Navigation >
          <Routes>
            <Route path='/' element={<LogIn/>}/>
            <Route path='/search' element={<SearchDogs/>}/>
          </Routes>
        </Navigation>
      </BrowserRouter>
      
    );
}

export default App;
