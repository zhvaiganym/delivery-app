import {SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native';


export default function Categories() {
  return (
    <View style={{flex: 1, backgroundColor: '#eae6ee'}}>
        <Image source={require('../assets/arrow.png')} style={{ width: 23, height: 23, marginVertical: 25, marginLeft: 10 }} />
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

      <View style={{flex: 1, flexDirection: 'column'}}>
        
        <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center', marginTop: 20}}>
        <View style={styles.box}>
          <Image source={require('../assets/vegetables.jpeg')} style={{ width: '100%', height: 120, resizeMode: 'cover' }} />
          <Text style={{marginLeft: 10, fontFamily: 'Roboto', fontWeight: '700', fontSize: 18, color: '#2d0c57'}}>Vegetables</Text>
          <Text style={{marginLeft: 10, marginBottom: 10}}>(43)</Text>
        </View>

        <View style={styles.box}>

        </View>
        </View>

        <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center', marginTop: 20}}>
        <View style={styles.box}>

        </View>

        <View style={styles.box}>

        </View>
        </View>


      </View>






    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 15,
    backgroundColor: '#efebf5',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b0a1c2',
    borderRadius: 25,
    paddingHorizontal: 8,
  },
  icon: {
    width: 23,
    height: 23,
    marginRight: 8,
    marginLeft: 5
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#44246c',
  },
  text: {
    fontSize: 30, 
    fontWeight: "bold", 
    marginBottom: 20,
    marginLeft: 15,
    color: "#44246c",
  },
  box: {
    flexDirection: 'column',
    gap: 10,
    width: 170,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b0a1c2',
    borderRadius: 10,
  }
});