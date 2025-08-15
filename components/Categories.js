import { View, Text, StyleSheet, Image, ScrollView  } from 'react-native';
import { TextInput } from 'react-native';


export default function Categories() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#eae6ee'}}>
       <View style={{width: '100%', height: 90 }}>
       <Image source={require('../assets/vector.png')} style={{ width: 8, height: 12, marginTop: 62, marginLeft: 21 }} />
       </View>

       <Text style={styles.text}>Categories</Text>
      
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

      <View style={{flex: 1, flexDirection: 'column', gap: 20 }}>
        
        <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center' }}>
        
         <View style={styles.box}>
          <Image source={require('../assets/vegetables.png')} style={{ width: '100%', height: 130, resizeMode: 'cover' }} />
          <Text style={{marginLeft: 15, marginVertical: 10, fontFamily: 'Roboto', fontWeight: '700', fontSize: 18, color: '#2d0c57'}}>Vegetables</Text>
          <Text style={{marginLeft: 15, marginBottom: 17, fontFamily: 'Roboto', fontWeight: '400', fontSize: 13, color: '#9586a8' }}>(43)</Text>
         </View>

        <View style={styles.box}>
          <Image source={require('../assets/fruits.png')} style={{ width: '100%', height: 130, resizeMode: 'cover' }} />
          <Text style={{marginLeft: 15, marginVertical: 10, fontFamily: 'Roboto', fontWeight: '700', fontSize: 18, color: '#2d0c57'}}>Fruits</Text>
          <Text style={{marginLeft: 15, marginBottom: 17, fontFamily: 'Roboto', fontWeight: '400', fontSize: 13, color: '#9586a8' }}>(32)</Text>
         </View>

      </View>


        <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center' }}>
        
         <View style={styles.box}>
          <Image source={require('../assets/bread.png')} style={{ width: '100%', height: 130, resizeMode: 'cover' }} />
          <Text style={{marginLeft: 15, marginVertical: 10, fontFamily: 'Roboto', fontWeight: '700', fontSize: 18, color: '#2d0c57'}}>Bread</Text>
          <Text style={{marginLeft: 15, marginBottom: 17, fontFamily: 'Roboto', fontWeight: '400', fontSize: 13, color: '#9586a8' }}>(22)</Text>
         </View>

        <View style={styles.box}>
          <Image source={require('../assets/sweets.png')} style={{ width: '100%', height: 130, resizeMode: 'cover' }} />
          <Text style={{marginLeft: 15, marginVertical: 10, fontFamily: 'Roboto', fontWeight: '700', fontSize: 18, color: '#2d0c57'}}>Sweets</Text>
          <Text style={{marginLeft: 15, marginBottom: 17, fontFamily: 'Roboto', fontWeight: '400', fontSize: 13, color: '#9586a8' }}>(56)</Text>
         </View>

      </View>


      <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center' }}>
        
         <View style={styles.box}>
          <Image source={require('../assets/pasta.png')} style={{ width: '100%', height: 130, resizeMode: 'cover' }} />
          <Text style={{marginLeft: 15, marginVertical: 10, fontFamily: 'Roboto', fontWeight: '700', fontSize: 18, color: '#2d0c57'}}>Pasta</Text>
          <Text style={{marginLeft: 15, marginBottom: 17, fontFamily: 'Roboto', fontWeight: '400', fontSize: 13, color: '#9586a8' }}>(43)</Text>
         </View>

        <View style={styles.box}>
          <Image source={require('../assets/drinks.png')} style={{ width: '100%', height: 130, resizeMode: 'cover' }} />
          <Text style={{marginLeft: 15, marginVertical: 10, fontFamily: 'Roboto', fontWeight: '700', fontSize: 18, color: '#2d0c57'}}>Drinks</Text>
          <Text style={{marginLeft: 15, marginBottom: 17, fontFamily: 'Roboto', fontWeight: '400', fontSize: 13, color: '#9586a8' }}>(43)</Text>
         </View>

      </View>

   </View>





    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 357,
    height: 45,
    marginLeft: 20,
    marginBottom: 40,
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
    fontSize: 30, 
    lineHeight: 41,
    letterSpacing: 0.41,
    fontFamily: 'SF Pro Display',
    fontWeight: '700', 
    marginBottom: 20,
    marginLeft: 20,
    color: '#2d0c57',
  },
  box: {
    flexDirection: 'column',
    width: 170,
    height: 210,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#9586a8',
    borderRadius: 8,
  }
});