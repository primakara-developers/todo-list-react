import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    //TODO: PASS `RESPONSE.TOKEN`FROM LOGIN PAGE (LOGIN FUNC) TO THIS FUNCTION
    localStorage.setItem("token", "sdhdhsdshdsdsdsd");
    const token = localStorage.getItem("token");
    setToken(token);
    console.log(token);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  const auth = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default AuthContext;
