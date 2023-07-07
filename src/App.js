import './App.css';
import NavbarBoot from './components/NavbarBoot';
import BlogList from './components/BlogList';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
function App() {
  return (
    <div className="App">
      <NavbarBoot/>
      <h1 className="heading">Current Affairs Which Make History</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<BlogList />}></Route>
          <Route exact path="/AboutPage" element={<AboutPage />}></Route>
          <Route exact path="/ContactPage" element={<ContactPage />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;


     // <BrowserRouter>
      // <Routes>
      //     <Route className="custom-nav-link" exact path="/Home" element={<Home />} />
      //     <Route exact path="/About" element={<About />} />   
      // </Routes>
      // </BrowserRouter>