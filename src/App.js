import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addstudent from './Components/Addstudent';
import Searchstudent from './Components/Searchstudent';
import Addfaculties from './Components/Addfaculties';
import Searchfaculties from './Components/Searchfaculties';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewstudent from './Components/Viewstudent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Addstudent/>}/>
        <Route path="/addfacu" exact element={<Addfaculties/>}/>
        <Route path="/search" exact element={<Searchstudent/>}/>
        <Route path="/searchfacu" exact element={<Searchfaculties/>}/>
        <Route path="/viewstud" exact element={<Viewstudent/>}/>
        <Route path="/viewfacu" exact element/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
