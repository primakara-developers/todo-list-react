import { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "sweetalert2/dist/sweetalert2.min.css";
import { AuthProvider } from "./AuthProvider";
import { ProtectedRoute, ProtectedLogin } from "./ProtectedRoute";

// Layout import
const Layout = lazy(() => import("./layout/Layout"));

// Components import
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const About = lazy(() => import("./pages/about"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <ProtectedLogin>
                <Suspense fallback={<></>}>
                  <Login />
                </Suspense>
              </ProtectedLogin>
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
              <ProtectedRoute>
                <Suspense fallback={<></>}>
                  <Layout />
                </Suspense>
              </ProtectedRoute>
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
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
