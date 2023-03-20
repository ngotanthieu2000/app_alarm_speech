import { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
export default function App() {
  const [currentView, setCurrentView] = useState('taxi')
  function handleFocusView(viewName){
    setCurrentView(viewName)
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header handleFocusView={handleFocusView}/>
        <Text>{currentView}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
