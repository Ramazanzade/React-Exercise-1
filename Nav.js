import { View, Text ,StyleSheet, Pressable , Image } from 'react-native'
import React from 'react'
import { BiChevronLeft } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
export default function Nav2() {
  return (
    <View style={nav.div1}>
   <View style={nav.div}>
   <BiChevronLeft style={{...nav.icon,}}></BiChevronLeft>
    <Text style={{fontSize:30 , fontWeight:'300', color:'#fff'}}>Google Course</Text>
    <BiDotsVerticalRounded style={nav.icon}></BiDotsVerticalRounded>
   </View>



   <View style={nav.div3}>

      <Pressable style={{...nav.buton , ...nav.text}}> Storage</Pressable>
    
      <Pressable style={{...nav.text , color:'#ddd' , marginTop:10}}> Cloudes</Pressable>
   </View>




   <View style={nav.div4}>
      
      <View style={nav.div2}>
          <Text style={nav.yaz}>Used 186 GB</Text>
          <Text style={nav.yaz}>Total 256 GB</Text>
      </View>
      
      <View >
      <Image style={nav.img}
      source={{
                uri: 'https://o.remove.bg/downloads/c4c616bc-ad60-4553-9cea-157ecf80a1e7/normal-range__1_-removebg-preview.png' }}
            />
      </View>
      
      
          </View>









    </View>
  )
}




const nav = StyleSheet.create({
div:{
  flexDirection:'row',
  justifyContent:'space-around',
  marginVertical:25
},
icon:{
  fontSize:35,
color:'#fff'
},
buton:{
  backgroundColor:'#f78da7',
  borderRadius:20,
paddingHorizontal:30,
paddingVertical:10
},
div1:{
backgroundColor:'#004dcf',
borderBottomEndRadius:80,
borderBottomStartRadius:80
},
div3:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  backgroundColor:'#fff',
  borderRadius:50,
  padding:10,
  margin:20,
  
},
text:{
  color:'#fff',
  fontSize:20
},




div2:{
    flexDirection:'row',
    justifyContent:'space-evenly'
 },
 img:{
    width:300,
    height:50,
    marginLeft:55
 },
 div4:{
    flexDirection:'column',
    justifyContent:'space-around',
    backgroundColor:'#fff',
    borderRadius:10,
    marginTop:20,
    marginHorizontal:20
 },
 yaz:{
    fontSize:15,
    fontWeight:'500',
    marginTop:15
 }
});