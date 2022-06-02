import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthProvider";

export const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const LoginRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (token) {
    return <Navigate to="/" replace />;
  }
  return children;
};
