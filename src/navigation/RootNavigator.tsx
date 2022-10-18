import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotFoundScreen from "../screens/NotFoundScreen";
import MoodTrackerScreen from "../screens/MoodTrackerScreen";
import SubmittedScreen from "../screens/SubmittedScreen";
import { RootStackParamList } from "../types/navigation";
import BottomTabNavigator from "./BottomTabNavigator";

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
        name="MoodTracker"
        component={MoodTrackerScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Submitted"
        component={SubmittedScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}
