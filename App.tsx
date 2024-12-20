import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './src/navigation/routes';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style = {{ flex: 1 }}>
        <SafeAreaProvider>
          <AppRoutes/>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
