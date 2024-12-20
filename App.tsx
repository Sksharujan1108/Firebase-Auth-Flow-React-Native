import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './src/navigation/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <AppRoutes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
