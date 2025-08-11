import {SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image source={require('./assets/arrow.png')} style={{ width: 23, height: 23, marginVertical: 25, marginLeft: 10 }} />
        <Text style={styles.text}>Categories</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 30, 
    fontWeight: "bold", 
    marginBottom: 10,
    marginLeft: 15,
    color: "#44246c",
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginHorizontal: 15, 
    paddingLeft: 10, 
    borderRadius: 20,
    marginTop: 15
  }
});
