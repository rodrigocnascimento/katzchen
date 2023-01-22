import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import SettingsScreen from "../screens/Settings";

const { Navigator, Screen } = createBottomTabNavigator();

const TabIcon = {
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

const tabScreenOptions = ({ route }: any) => ({
  tabBarIcon: ({ focused, color, size }: any) =>
    TabBarIcon(route, { focused, color, size }),
  tabBarActiveTintColor: "#2f93b8",
  tabBarInactiveTintColor: "#8bb4c4",
  headerShown: false,
});

export default function UserLogged() {
  return (
    <Navigator screenOptions={tabScreenOptions}>
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
}
