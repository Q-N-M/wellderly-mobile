import { ScrollView, StyleSheet } from 'react-native';
import OnBoarding from '../components/OnBoarding';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';

const coffee = require('../assets/images/coffee.png');

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    return (
        <ScrollView>
        <View style={styles.container}>
      {/*<Text style={styles.title}>Tab One</Text>Text*/}
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
      {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
        <OnBoarding
          title={"hehe"}
          subtitle={"hehe"}
          img={coffee}/>
        </View>
</ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
