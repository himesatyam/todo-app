import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Login from './components/login';

function App() {
  const [flag, setFlag] = useState(false);

  return (
    <BrowserRouter>
      {
        !flag ? <Login setLogin={setFlag}></Login>:
        <Routes>
          <Route path="/" element={<Header></Header>}></Route>
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
