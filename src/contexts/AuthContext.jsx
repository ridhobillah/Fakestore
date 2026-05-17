import { createContext, useState } from "react";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("access_token"));


  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsLogin(false);
  }

  function login() {
    setIsLogin(localStorage.getItem('access_token'));
  }

  //mendefinisikan context aakan digunakan di pages apa saja
  return (
    <AuthContext.Provider value={{isLogin, logout, login }}>
        {/* kalo ga pake children, perlu memanggil satu satu file pages, kalo mau berlaku di semuanya pake props children */}
        {children}
    </AuthContext.Provider> 
  )
}
