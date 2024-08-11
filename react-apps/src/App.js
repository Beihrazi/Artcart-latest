import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import './Styles/Style.css';
import { OrderSummary } from "./components/OrderSummary";
import { Nomatch } from "./components/Nomatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { Admin } from "./components/Admin";
import { UserDetails } from "./components/UserDetails";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./components/auth";

import { RequiredAuth } from "./components/RequiredAuth";
import { Login } from "./components/Login";
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<Nomatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={< FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={< Users />} >
          <Route path="admin" element={<Admin />} />
         </Route>
          <Route path="profile" element={<RequiredAuth><Profile /></RequiredAuth>} />
          <Route path=":UserId" element={<UserDetails />} />
       
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>

  );
}

export default App;
