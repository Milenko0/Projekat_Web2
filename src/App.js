import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import 'process/browser';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route  path="/" element={<Login />} />
                <Route  path="/Register" element={<Register />} />
                <Route  path='/Dashboard' element={<Dashboard />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
