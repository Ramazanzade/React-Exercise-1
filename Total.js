import { View, Text ,StyleSheet, Pressable  } from 'react-native'
import React from 'react'
import { BiClipboard } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import { BiMessageAltCheck } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiTv } from "react-icons/bi";
export default function Total() {
  return (
    <View >
 
<View style={total.div1}>
<View>
<Pressable  style={total.img}> <BiClipboard style={total.icon}></BiClipboard></Pressable>

</View>

<View>
    <Text style={{fontWeight:'600' , fontSize:20}}>New Video Shot</Text>
    <Text style={{ fontSize:10}}>186 Videos * 3.8 GB</Text>

</View>


<BiChevronRight style={total.ico}></BiChevronRight>

<View>

</View>


</View>

 
<View style={total.div1}>
<View>
<Pressable  style={{...total.img, backgroundColor:'#77c280'}}> <BiTask style={total.icon}></BiTask></Pressable>

</View>

<View>
    <Text style={{fontWeight:'600' , fontSize:17}}>Creativ UI Desinger</Text>
    <Text style={{ fontSize:10}}>189 Videos * 5.5 GB</Text>

</View>


<BiChevronRight style={total.ico}></BiChevronRight>

<View>

</View>


</View>


 
<View style={total.div1}>
<View>
<Pressable  style={{...total.img, backgroundColor:'#eb9694'}}> <BiMessageAltCheck style={total.icon}></BiMessageAltCheck></Pressable>

</View>

<View>
    <Text style={{fontWeight:'600' , fontSize:23}}>UI/UX Desing</Text>
    <Text style={{ fontSize:10}}>135 Videos * 1.8 GB</Text>

</View>


<BiChevronRight style={total.ico}></BiChevronRight>

<View>

</View>


</View>

 
<View style={total.div1}>
<View>
<Pressable  style={{...total.img, backgroundColor:'#6bf29e'}}> <BiEnvelope style={total.icon}></BiEnvelope></Pressable>

</View>

<View>
    <Text style={{fontWeight:'600' , fontSize:20}}>Case Study PDF</Text>
    <Text style={{ fontSize:10}}>63 files * 2.5 GB</Text>

</View>


<BiChevronRight style={total.ico}></BiChevronRight>

<View>

</View>


</View>

 
<View style={total.div1}>
<View>
<Pressable   style={{...total.img, backgroundColor:'#6f5898'}}> <BiTv style={total.icon}></BiTv></Pressable>

</View>

<View>
    <Text style={{fontWeight:'600' , fontSize:23}}>Imge Edit pro</Text>
    <Text style={{ fontSize:10}}>186 imgs * 0.8 GB</Text>

</View>


<BiChevronRight style={total.ico}></BiChevronRight>

<View>

</View>


</View>

 









    </View>
  )
}



const total = StyleSheet.create({

    icon:{
fontSize:40,
color:'#fff'

},
img:{
backgroundColor:'#f297ad',
padding:10,
borderRadius:15,
marginHorizontal:20
},
div1:{
    flexDirection:'row',
    borderRadius:20,
    backgroundColor:'#c1e1c5',
    marginHorizontal:20,
    marginVertical:20,
    padding:10
 
},
ico:{
    fontSize:40,
    marginLeft:75

}

});