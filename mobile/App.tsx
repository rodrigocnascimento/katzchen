import { StatusBar } from "expo-status-bar";

import Router from "./routes";

import AppProvider from "./context";

export default (): React.ReactElement => (
  <AppProvider>
    <Router />
    <StatusBar style="auto" />
  </AppProvider>
);
