import './App.css';
import Nav from './container/navigation/Components/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './container/home/Components/Home';
import NewProducts from './container/newProducts/Components/NewProducts';
import AllProducts from './container/allProducts/Components/AllProducts';
import Reviews from './container/reviews/Components/Reviews';
import Contact from './container/contact/Components/Contact';
import Faqs from './container/faqs/Components/Faqs';
import Cart from './container/cart/Components/Cart';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-nav">
        <Nav />
      </div>

      <div className='app-content'>
        <Routes>
          {/* Navigation */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/new" element={<NewProducts />} />
          <Route exact path="/all" element={<AllProducts />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faqs" element={<Faqs />} />

          {/* Cart */}
          <Route exact path="/cart" element={<Cart />} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
