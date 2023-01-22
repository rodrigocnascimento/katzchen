import { StatusBar } from "expo-status-bar";

import Router from "./routes";

import AppProvider from "./context";

export default () => (
  <AppProvider>
    <Router />
    <StatusBar style="auto" />
  </AppProvider>
);
