import Navbar from './components/Navbar';
import Home from './components/Home';
import Write from './components/Write';
import PageDetails from './components/PageDetails';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Typewriter from './components/Typewriter';
import useFetch from './hooks/useFetch';
require('dotenv').config()

function App() {
  const { error: quoteError, isPending: isQuotePending, data: quote} = useFetch(process.env.BACKEND_URI + '/api/quotes/random')
  const { error, isPending, data } = useFetch(process.env.BACKEND_URI + '/api/pages')

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar data={data} error={error} isPending={isPending} />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home data={data} error={error} isPending={isPending} />}></Route>
            <Route path="/write" element={<Write />}></Route>
            <Route path="/pages/:id" element={<PageDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        {!quoteError && !isQuotePending && <Typewriter text={quote[0]['quote']}/>}
      </div>
    </BrowserRouter>
  );
}

export default App;
