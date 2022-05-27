import { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import "sweetalert2/dist/sweetalert2.min.css";

// Layout import
const Layout = lazy(() => import("./layout/Layout"));

// Components import
const About = lazy(() => import("./pages/about"));
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));

function checkLogin() {
  return localStorage.getItem("token");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            !checkLogin() ? (
              <Suspense fallback={<></>}>
                <Login />
              </Suspense>
            ) : (
              <Navigate to="/" />
            )
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Suspense fallback={<></>}>
              <Register />
            </Suspense>
          }
        ></Route>
        <Route
          path="/"
          element={
            checkLogin() ? (
              <Suspense fallback={<></>}>
                <Layout />
              </Suspense>
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <Home />
              </Suspense>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <Suspense fallback={<></>}>
                <About />
              </Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
