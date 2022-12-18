import { View, StyleSheet  } from 'react-native'
import React from 'react'
import { BiGridAlt } from "react-icons/bi";
import { BiZoomOut } from "react-icons/bi";
export default function Navbar() {
  return (
    <View style={navbar.icon}>
      <BiGridAlt></BiGridAlt>

      <BiZoomOut></BiZoomOut>
    </View>
  )
}


const navbar = StyleSheet.create({
  icon: {
   fontSize:30,
   flexDirection:'row',
   justifyContent: 'space-between',
   margin: 25
  },
});