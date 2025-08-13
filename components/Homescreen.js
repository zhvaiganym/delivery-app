import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Categories from './Categories';
import { Button } from 'react-native';



export default function Homescreen() {
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#a259ff'}}>
      <Image source={require('../assets/logo.png')} style={{ width: 85, height: 85, marginTop: 63, marginLeft: 20 }} />
      
      <View style={styles.box}>
        <Image source={require('../assets/icon.png')} style={{ width: 84, height: 84, marginTop: 50 }} />
        <Text style={{ width: 250, height: 80, fontFamily: 'SF Pro Display', fontWeight: '700', fontSize: 26, color: '#2d0c57', marginTop: 24, textAlign: 'center' }}>Non-Contact Deliveries</Text>
        <Text style={{ width: 325, height: 79, fnpxontFamily: 'SF Pro Text', fontWeight: '400', fontSize: 15, lineHeight: 22, letterSpacing: -0.41, color: '#9586a8', marginTop: 10, textAlign: 'center' }}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.</Text>
        
        <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
          <Text style={{ fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '600', color: '#ffffff' }}>ORDER NOW</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <Text style={{ fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '600', color: '#9586a8', marginTop: 20 }}>DISMISS</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  box: {  
    width: '100%',
    height: 584,
    marginTop: 160,
    backgroundColor: '#f6f5f5',
    borderRadius: 16,
    flexDirection: 'column',
    alignItems: 'center'
  },

  btn: {
    width: 350,
    height: 50,
    backgroundColor: '#0bce83', 
    borderRadius: 8,
    marginTop: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },  

});