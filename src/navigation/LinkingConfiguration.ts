import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types/navigation';

/**
 * This is used to make the moodtracker screen as the first page that will be opened
 */
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          MoodTracker: {
            screens: {
              MoodTracker: 'one',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
