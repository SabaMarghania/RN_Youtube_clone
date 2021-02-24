import React from 'react'
import { View,Image,StyleSheet, Text } from 'react-native'

const MiniCard = ({image,time,views,title,channelName,channelProfile}) => {
    return (
            
        <View style={styles.Card}>
         
        <View  style={styles.ImageCont} >
              <Image  style={styles.Image} source={{uri:image}}/>
        </View>
      <View style={styles.CardInfo}>
          <View>
          <Image style={styles.Profile} source={{uri:channelProfile}}/>

          </View>
        <View style={styles.CardInfo}>
            <View style={styles.CardBox}>
                  <Text style={styles.text}>{title}</Text>
                  <Text style={styles.text}>{channelName} • {views} • {time}</Text>
            </View>
       </View>

      </View>
</View>
    )
}
const styles = StyleSheet.create({
    ImageCont:{
        width:'100%',
        flex:1,
    },
    text:{
        color:'lightgray',
    },
    Image:{
        width:'100%',
        justifyContent:'space-between',
        flex:1,
        resizeMode:'cover'
    },
    button:{
        padding:15
    },
    Card:{
        width:'100%',
        height:280,
        flexDirection:'column',
        marginBottom:5,
        backgroundColor:'rgb(36, 36, 36)'
    },
    CardInfo:{
        flexDirection:'row',
        marginLeft:10,
    }, 
     CardBox:{
        flexDirection:'column',
        width:300,
        padding:10,
    },
    Profile:{
        borderRadius:50,
        width:40,
        height:40,
        marginTop:10
    }
})
export default MiniCard
