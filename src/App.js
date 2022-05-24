import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addstudent from './Components/Addstudent';
import Searchstudent from './Components/Searchstudent';

function App() {
  return (
    <div>
      <Addstudent/>
      <Searchstudent/>

    </div>
  );
}

export default App;
