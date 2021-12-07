import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
