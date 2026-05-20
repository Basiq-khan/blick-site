import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import CategoryLandingPage from "./pages/CategoryLandingPage";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import FooterPage from "./pages/FooterPage";
import SignInPage from "./pages/SignInPage";
import ContactUsPage from "./pages/ContactUsPage";
import StoresPage from "./pages/StoresPage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<ListingPage />} />
            <Route path="category/:categoryName" element={<CategoryLandingPage />} />
            <Route path="product/:productId" element={<ProductDetail />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="stores" element={<StoresPage />} />
            <Route path="pages/sign-in" element={<SignInPage />} />
            <Route path="pages/contact-us" element={<ContactUsPage />} />
            <Route path="pages/:pageId" element={<FooterPage />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
