import Navbar from './components/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './screens/Home';
import CategoriesScreen from './screens/CategoriesScreen';
import Product from './screens/Product';
import Cart from './screens/Cart';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/CategoriesScreen" element={<CategoriesScreen />} />

        <Route exact path="/Product" element={<Product />} />
        <Route exact path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
