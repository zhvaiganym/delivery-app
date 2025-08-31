import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';


export default function Checkout() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F6F5F5'}}>
     <View style={{backgroundColor: '#ffffff', width: '100%', height: 95, boxShadow: '0px 0.5px 4px rgba(0, 0, 0, 0.2)', flexDirection: 'row'}}>
       <Image source={require('../assets/vector.png')} style={{ width: 8, height: 12, marginTop: 62, marginLeft: 21 }} />
       <Text style={{fontSize: 17, lineHeight: 22, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '600',  marginBottom: 16, marginHorizontal: 129, marginTop: 57, color: '#2d0c57'}}>Checkout</Text>
     </View>


     <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 24 }}>
        <Text style={{fontSize: 22, lineHeight: 22, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '700', color: '#2d0c57'}}>Payment method</Text>
        <TouchableOpacity activeOpacity={0.5}>
         <Text style={{fontSize: 15, color: '#7203FF', fontFamily: 'SF Pro Text', fontWeight: '600', lineHeight: 18, letterSpacing: -0.01}}>CHANGE</Text>
        </TouchableOpacity>
     </View>

     <View style={{width: '100%', height: 56, flexDirection: 'row', alignItems: 'center', gap: 25, paddingLeft: 20, marginTop: 16}}>
        <Image source={require('../assets/credit-card.png')} style={{ width: 24, height: 24 }} />
        <Text style={{fontSize: 17, lineHeight: 25, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '400', color: '#00000099'}}>**** **** **** 4747</Text>
     </View>


     <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 24 }}>
        <Text style={{fontSize: 22, lineHeight: 22, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '700', color: '#2d0c57'}}>Delivery address</Text>
        <TouchableOpacity activeOpacity={0.5}>
         <Text style={{fontSize: 15, color: '#7203FF', fontFamily: 'SF Pro Text', fontWeight: '600', lineHeight: 18, letterSpacing: -0.01}}>CHANGE</Text>
        </TouchableOpacity>
     </View>

     <View style={{width: '100%', height: 160, flexDirection: 'row', gap: 25, paddingLeft: 20, paddingTop: 16, marginTop: 16}}>
        <Image source={require('../assets/home.png')} style={{ width: 24, height: 24 }} />
        <View>
        <Text style={{fontSize: 17, lineHeight: 25, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '400', color: '#00000099'}}>Alexandra Smith</Text>
        <Text style={{fontSize: 17, lineHeight: 25, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '400', color: '#00000099'}}>Cesu 31 k-2 5.st, SIA Chili</Text>
        <Text style={{fontSize: 17, lineHeight: 25, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '400', color: '#00000099'}}>Riga</Text>
        <Text style={{fontSize: 17, lineHeight: 25, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '400', color: '#00000099'}}>LV–1012</Text>
        <Text style={{fontSize: 17, lineHeight: 25, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '400', color: '#00000099'}}>Latvia</Text>
        </View>
     </View>


     <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 24 }}>
        <Text style={{fontSize: 22, lineHeight: 22, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '700', color: '#2d0c57'}}>Delivery options</Text>
        <TouchableOpacity activeOpacity={0.5}>
         <Text style={{fontSize: 15, color: '#7203FF', fontFamily: 'SF Pro Text', fontWeight: '600', lineHeight: 18, letterSpacing: -0.01}}>CHANGE</Text>
        </TouchableOpacity>
     </View>

     <View style={{width: '100%', height: 56, flexDirection: 'row', alignItems: 'center', gap: 25, paddingLeft: 20, marginTop: 16}}>
        <Image source={require('../assets/walking.png')} style={{ width: 24, height: 24 }} />
        <Text style={{fontSize: 17, lineHeight: 25, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '400', color: '#00000099'}}>I’ll pick it up myself</Text>
     </View>

     <View style={{width: '100%', height: 56, flexDirection: 'row', alignItems: 'center', gap: 25, paddingLeft: 20, marginTop: 8}}>
        <Image source={require('../assets/bike.png')} style={{ width: 24, height: 24 }} />
        <Text style={{fontSize: 17, lineHeight: 25, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '400', color: '#00000099'}}>By courier</Text>
     </View>

     <View style={{width: '100%', height: 56, flexDirection: 'row', alignItems: 'center', gap: 25, paddingLeft: 20, marginTop: 8}}>
        <Image source={require('../assets/drone.png')} style={{ width: 24, height: 24 }} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 300, alignItems: 'center'}}>
        <Text style={{fontSize: 17, lineHeight: 25, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '400', color: '#7203FF'}}>By Drone</Text>
        <Image source={require('../assets/check.png')} style={{ width: 24, height: 24 }} />
        </View>
     </View>

     <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: 24 }}>
        <Text style={{fontSize: 22, lineHeight: 22, letterSpacing: -0.41, fontFamily: 'SF Pro Text', fontWeight: '700', color: '#2d0c57'}}>Non-contact-delivery</Text>
        <TouchableOpacity activeOpacity={0.5} style={{width: 74, height: 30, borderRadius: 36.5, backgroundColor: '#E2CBFF', flexDirection: 'row', alignItems: 'center', paddingLeft: 14}}>
            <Text style={{fontSize: 14, fontFamily: 'SF Pro Text', fontWeight: '500', lineHeight: 22, letterSpacing: -0.41, color: '#6C0EE4'}}>Yes</Text>
            <Image source={require('../assets/knob.png')} style={{marginTop: 5}}/>
        </TouchableOpacity>
     </View>

       





    </ScrollView>
  );
};

