import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const {LocalStoreModule} = NativeModules;
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          LocalStoreModule.saveData('user-type', 'admin');
        }}>
        <Text style={styles.text}>Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          LocalStoreModule.saveData('user-type', 'user');
        }}>
        <Text style={styles.text}>User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          LocalStoreModule.saveData('user-type', 'default');
        }}>
        <Text style={styles.text}>Default</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          LocalStoreModule.showData('user-type').then((type: any) => {
            console.log('====================================');
            console.log(type);
            console.log('====================================');
          });
        }}>
        <Text style={styles.text}>Log Type</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#00ffaa',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
});

export default App;
