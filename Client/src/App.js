// import Navbar from "./Components/Navbar"
import './App.css';
// import Camera from './Components/Products/Camera';
import Allroutes from './Components/Routes/Allroutes';
import {Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Link to="/login">Sign in</Link>
      <Allroutes/>
    </div>
  );
}

export default App;
