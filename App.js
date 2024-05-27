import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import Gustavo from './SRC/componentes/Gustavo';
import Sara from './SRC/componentes/Sara';

export default function App() {
  return (
    <View style={styles.container}>
      <Gustavo/>
      <Sara/>
      
      <Button
      title="enviar"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67b79e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
