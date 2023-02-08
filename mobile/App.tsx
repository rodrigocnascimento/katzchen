import { StatusBar } from "expo-status-bar";

import AppProvider from "./ui/context";
import Router from "./ui/routes";

export default (): React.ReactElement => (
  <AppProvider>
    <Router />
    <StatusBar style="auto" />
  </AppProvider>
);
