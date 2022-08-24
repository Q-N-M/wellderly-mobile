import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  OnboardingOne: undefined;
  OnboardingTwo: undefined;
  OnboardingThree: undefined;
  Welcome: undefined;
  PersonalInfo: undefined;
  Medical: undefined;
  Community: undefined;
  UrgerContact: undefined;
  Interest: undefined;
  OnboardingFour: undefined;
  Finish: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>;
