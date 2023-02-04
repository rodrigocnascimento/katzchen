import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import SettingsScreen from "../screens/Settings";
import MyPetsScreen from "../screens/MyPets";
import { RouteProp, ParamListBase } from "@react-navigation/native";

const { Navigator, Screen } = createBottomTabNavigator();

const TabIcon = {
  Settings: {
    icon: "cog",
  },
  MyPets: {
    icon: "paw",
  },
};

const TabBarIcon = (
  route: RouteProp<ParamListBase, string>,
  { color, size }: any
) => {
  const routeIcon = TabIcon[route.name as keyof typeof TabIcon];

  if (!routeIcon) throw new Error("Inexistent Tab Route!");

  return <FontAwesome5 name={routeIcon.icon} size={size} color={color} />;
};

const tabScreenOptions = ({ route }: any) => ({
  tabBarIcon: ({ color, size }: any) => TabBarIcon(route, { color, size }),
  tabBarActiveTintColor: "#2f93b8",
  tabBarInactiveTintColor: "#8bb4c4",
  headerShown: false,
});

export default function UserLogged() {
  return (
    <Navigator screenOptions={tabScreenOptions}>
      <Screen name="MyPets" component={MyPetsScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
}
