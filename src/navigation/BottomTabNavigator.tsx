import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import { RootTabParamList, RootTabScreenProps } from "../types/navigation/";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ActivitiesScreen from "../screens/activities/ActivitiesScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
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
          tabBarIcon: ({ color }) => <HomeIcon name="" color={color} />,
        }}
        // options={({ navigation }: RootTabScreenProps<"MoodTrackerScreen">) => ({
        //   title: "Home",
        //   tabBarIcon: ({ color }) => <HomeIcon name="home" color={color} />,
        //   headerRight: () => (
        //     <Pressable
        //       onPress={() => navigation.navigate("Modal")}
        //       style={({ pressed }) => ({
        //         opacity: pressed ? 0.5 : 1,
        //       })}
        //     >
        //       <FontAwesome
        //         name="info-circle"
        //         size={25}
        //         color={Colors[colorScheme].text}
        //         style={{ marginRight: 15 }}
        //       />
        //     </Pressable>
        //   ),
        // })}
      />
      {/* <BottomTab.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={{
          title: "Activities",
          tabBarIcon: ({ color }) => (
            <ActivityIcon name="clipboard" color={color} />
          ),
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

function HomeIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

function ActivityIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}
