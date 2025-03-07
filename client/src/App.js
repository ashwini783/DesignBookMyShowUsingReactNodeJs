
// import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/index.js';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import './App.css'
import ProtectedRoute from './components/ProtectedRoute.js';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      {/* Home will become children to ProtectedRoute */}
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/> //if we want to protect the Home route
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
