import {Routes,Route} from "react-router-dom";
import Landig from './pages/Landing';
import Admin from "./pages/Admin";
import AdminCreateProduct from "./pages/AdminCreateProduct";
//import "./App.css";

function App() {

  return (
    <Routes>
        <Route path='/' element={<Landig/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/admin/create-product' element={<AdminCreateProduct/>}></Route>
    </Routes>
  )
}

export default App;
