import './App.css';
// import image from './images/logo.jpg'
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Home from './components/Home'
import AdminHome from './components/AdminHome'
import ContestHome from './components/ContestHome'
import CreatePuzzle from './components/CreatePuzzle'
import ViewPuzzle from './components/ViewPuzzle'
import StartPool from './components/StartPool'

function App() {
  return (
    <div>
      {/* <Navbar1 /> */}
      <Navbar2 />
      {/* <Home /> */}
      {/* <AdminHome /> */}
      {/* <ContestHome /> */}
      {/* <CreatePuzzle /> */}
      {/* <ViewPuzzle /> */}
      <StartPool />
    </div>
  );
}

export default App;
