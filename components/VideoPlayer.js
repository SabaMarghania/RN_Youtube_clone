import React from 'react'
import { View, Text,StyleSheet,FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
import { WebView } from 'react-native-webview';
import Card from './Card'
import {useSelector} from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
const VideoPlayer = ({route}) => {
    const navigation = useNavigation();
    const {videoId,title,description} = route.params

    const CardData = useSelector(state=>{
        return state.cardData
      })
    return (
        <ScrollView style={styles.Cont}>
              <MaterialCommunityIcons
              style={styles.icon}
              name="arrow-left"
              size={30}
              color="#000"
              onPress={() => {
                navigation.goBack();
              }}/>
        <View style={{width:'100%',height:250, }}>
      
             <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri:`https://www.youtube.com/embed/${videoId}` }}
      />
        </View>
            <View bstyle={{backgroundColor: " rgb(36, 36, 36)",}}>
         
                <Text style={styles.Text}>{title}</Text>
                <Text style={styles.Text2}>{description}</Text>
            </View>
            <FlatList style={{marginTop:40}}
      data={CardData}
      renderItem={({item})=>{
        return <Card
        videoId={item.id.videoId}
        title={item.snippet.title}
        channel={item.snippet.channelTitle}
        publishTime={item.snippet.publishTime}
        />
      }}
      keyExtractor={item=>item.id.videoId}
      />

            </ScrollView>
    )
}
const styles = StyleSheet.create({
    Cont:{
        backgroundColor: " rgb(36, 36, 36)",
        height:'100%',
    },
   Text:{
       color:'lightgray',
       fontSize:20,
       marginBottom:15,
       marginTop:10,
       width:'94%',
       marginLeft:15
   },
   Text2:{
    color:'gray',
    fontSize:15,
    marginLeft:12,
    width:'94%',
    flexDirection:'column'
   },
   icon:{
    color:'lightgray',
    marginTop:10,
       
   }
})
export default VideoPlayer
