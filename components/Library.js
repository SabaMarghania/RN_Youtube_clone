import * as React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
function Library() {
    return (
      <View style={styles.Container}>
        <Header/>
        <View style={styles.Box}>
           <View style={styles.Card}>
           <View style={styles.Div}>
           <View style={styles.Card}>
            <MaterialCommunityIcons name="history" size={33} color="#fff" />
            <Text style={styles.Text}>History</Text>
            </View>
             <View style={styles.Card}>
             <MaterialCommunityIcons name="play-box-outline" size={33} color="#fff" />
             <Text style={styles.Text}>Your videos</Text>
            </View>
             <View style={styles.Card}>
              <MaterialCommunityIcons name="download-outline" size={33} color="#fff" />
              <Text style={styles.Text}>Downloads</Text>
            </View>
           <View style={styles.Card}>
            <MaterialCommunityIcons name="movie" size={33} color="#fff" />
            <Text style={styles.Text}>Your movies</Text>
            </View>
           <View style={styles.Card}>
            <MaterialCommunityIcons name="clock-outline" size={33} color="#fff" />
            <Text style={styles.Text}>Watch later</Text>
              </View>
          </View>
          </View>
          </View>

          <View style={styles.Playlist}>
            <Text style={styles.Text2}>Playlists</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                 <Text style={styles.Text2}>Recently added</Text>
                 <MaterialCommunityIcons style={{marginTop:25}} name="arrow-down" size={25} color="#fff" />
            </View>
          </View>
            
          <View style={styles.seePlaylist}>
          <MaterialCommunityIcons  style={{marginLeft:10,}} name="plus" size={35} color="rgb(93, 142, 233)" />
              <Text style={styles.Text3}>New playlist</Text>
          </View>
          </View>
    );
  }
  const styles =StyleSheet.create({
    Container:{
      flex:1,
      height:'100%',
      width:'100%',
       backgroundColor:'rgb(36, 36, 36)'
    },
    Div:{
      height:'90%',
      justifyContent:'space-between',
      flexDirection:'column'
    },
    Box:{
      width:'100%',
      height:'51%',
      marginLeft:20,
      justifyContent:'space-between',
    },
    Card:{
      flexDirection:'row',
      alignItems:'center',
    },
    Text:{
    color:'white',
    fontSize:16,
    marginLeft:20
    },
    Text2:{
      marginTop:25,
      color:'white',
      fontSize:16,
      marginLeft:20,

    },
    Text3:{
      color:'rgb(93, 142, 233)',
      marginLeft:25,
      fontSize:17,
    },
    seePlaylist:{
      flexDirection:'row',
      width:"100%",
      alignItems:'center',
      marginTop:30,
      marginLeft:20
    },
    Playlist:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:25,
      borderTopWidth:1,
      borderTopColor:'gray',
      alignItems:'center'
    }
  
  })
export default Library;