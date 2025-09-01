import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';


export default function Payment({ goBack }) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6F5F5'}}>
     <TouchableOpacity onPress={ goBack } style={{backgroundColor: '#F6F5F5', width: '100%', height: 95, flexDirection: 'row'}}>
       <Image source={require('../assets/vector.png')} style={{ width: 8, height: 12, marginTop: 62, marginLeft: 21 }} />
     </TouchableOpacity>

     <Text style={{fontSize: 30, lineHeight: 41, letterSpacing: 0.41, fontFamily: 'SF Pro Display', fontWeight: '700', color: '#2d0c57', marginLeft: 20, marginBottom: 20}}>Credit / Debit card</Text>
     <Image source={require('../assets/visa.png')} style={{width: 410, height: 265}}/>
     <Image source={require('../assets/photo_icon.png')} style={{alignSelf: 'center'}} />

     <View style={{flexDirection: 'column', marginLeft: 20}}>
      <Text style={{width: 88, height: 22, fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: 22, letterSpacing: -0.41, color: '#9586A8', marginLeft: 14}}>Name on card</Text>
      <TextInput style={styles.input} placeholder="Alexandra Smith"></TextInput>
     </View>

     <View style={{flexDirection: 'column', marginLeft: 20, marginTop: 20}}>
      <Text style={{width: 88, height: 22, fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: 22, letterSpacing: -0.41, color: '#9586A8', marginLeft: 14}}>Card number</Text>
     <View style={styles.inputContainer}>
      <TextInput style={styles.input2} placeholder="4747  4747  4747  4747" />
      <Image source={require('../assets/mc_symbol.png')} />
     </View>
    </View>

   <View style={{flexDirection: 'row'}}>
    <View style={{flexDirection: 'column', marginLeft: 20, marginTop: 23}}>
      <Text style={{width: 88, height: 22, fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: 22, letterSpacing: -0.41, color: '#9586A8', marginLeft: 14}}>Expiry date</Text>
      <TextInput style={styles.input3} placeholder="07/21"></TextInput>
    </View>

    <View style={{flexDirection: 'column', marginLeft: 20, marginTop: 23}}>
      <Text style={{width: 88, height: 22, fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '400', lineHeight: 22, letterSpacing: -0.41, color: '#9586A8', marginLeft: 14}}>CVC</Text>
      <View style={styles.inputContainer2}>
      <TextInput style={styles.input2} placeholder="474" />
      <Image source={require('../assets/hint.png')} />
     </View>
    </View>
  </View>


  <TouchableOpacity activeOpacity={0.5} style={styles.btn2}>
    <Text style={{fontSize: 15, color: '#ffffff', fontFamily: 'SF Pro Text', fontWeight: '600', lineHeight: 18, letterSpacing: -0.01}}>USE THIS CARD</Text>
  </TouchableOpacity>
       





    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    width: 374,
    height: 48,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#D9D0E3',
    borderRadius: 8,
    fontSize: 16,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    fontFamily: 'SF Pro Text',
    fontWeight: '400',
    color: '#2D0C57',
    paddingLeft: 13,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 374,
    height: 48,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#D9D0E3',
    borderRadius: 8,
    paddingRight: 13
  },
  input2: {
    flex: 1,
    fontSize: 16,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    fontFamily: 'SF Pro Text',
    fontWeight: '400',
    color: '#2D0C57',
    paddingLeft: 13
  },
  input3: {
    flex: 1,
    width: 176,
    height: 48,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#D9D0E3',
    borderRadius: 8,
    fontSize: 16,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    fontFamily: 'SF Pro Text',
    fontWeight: '400',
    color: '#2D0C57',
    paddingLeft: 13,
  },
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 176,
    height: 48,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#D9D0E3',
    borderRadius: 8,
    paddingRight: 13
  },
  btn2: {
    width: 374,
    height: 56,
    backgroundColor: '#0BCE83', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    marginTop: 55,
    marginHorizontal: 20
  }
});