import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Bookings from "./Bookings/Bookings";
import HomePage from "./Homepage/Homepage";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Navbar" element={<Navbar/>}></Route>
          <Route path="/Specials" element={<Specials/>}></Route>
          <Route path="/Testimonials" element={<Testimonials/>}></Route>
          <Route path="/Bookings" element={<Bookings />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Specials />
      <Testimonials />
      <HomePage /> */}
    </div>
  );
}

export default App;
