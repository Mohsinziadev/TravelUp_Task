import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../@store/index";
import App from "../App";
import ProductDetails from "../@modules/ProductDetails/ProductDetails";
import Product from "../@modules/ProductScreen/Product";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Product />} />
            <Route path="productDetails" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
