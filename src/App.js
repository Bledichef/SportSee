import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error'
import Navigation from './components/Navigation'


//Router
const App = () => {
  return (

    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/error' element={<Error />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
