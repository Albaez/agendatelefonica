import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AgendaTelefonica from './components/AgendaTelefonica';

export default function App() {
  return (
    <View style={styles.container}>
      <AgendaTelefonica/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: 'center',
    justifyContent: 'center',
  },
});