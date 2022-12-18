import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { AiOutlineFolderAdd } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";

export default function Recent() {
  return (
    <View>
   

   <View>
    <Text style={{fontSize:30 , fontWeight:'500', margin:20}}>Recents Files</Text>
   </View>



<View style={files.div}>

    <AiOutlineFolderAdd style={files.icon}/>

    <View style={files.div2}>
        <Text style={files.write1}> Google UX Course</Text>
        <Text style={files.write2}>Update durdane</Text>
    </View>
</View>



<View style={files.div}>

    <AiOutlineFolderOpen style={{...files.icon, paddingLeft:20 }}/>

    <View style={files.div2}>
        <Text style={{...files.write1, marginLeft:55}}> Dribbble Shot File</Text>
        <Text style={files.write2}> Yazılar tam oxunmur deyə random atıram</Text>
    </View>
</View>




    </View>
  )
}




const files = StyleSheet.create({
 div:{
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#f4f3ef',
    borderRadius:15,
    margin:15,
    padding:5
 },

 icon:{
    fontSize:70,
    color:'#d1d316'
 },
 write1:{
    fontSize:20,
    fontWeight:'600',
    marginTop:15
 },
 write2:{
    fontSize:10,
  marginLeft:50,
  marginTop:5
 },
 div2:{
  marginRight:90
 }

});

