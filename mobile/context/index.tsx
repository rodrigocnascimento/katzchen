import React from "react";
import { AuthProvider } from "./user/auth.context";

const AppProvider = ({ children }: any) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
