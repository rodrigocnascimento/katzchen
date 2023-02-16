import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import Toast from "react-native-toast-message";

import UserLogged from "./userLogged.route";
import UserNotLogged from "./userNotLogged.route";
import { AuthContext } from "../context/user/auth.context";
import { ToastMessageConfig } from "../services/ToastMessageConfig";

export default () => {
  const user: any = useContext(AuthContext);

  return (
    <NavigationContainer>
      <UserLogged />
      {/* {user.isAuthenticated ? <UserLogged /> : <UserNotLogged />} */}
      <Toast config={ToastMessageConfig} />
    </NavigationContainer>
  );
};
