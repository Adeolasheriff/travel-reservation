import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/layout';
import About from './pages/about';
import Blog from './pages/blog';
import Home from './pages/home';
import Pricing from './pages/pricing';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Movies from './pages/movies';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='blog' element={<Blog />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='login' element={<Login />} />


          </Route>
        </Routes>




      </BrowserRouter>

    </div>
  )
}

export default App;