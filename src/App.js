
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<><Home /></>} />
          <Route path='/skills' element={<><Skills /></>} />
          <Route path='/projects' element={<><Projects /></>} />
          <Route path='/contact' element={<><Contact /></>} />
          {/* <Route path='/about' element={<><About /></>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
