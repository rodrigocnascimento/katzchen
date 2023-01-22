import React, { useContext } from "react";

import { AuthContext } from "../context/user/auth.context";

import { NavigationContainer } from "@react-navigation/native";

import UserNotLogged from "./userNotLogged.route";
import UserLogged from "./userLogged.route";

export default () => {
  const user: any = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user.isLogged ? <UserLogged /> : <UserNotLogged />}
    </NavigationContainer>
  );
};
