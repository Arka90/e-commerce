import "./app.styles.scss";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import AddProd from "./routes/addProductForm/addProd.component";
import Cart from "./routes/cart/cart.component";

import HomeComponent from "./components/homeComponent/home.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="addProd" element={<AddProd />} />
        <Route path="cart" element={<Cart />} />
        <Route path="allProds" element={<HomeComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
