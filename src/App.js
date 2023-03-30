import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Email from './pages/Email';
import Navbar from './Front/Navbar';
import Profiles from './pages/Profiles';
import Layout from './Front/Layout';
import Details from './pages/Details';
import Compose from './pages/Compose';
import Errors from './pages/Errors';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/email' element={<Email />} />
        <Route exact path='/profile' element={<Profiles />} />
        <Route exact path='/layout' element={<Layout />} />
        <Route exact path='/details/:id' element={<Details />} />
        <Route exact path='/compose' element={<Compose />} />
        <Route  path='/*' element={<Errors />} />

      </Routes>
    </div>
  );
}

export default App;
