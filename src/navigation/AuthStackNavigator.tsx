import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotFoundScreen from "../screens/NotFoundScreen";
import { AuthStackParamList } from "../types/navigation";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import OnboardingOneScreen from "../screens/auth/OnboardingOneScreen";
import OnboardingTwoScreen from "../screens/auth/OnboardingTwoScreen";
import OnboardingThreeScreen from "../screens/auth/OnboardingThreeScreen";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="OnboardingOne"
        component={OnboardingOneScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="OnboardingTwo"
        component={OnboardingTwoScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="OnboardingThree"
        component={OnboardingThreeScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
