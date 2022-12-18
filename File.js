import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import { AiFillPicture } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";

export default function File() {
  return (
    <View style={file.div}>
   
<View >
    <Pressable  style={file.img }><AiFillPicture style={file.icon}/></Pressable>
    <Text style={file.write1}>Picture</Text>
    <Text style={file.write2}>996 Items</Text>
</View>

   
<View>
    <Pressable  style={{...file.img, backgroundColor:'#e3aa11'} }><AiOutlineVideoCamera style={file.icon}/></Pressable>
    <Text style={{...file.write1, marginLeft:10}}>Video</Text>
    <Text style={file.write2}> 334 Items</Text>
</View>



   
<View>
    <Pressable  style={{...file.img, backgroundColor:'#64af6d'} } ><AiOutlineFolderOpen style={file.icon}/></Pressable>
    <Text style={{...file.write1, marginLeft:15}}>File</Text>
    <Text style={file.write2}> 200 Items</Text>
</View>





   
    </View>
  )
}




const file = StyleSheet.create({
img:{
backgroundColor:'#f297ad',
padding:10,
borderRadius:15
},
icon:{
fontSize:40,
color:'#ffff'

},
write1:{
    fontWeight:900,
    marginTop:7,
   marginLeft:5
   

},
write2:{
    fontSize:10,marginTop:3,marginLeft:5
    
},
div:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:15
},

});