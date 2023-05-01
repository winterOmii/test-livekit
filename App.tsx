import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



import { AppRegistry } from 'react-native';
import App2 from './src/App';
// import { name as appName } from './app.json';
import { registerGlobals } from '@livekit/react-native';
import { LogLevel, setLogLevel } from 'livekit-client';
import { setJSExceptionHandler } from 'react-native-exception-handler';
setJSExceptionHandler((error) => {
  console.log('error:', error, error.stack);
}, true);

setLogLevel(LogLevel.debug);
registerGlobals();

// AppRegistry.registerComponent(appName, () => App);
export default function App() {
  return (
    <View style={styles.container}>
      <App2 />
      <StatusBar style="auto" />
    </View>
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
