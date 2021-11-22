import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/nav';
import Landing from './components/landing/landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
      <Route exact path='/' element={<Landing />}/>
      </Routes>
    </div>
  );
}

export default App;
