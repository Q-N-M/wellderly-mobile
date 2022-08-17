/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { RootStackParamList } from "./RootStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export * from "./RootStack";
export * from "./RootTab";
export * from "./AuthStack";
