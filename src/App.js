import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home";
import { getAccessToken } from "./utils/LocalStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./pages/Signin/Signin";

const isAuthenticated = !!getAccessToken();

const PrivateRoute = ({ element: Element, ...rest }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Element {...rest} />;
};

function App() {
  return (
    <div>
      <ToastContainer position="bottom-center" theme="colored" />
      <Router>
        <Routes>
          <Route path="/login" element={<Signin />} />

          <Route path="*" element={<PrivateRoute element={Home} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
