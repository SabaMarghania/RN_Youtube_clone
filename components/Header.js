import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text,StyleSheet} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native'
const Header = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
        <View
        style={{ alignItems: "center", paddingLeft: 20,flexDirection:'row'}}>
        <MaterialCommunityIcons 
          name="youtube" 
          backgroundColor='#fff'
           color='red' 
           size={30} 
           />
          <Text style={styles.title}>YouTube</Text>

           </View>
           {/* ICons */}
               <View style={styles.rightIcons}>
               <TouchableOpacity>
                   <Icon
                     style={styles.headerIcons}
                     name="videocam"
                     size={30}
                     color="#fff"
                   />
                 </TouchableOpacity>
                
               <TouchableOpacity  style={{color:'#fff'}}>
                    <Icon
                     style={styles.headerIcons}
                     name="search"
                     size={30}
                     color="#fff"
                     onPress={() => {navigation.navigate('search');
                    }}
                   />
                 </TouchableOpacity>
                
                 <TouchableOpacity>
                   <Icon
                     style={styles.headerIcons}
                     name="account-circle"
                     size={30}
                     color="#fff"
                   />
                 </TouchableOpacity>
              
           </View>
        
   

    </View>

    )}
const styles = StyleSheet.create({
    header: {
      width:'100%',
      height: 55,
      backgroundColor: " rgb(36, 36, 36)",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems:'center',
    },
    title: {
      color: "#fff",
      fontSize: 22,
      fontWeight: "bold"
    },
    rightIcons: {
      flexDirection: "row",
      alignItems: "center"

    },
    headerIcons: {
      marginHorizontal: 5,
      zIndex:-1
    },
    search:{
      position:'absolute',
      right:20,
      zIndex:30,
      top:0 ,
    } ,
    textInput: {
      height: '60%',
      width: 343,
      backgroundColor:'gray',
      position: "absolute",
      marginLeft: -220,
      zIndex:1,
      borderRadius:5,
      alignItems:'center',
      color:'white',
      justifyContent:'center',
      paddingLeft:15,
      fontSize:15
    },
    button: {
      fontSize: 35,
      color:'#fff',
    },
    body:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }

    
   
  });
export default Header
