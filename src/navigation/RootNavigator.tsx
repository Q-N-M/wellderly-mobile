import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types/navigation";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthStackNavigator from "./AuthStackNavigator";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <RootStack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{ headerShown: false }}
      />

      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
