import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Companents/Navbar';
import Menu from './Companents/Menu';
import File from './Companents/File';
import Recent from './Companents/Recent';
import Nav from './Companents/Nav';
import Total from './Companents/Total';
export default function App() {
  return <>

<Navbar/>,
  <Menu></Menu>,
  <File></File>
  <Recent></Recent>
  <Nav></Nav>
  <Total></Total>
  </>
 


  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
