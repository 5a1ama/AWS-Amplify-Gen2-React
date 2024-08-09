import {Routes,Route} from "react-router-dom";
import Landig from './pages/Landing';
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
//import "./App.css";

function App() {

  return (
    <Routes>
        <Route path='/' element={<Landig/>}></Route>
        <Route path='/shop/men' element={<Shop/>}></Route>
        <Route path='/shop/women' element={<Shop/>}></Route>
        <Route path='/shop/kids' element={<Shop/>}></Route>
        <Route path='/shop/:department/:categoryTitle' element={<Shop/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/admin/create-category' element={<Admin/>}></Route>
        <Route path='/admin/create-product' element={<Admin/>}></Route>
    </Routes>
  )
}

export default App;
