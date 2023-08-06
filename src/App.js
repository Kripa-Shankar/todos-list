import './App.css';
import './MyComponents/style.css';
// import Header from './MyComponents/Header';
// import Box from './MyComponents/Box';
import Loginpage from './MyComponents/Loginpage';
import { Route, Routes } from 'react-router-dom'
import CombinedPage from './MyComponents/CombinedPage';

function App() {

  return (

    <Routes>
      <Route path='/' element={<Loginpage />} />
      <Route path='/CombinedPage' element={<CombinedPage />}></Route>
    </Routes>
    // <Loginpage/> 


  );
}

export default App;
