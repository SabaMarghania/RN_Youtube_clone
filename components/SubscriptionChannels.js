import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View
   } from 'react-native';
const Subscriptions = ({image,channelName})=> {


    return (
      <View contentContainerStyle={styles.container}>
          <View >
             <Image style={styles.Images} source={{uri:image}} />
             <Text style={styles.Text}>{channelName}</Text>
          </View>
          
         
      </View>
      
    );
  }
   const styles =StyleSheet.create({
   
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft:10,
    },
    Images:{
        width:50,
        height:50,
        borderRadius:50,
    },
    Text:{
        color:'lightgray',
        justifyContent:'center',
        fontSize:12,
        marginTop:5,
        marginBottom:10,
        alignSelf: 'center'
    },
   
}
)
export default Subscriptions