import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View,Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
 

import useFetch from './hook/fetching';


export default function App() {
  const [city,setCity]=useState('Amritsar');
const [data,setData]=useState({});
const [image,setImage]= useState('clouds');


const weatherImages = {
  Clouds: require('./images/clouds.png'),
  Clear: require('./images/clear.png'),
  Drizzle: require('./images/drizzle.png'),
  Mist: require('./images/mist.png'),
  Rain: require('./images/rain.png'),
  Snow: require('./images/snow.png'),
};

useEffect(()=>{
useFetch({city,data,setData,setImage});



},[])

 
const temprature = data.main ? (data.main.temp) -273.15 : 0;

  return (

    <SafeAreaView style={styles.container} backgroundColor='#486e83'>

          <StatusBar style="auto" />
          <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

    <View style={styles.menu} >
<TextInput style={styles.search}  placeholder='search the city...' onChangeText={setCity}></TextInput>

<TouchableOpacity style={styles.imageBox} onPress={()=>{
  useFetch({city,data,setData,setImage})
}}>
<Image style={styles.image} source={require('./images/search.png')} ></Image>
</TouchableOpacity>
   </View>

   <View style={styles.iconBox}>

    <Image style={styles.icon} resizeMode='contain'  source={weatherImages[image]}/>
   </View>
   <View style={styles.tempBox}>
    <Text style={styles.temp}>{Math.floor(temprature)}°c</Text>
    <Text style={styles.city}>{data.name}</Text>
   </View>

<View style={styles.dataContainer}>
<View style={styles.humidityBox}>
  <Image style={styles.humidityImg} source={require('./images/humidity.png')} />
  {data && data.main && (
    <View style={styles.humidityText}>
      <Text style={styles.percent}>{Math.floor(data.main.humidity)}%</Text>
      <Text style={styles.humidity}>Humidity</Text>
    </View>
  )}
</View>
  <View style={styles.humidityBox2} >
      
    <Image style={styles.humidityImg} source={require('./images/wind.png')}/>
    {data && data.main &&( 

    <View style={styles.humidityText}>
      <Text style={styles.percent}>{data.wind.speed}Km/h</Text>
      <Text style={styles.humidity}>Wind speed</Text>
    </View>
    )}

  </View>
</View>

</ScrollView>
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    paddingTop:80
  },
  scroll:{
flexGrow:1,
  },
search:{
color:'gray',
backgroundColor:'white',
height:48,
width:270,
borderRadius:100,
paddingLeft:20
},
gradient:{
  flex:1
},
menu:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'center'
},
image:{
  height:20,
  // width:'auto'
  resizeMode:'contain'

},
imageBox:{
  height:48,
  borderRadius:100,
  backgroundColor:'white',
  alignItems:'center',
  justifyContent:'center',
  marginLeft:20
},

icon:{
  alignItems:'center',
   justifyContent:'center',
   marginLeft:75,
   height:250
},
// iconBox:{
//   flex:2,
//   paddingTop:50,
//   justifyContent:'center',
//   alignItems:'center'
// },
tempBox:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
},
temp:{
  fontSize:90,
  color:'white',
fontWeight:'500'
},
city:{
  fontSize:45,
  color:'white'

},
dataContainer:{
  display:'flex',
  flex:1,
  alignItems:'center',
  justifyContent:'space-evenly',
  flexDirection:'row',
  margin:30
},
humidityBox:{
  justifyContent:'space-between',
  color:'white',
  flexDirection:'row',
  alignItems:'center',
  paddingRight:25,


},
humidityBox2:{
  justifyContent:'space-between',
  color:'white',
  flexDirection:'row',
  alignItems:'center',
  marginLeft:25,
  paddingRight:25

},
humidityImg:{
  height:30,
  resizeMode:'contain',paddingTop:30,
  justifyContent:'flex-end'
},
humidityText:{
  alignItems:'center',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'flex-start'
  // color:'white',

},
humidity:{
  color:'white',
  fontSize:20
},
percent:{
  color:'white',
  fontSize:30,
  lineHeight:30
}




});
