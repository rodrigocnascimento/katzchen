import React, { createContext, useMemo } from "react";

type User = {
  isLogged: boolean;
  login: any;
} | null;

const AuthContext = createContext<User>(null);

function AuthProvider({ children }: any) {
  const login = () => {
    console.log("Login User");
  };

  const user = useMemo(() => ({ login, isLogged: false }), []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
