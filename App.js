import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import HomeScreen from './components/Homescreen.js';
import Categories from './components/Categories.js';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    if (currentScreen === 'home') return <HomeScreen />;
    if (currentScreen === 'categories') return <Categories />;
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}


      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setCurrentScreen('home')}>
          <Image source={require('./assets/grid.png')} style={currentScreen === 'home' ? styles.active : styles.inactive} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCurrentScreen('categories')}>
          <Text style={currentScreen === 'categories' ? styles.active : styles.inactive}>Категория</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 114,
    paddingTop: 28,
    borderTopWidth: 0.5,
    borderTopColor: '#9586a8',
  },
  active: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inactive: {
    fontSize: 16,
    color: 'gray',
  },
});
