import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';

export default function Home(props) {
  
  const [amt, setamt] = React.useState("")
  
  const pay = () => {
    if(amt != ""){
       props.navigation.navigate('Payment',{'amt':amt});
    }
  }

  return (
    <View style={styles.container}>
          <Image 
          source={require('./paypal.png')}
          style={styles.img}
          />
         <Text style={styles.title}>Paypal Intregation</Text>
         <TextInput 
          placeholder="Enter Amount"
          style={styles.textinput}
          value={amt}
          onChangeText={(val)=> setamt(val)}
          keyboardType="number-pad"
         />
          
         <Button 
         title="Pay Now"
         onPress={pay}
         />

    </View>
  );
}


const styles = StyleSheet.create({
  textinput : {
    borderWidth:1,
    width:'100%',
    borderColor:'#ccc',
    borderRadius:5,
    paddingLeft:15,
    marginBottom:25
  },
  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin: 15,
    backgroundColor:'#fff'
  },
  img : {
    width:250,
    height:100,
    resizeMode:'contain',
    marginBottom:30
  },
  title : {
    fontWeight:'bold',
    fontSize:25,
    marginBottom:50
  }
});