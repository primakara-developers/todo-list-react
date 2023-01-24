import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const onLogin = (val) => {
    localStorage.setItem("token", val);
    setToken(localStorage.getItem("token"));
    navigate("/");
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  const auth = {
    token,
    onLogin,
    onLogout,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default AuthContext;
