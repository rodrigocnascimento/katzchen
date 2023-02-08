import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";

import UserLogged from "./userLogged.route";
import UserNotLogged from "./userNotLogged.route";
import { AuthContext } from "../context/user/auth.context";

export default () => {
  const user: any = useContext(AuthContext);

  return (
    <NavigationContainer>
      <UserLogged />
      {/* {user.isAuthenticated ? <UserLogged /> : <UserNotLogged />} */}
    </NavigationContainer>
  );
};
