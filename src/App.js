import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Center from "./components/Center";
import Read from './components/Read';
import Fullname from './components/Profile/Fullname';
import Address from './components/Profile/Address';
import Nig from './components/Nig';


function App() {
  return ( 
    <>
    <Address/> <Nig/>
  <div>
    <Address/><center>  <Fullname/><Read/> <Center/> </center> 
  </div>
  </>
  )
}

export default App;
