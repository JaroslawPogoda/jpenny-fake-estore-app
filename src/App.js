

import "./App.css";

import {BrowserRouter} from 'react-router-dom';
import Layout from "./components/Layout";
import LoginAuth0Button from "./components/Login/LoginAuth0Button/LoginAuth0Button";
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        
        <Layout/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
