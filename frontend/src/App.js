import './styles/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className='background'>
      <BrowserRouter>
        <Routes>
          <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
