import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { RootTabParamList } from "../types/navigation/";
import { FontAwesome } from "@expo/vector-icons";
import MoodTrackerScreen from "../screens/MoodTrackerScreen";
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MoodTracker"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="MoodTracker"
        component={MoodTrackerScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function HomeIcon(props: {
  color: string;
}) {
  return <FontAwesome size={24} {...props} />;
}
