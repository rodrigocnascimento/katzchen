import React, { createContext, useMemo, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AWSCognitoFlow from "./AWSCognitoFlow";

type User = {
  isAuthenticated: boolean;
  logInUser: any;
  logOutUser: any;
  getUserTokens: any;
  managedAuthProviderApplicationFlow: any;
} | null;

const AuthContext = createContext<User>(null);

function AuthProvider({ children }: any) {
  const [isAuthenticated, setLogged] = useState<boolean>(false);

  const managedAuthProviderApplicationFlow = () => {
    return <AWSCognitoFlow />;
  };

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
      managedAuthProviderApplicationFlow,
    }),
    [isAuthenticated]
  );

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
