import { Navigate, Outlet } from "react-router-dom";

function useAuth() {
  return localStorage.getItem("token");
}

export default function ProtectedRoute() {
  const isAuth = useAuth();
  if (isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
