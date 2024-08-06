import {Routes,Route} from "react-router-dom";
import Landig from './pages/Landing';

function App() {

  return (
    <Routes>
        <Route path='/' element={<Landig/>}></Route>
    </Routes>
  )
}

export default App;
