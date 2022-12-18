import { View, Text , StyleSheet,Image,  Pressable } from 'react-native'
import React from 'react'

export default function Menu() {
  return (
    <View>
   
<View style= { one.yaz}>
    <Text style={{ fontSize:25, marginBottom:10}}>
         Salam Nizam
    </Text>

    <Text style={{fontWeight: '700' , fontSize:35}}>
        Manage your file
    </Text>
</View>



<View  style={one.tow} >


<View>
<Image style={one.img}
        source={{
          uri: 'https://cdn3.iconfinder.com/data/icons/hosting-7/60/cloud__plug__cable__data-512.png'
        }}
      />
</View>


<View  >

<Text style={one.text}>
    Unimetede Strong
</Text>
<Text style={{...one.text, ...one.year}}>
    $30/year
</Text>
<Text style={{...one.text}}>
    Offer UI May 20
</Text>


  <Pressable style={{...one.bottom, ...one.text,...one.update}}>
Update
  </Pressable>
</View>



</View>


    </View>
  )
}




const one = StyleSheet.create({
  yaz: {

   flexDirection:'column',
   justifyContent: 'space-between',
  paddingLeft:30,
 


  },
  img:{
    width:150,
    height:150,
    marginRight:30,
    color:'#ffff'
  },

  tow:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#0c1d91',
    borderRadius:20,
    margin:15,
    padding:50,
    shadowColor: '#73b0e9',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.4,
    shadowRadius: 2,

  },

  text:{
    color:'#fefeff',
   

  },
  update:{
alignItems:'center'
  },

  year:{
    fontSize:45,
   
  },
  bottom:{
    backgroundColor:'#e3aa11',
    borderRadius:50,
    padding:10,
    marginTop:20

  },

 
  
});