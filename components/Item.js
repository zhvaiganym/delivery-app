import { View, SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';



export default function Item({ goBack }) {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={ goBack}>
      <ImageBackground source={require('../assets/green.png')} style={{width: '100%', height: 358 }}>

      <View style={styles.container}>
        <Text style={{fontSize: 28, lineHeight: 41, letterSpacing: 0.41, fontFamily: 'SF Pro Display', fontWeight: '700',  marginBottom: 16, marginLeft: 20, marginTop: 30, color: '#2d0c57'}}>Boston Lettuce</Text>
        <Text style={{width: 150, height: 40, fontSize: 30, fontFamily: 'SF Pro Text', fontWeight: '700', color: '#2d0c57', lineHeight: 22, letterSpacing: -0.41, marginLeft: 20}}>1.10 <Text style={{fontSize: 22, fontFamily: 'SF Pro Text', fontWeight: 400, color: '#9586a8', lineHeight: 22, letterSpacing: -0.41 }}>€ / piece</Text> </Text>
        <Text style={{fontSize: 17, fontFamily: 'SF Pro Text', fontWeight: '600', color: '#06BE77', lineHeight: 25, letterSpacing: -0.41, marginLeft: 20, marginBottom: 23 }}>~ 150 gr / piece</Text>
        <Text style={{fontSize: 23, lineHeight: 41, letterSpacing: 0.41, fontFamily: 'SF Pro Display', fontWeight: '700',  marginBottom: 13, marginLeft: 20, color: '#2d0c57'}}>Spain</Text>
        <Text style={{width: 350, height: 194, fontSize: 17, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: 25, letterSpacing: -0.41, color: '#9586A8', marginLeft: 20}}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
        
        <View style={{flexDirection: 'row', gap: 15, marginLeft: 20, marginTop: 20}}>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
            <Image source={require('../assets/heart.png')} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn2}>
            <Image source={require('../assets/cart.png')} />
            <Text style={{fontSize: 15, color: '#ffffff', fontFamily: 'SF Pro Text', fontWeight: '600', lineHeight: 18, letterSpacing: -0.01}}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>

      </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {  
    width: '100%',
    height: 615,
    backgroundColor: '#F6F5F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    border: 1,
    marginTop: 250,
    flexDirection: 'column',
  }, 
  btn: {
    width: 78,
    height: 56,
    backgroundColor: '#ffffff', 
    borderWidth: 1,
    borderColor: '#d9d0e3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    width: 250,
    height: 56,
    backgroundColor: '#0BCE83', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16
  }
});