import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

const tabScreenOptions = ({ route }: any) => ({
  headerShown: false,
});

export default function UserNotLogged() {
  return (
    <Navigator screenOptions={tabScreenOptions}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
