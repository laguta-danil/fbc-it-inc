import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo_-_iSeeWhere_color_FINAL_1.svg';
import { Button } from 'react-native-paper';


export default function App() {
  return (
      <>
    <View style={styles.container}>
      <img src={Logo} />
      <Text>Open up Asdfdstart working on your app!</Text>
      <Button> Login</Button>
      <StatusBar style="auto" />

    </View>

      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
