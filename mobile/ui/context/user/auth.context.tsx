import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useMemo, useState } from "react";

type User = {
  isAuthenticated: boolean;
  logInUser: any;
  logOutUser: any;
  getUserTokens: any;
} | null;

const AuthContext = createContext<User>(null);

function AuthProvider({ children }: any) {
  const [isAuthenticated, setLogged] = useState<boolean>(false);

  const logInUser = async (exchangeToken: any) => {
    setLogged(true);

    await AsyncStorage.setItem("@token", JSON.stringify({ ...exchangeToken }));
  };

  const getUserTokens = async () => {
    const userToken = await AsyncStorage.getItem("@token");

    return JSON.parse(userToken || "{}");
  };

  const logOutUser = async () => {
    setLogged(false);

    await AsyncStorage.removeItem("@token");
  };

  const user = useMemo(
    () => ({
      isAuthenticated,
      logInUser,
      logOutUser,
      getUserTokens,
    }),
    [isAuthenticated]
  );

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
