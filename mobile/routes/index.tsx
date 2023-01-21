import React, { useContext } from "react";

import { ContextApi } from "../hooks/AuthContext";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home";
import SettingsScreen from "../screens/Settings";

const TabStack = createBottomTabNavigator();

const TabIcon = {
  Home: {
    icon: (focused: boolean) => (focused ? "home" : "home-outline"),
  },
  Settings: {
    icon: (focused: boolean) => (focused ? "settings" : "settings-outline"),
  },
};

const TabBarIcon = (route: any, { focused, color, size }: any) => {
  const routeIcon = TabIcon[route.name as keyof typeof TabIcon];

  if (!routeIcon) throw new Error("Inexistent Tab Route!");

  const iconName = routeIcon.icon(focused);

  return <Ionicons name={iconName} size={size} color={color} />;
};

const TabScreenOptions = ({ route }: any) => ({
  tabBarIcon: ({ focused, color, size }: any) =>
    TabBarIcon(route, { focused, color, size }),
  tabBarActiveTintColor: "#2f93b8",
  tabBarInactiveTintColor: "#8bb4c4",
});

export default () => {
  const user = useContext(ContextApi);

  console.log(user);

  return (
    <NavigationContainer>
      <TabStack.Navigator screenOptions={TabScreenOptions}>
        <TabStack.Screen name="Home" component={HomeScreen} />
        <TabStack.Screen name="Settings" component={SettingsScreen} />
      </TabStack.Navigator>
    </NavigationContainer>
  );
};
