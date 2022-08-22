import './App.css';
import Header from './components/header';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Index from './components/Index';
function App() {
  return (
   <>
        
     <Header></Header>
     <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/index" element={<Index />}></Route>

    </Routes>
     
   </>


  );
}

export default App;
