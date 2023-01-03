import Navbar from './components/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './screens/Home';
import CategoriesScreen from './screens/CategoriesScreen';
import Product from './screens/Product';
import Cart from './screens/Cart';
import Login from './screens/Login';
import Register from './screens/Register';
import Checkout from './screens/Checkout';
import Transfer from './screens/Transfer';
import Profile from './screens/Profile';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/CategoriesScreen" element={<CategoriesScreen />} />

        <Route exact path="/Product" element={<Product />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Cart/Checkout" element={<Checkout />} />
        <Route exact path="/Cart/Checkout/Transfer" element={<Transfer />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
