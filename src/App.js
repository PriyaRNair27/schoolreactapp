import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addstudent from './Components/Addstudent';
import Searchstudent from './Components/Searchstudent';
import Addfaculties from './Components/Addfaculties';
import Searchfaculties from './Components/Searchfaculties';

function App() {
  return (
    <div>
      <Addstudent/>
      <Searchstudent/>
      <Addfaculties/>
      <Searchfaculties/>

    </div>
  );
}

export default App;
