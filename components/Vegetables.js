import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';


export default function Vegetables({ goBack, goToItem }) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#eae6ee'}}>
       <TouchableOpacity onPress={goBack} style={{width: '100%', height: 90}}>
        <Image source={require('../assets/vector.png')} style={{ width: 8, height: 12, marginTop: 62, marginLeft: 21 }} />
      </TouchableOpacity>

       <Text style={styles.text}>Vegetables</Text>
      
       <View style={styles.container}>
       <Image
        source={require('../assets/search.png')}
        style={styles.icon}
       />
       <TextInput
        style={styles.input}
        placeholder="Search"
      />
      </View>



      <View style={{flexDirection: 'column', gap: 15 }}>
        <View style={{flexDirection: 'row', gap: 8, marginLeft: 20 }}>
         <View style={styles.box}><Text style={styles.text2}>Cabbage and lettuce (14)</Text></View>
         <View style={styles.box}><Text style={styles.text2}>Сucumbers and tomatoes (10)</Text></View>
        </View>

        <View style={{flexDirection: 'row', gap: 8, marginLeft: 20, marginBottom: 32 }}>
         <View style={styles.box}><Text style={styles.text2}>Oinons and garlic (8)</Text></View>
         <View style={styles.box}><Text style={styles.text2}>Peppers (7)</Text></View>
         <View style={styles.box}><Text style={styles.text2}>Potatoes and carrots (4)</Text></View>
        </View>
      </View>



      <ScrollView style={{flex:1}}>
      <View style={styles.container2}>
        <TouchableOpacity onPress={ goToItem }>
        <Image source={require('../assets/lettuce.png')} style={{ width: 177, height: 128, resizeMode: 'cover', borderRadius: 8 }} />
        </TouchableOpacity>
        <View style={{flexDirection: 'column', gap: 8, marginTop: 10 }}>
            <Text style={{fontSize: 18, fontFamily: 'SF Pro Text', fontWeight: '600', color: '#2d0c57', lineHeight: 22, letterSpacing: -0.41}}>Boston Lettuce</Text>
            <Text style={{fontSize: 22, fontFamily: 'SF Pro Text', fontWeight: '700', color: '#2d0c57', lineHeight: 22, letterSpacing: -0.41}}>1.10 <Text style={{fontSize: 16, fontFamily: 'SF Pro Text', fontWeight: 400, color: '#9586a8', lineHeight: 22, letterSpacing: -0.41 }}>€ / piece</Text> </Text>
            <View style={{flexDirection: 'row', gap: 15, marginTop: 20}}>
                <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                    <Image source={require('../assets/heart.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.btn2}>
                    <Image source={require('../assets/cart.png')} />
                </TouchableOpacity>
            </View>
        </View>
      </View>


      <View style={styles.container2}>
        <Image source={require('../assets/cauliflower.png')} style={{ width: 177, height: 128, resizeMode: 'cover', borderRadius: 8 }} />
        <View style={{flexDirection: 'column', gap: 8, marginTop: 10 }}>
            <Text style={{fontSize: 18, fontFamily: 'SF Pro Text', fontWeight: '600', color: '#2d0c57', lineHeight: 22, letterSpacing: -0.41}}>Purple Cauliflower</Text>
            <Text style={{fontSize: 22, fontFamily: 'SF Pro Text', fontWeight: '700', color: '#2d0c57', lineHeight: 22, letterSpacing: -0.41}}>1.85 <Text style={{fontSize: 16, fontFamily: 'SF Pro Text', fontWeight: 400, color: '#9586a8', lineHeight: 22, letterSpacing: -0.41 }}>€ / kg</Text> </Text>
            <View style={{flexDirection: 'row', gap: 15, marginTop: 20}}>
                <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                    <Image source={require('../assets/heart.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.btn2}>
                    <Image source={require('../assets/cart.png')} />
                </TouchableOpacity>
            </View>
        </View>
      </View>



      <View style={styles.container2}>
        <Image source={require('../assets/cabbage.png')} style={{ width: 177, height: 128, resizeMode: 'cover', borderRadius: 8 }} />
        <View style={{flexDirection: 'column', gap: 8, marginTop: 10 }}>
            <Text style={{fontSize: 18, fontFamily: 'SF Pro Text', fontWeight: '600', color: '#2d0c57', lineHeight: 22, letterSpacing: -0.41}}>Savoy Cabbage</Text>
            <Text style={{fontSize: 22, fontFamily: 'SF Pro Text', fontWeight: '700', color: '#2d0c57', lineHeight: 22, letterSpacing: -0.41}}>1.45 <Text style={{fontSize: 16, fontFamily: 'SF Pro Text', fontWeight: 400, color: '#9586a8', lineHeight: 22, letterSpacing: -0.41 }}>€ / kg</Text> </Text>
            <View style={{flexDirection: 'row', gap: 15, marginTop: 20}}>
                <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                    <Image source={require('../assets/heart.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.btn2}>
                    <Image source={require('../assets/cart.png')} />
                </TouchableOpacity>
            </View>
        </View>
      </View>



      

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 357,
    height: 45,
    marginLeft: 20,
    marginBottom: 35,
    backgroundColor: '#f6f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#9586a8',
    borderRadius: 25,
    paddingHorizontal: 8,
    gap: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  input: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    fontFamily: 'SF Pro Text',
    fontWeight: '400',
    color: '#9586a8',
  },
  text: {
    width: 174,
    height: 41,
    fontSize: 26, 
    lineHeight: 41,
    letterSpacing: 0.41,
    fontFamily: 'SF Pro Display',
    fontWeight: '700', 
    marginBottom: 20,
    marginLeft: 20,
    color: '#2d0c57',
  },
  box: {
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 6,
    height: 34, 
    borderRadius: 24, 
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    fontSize: 14, 
    fontFamily: 'SF Pro Text', 
    fontWeight: '400', 
    color: '#00000066',
  },
  container2: {
    flexDirection: 'row',
    width: '100%',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    borderWidth: 0.5,
    borderColor: '#9586a8',
  },
  btn: {
    width: 78,
    height: 40,
    backgroundColor: '#ffffff', 
    borderWidth: 1,
    borderColor: '#d9d0e3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    width: 78,
    height: 40,
    backgroundColor: '#0BCE83', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
});