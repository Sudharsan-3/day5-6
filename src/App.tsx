import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Welcome from "./components/Welcomepage";
import AdimPage from "./components/AdimPage"
import UserPage from "./components/UserPage"
import {About} from "./components/About"
import Tasks from "./components/Tasks"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminpage" element ={<AdimPage />} />
        <Route path="/about" element ={<About />} />
        <Route path="/tasks" element ={<Tasks />} />
        <Route  path="/userPage" element={<UserPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
