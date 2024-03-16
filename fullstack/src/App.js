import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adduser from './users/Adduser';
import EditUser from './users/EditUser'; // Corrected import
import Viewuser from './users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        
          <Route exact path="/adduser" element={<Adduser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<Viewuser />} /> 
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
