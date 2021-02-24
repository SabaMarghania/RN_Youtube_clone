import React from 'react';
import { View,TouchableOpacity, Text, Image,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'
const Card = (props) => {
    const navigation = useNavigation();
        return (
            <TouchableOpacity
            onPress={()=>navigation.navigate("VideoPlayer",{videoId:props.videoId,title:props.title,description:props.description})}
            >
               
            <View style={styles.Card}>
         
              <View  style={styles.ImageCont} >
                    <Image  style={styles.Image} source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}/>
              </View>
            <View style={styles.CardInfo}>
                <View>
                <Image style={styles.Profile} source={{uri:`https://i.ytimg.com/vi/${props.videoId}/mqdefault.jpg`}} alt=""/>

                </View>
              <View style={styles.CardInfo}>
                  <View style={styles.CardBox}>
                        <Text style={styles.text}>{props.title}</Text>
                        <Text style={styles.text}>{props.channelName} </Text>
                        <Text style={styles.text}>{props.publishTime} </Text>

                  </View>
             </View>

            </View>
</View>
</TouchableOpacity>
        );
}
const styles = StyleSheet.create({
    ImageCont:{
        width:'100%',
        flex:1,
    },
    text:{
        color:'lightgray'
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
export default Card