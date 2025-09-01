import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import HomeScreen from './components/Homescreen.js';
import Categories from './components/Categories.js';
import Checkout from './components/Checkout.js';
import Vegetables from './components/Vegetables.js';
import Payment from './components/Payment.js';
import Item from './components/Item.js';



export default function App() {
const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    if (currentScreen === 'home')
      return <HomeScreen goToCategories={() => setCurrentScreen('categories')} />;

    if (currentScreen === 'categories')
      return <Categories 
      goHome={() => setCurrentScreen('home')} 
      goToVegetables={() => setCurrentScreen('vegetables')}
      />;

    if (currentScreen === 'checkout')
      return <Checkout 
      goToPayment={() => setCurrentScreen('payment')}
      />;

    if (currentScreen === 'vegetables')
      return <Vegetables 
    goBack={() => setCurrentScreen('categories')} 
    goToItem={() => setCurrentScreen('item')}
    />;

    if (currentScreen === 'item') 
      return <Item goBack={() => setCurrentScreen('vegetables')} />;

    if (currentScreen === 'payment')
      return <Payment goBack={() => setCurrentScreen('checkout')} />;
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}


      {currentScreen !== 'home' && currentScreen !== 'vegetables' && currentScreen !== 'payment' && currentScreen !== 'item' &&(
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setCurrentScreen('categories')}>
          <Image source={require('./assets/grid.png')} style={currentScreen === 'categories' ? styles.active : styles.inactive} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCurrentScreen('checkout')}>
          <Image source={require('./assets/shopping-cart.png')} style={currentScreen === 'checkout' ? styles.active : styles.inactive} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('./assets/user.png')} />
        </TouchableOpacity>

      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 100,
    paddingTop: 28,
    borderTopWidth: 0.5,
    borderTopColor: '#9586a8',
  },
  active: {
    borderColor: '#7203FF80',
  },
  inactive: {
    borderColor: '#9586A8',
  },
});
