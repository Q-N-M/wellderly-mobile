/**
 * This file is used to export root stack and root tab in order to be able to be imported.
 */
import { RootStackParamList } from "./RootStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export * from "./RootStack";
export * from "./RootTab";
