import {Routes,Route} from "react-router-dom";
import Landig from './pages/Landing';
//import "./App.css";

function App() {

  return (
    <Routes>
        <Route path='/' element={<Landig/>}></Route>
    </Routes>
  )
}

export default App;
