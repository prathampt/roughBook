import Navbar from './components/Navbar';
import Home from './components/Home';
import Write from './components/Write';
import PageDetails from './components/PageDetails';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Typewriter from './hooks/Typewriter';

function App() {
  const quote = "What is realization? The sudden change of something 'is' to something 'was'...";

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/write" element={<Write />}></Route>
            <Route path="/pages/:id" element={<PageDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Typewriter text={quote}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
