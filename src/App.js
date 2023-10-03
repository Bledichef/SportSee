import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Error from './pages/Error'


import Navigation from './components/Navigation';
import Home from './pages/Home';

import { ModeProvider } from './utils/context';

//Router
const App = () => {
  return (

    <BrowserRouter>
      <Navigation />
      <ModeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/error' element={<Error />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </ModeProvider>
    </BrowserRouter>
  );
};

export default App;