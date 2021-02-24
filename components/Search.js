import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React,{useState} from 'react';
import {  
  StyleSheet,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/MaterialIcons";
import Card from './Card'
import {useSelector,useDispatch} from 'react-redux'
const Search = ({navigation}) => {
      const[value,setValue] = useState("");
      // const[card,setCard] = useState([]);
      const dispatch = useDispatch();
      const CardData = useSelector(state=>{
        return state.cardData
    })

      const fetchData = () => {
    
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBXgCRXRPDWpCPd0aYN-yXo5QAi-dLaNmk`)
      .then((data)=>data.json())
      .then(data =>{ 
        console.log(data)
        // setCard(data.items)
        dispatch({type:"add",payload:data.items})
      })
    }
    return (
        <>
        <View style={styles.header}>
               <MaterialCommunityIcons
              style={styles.headerIcons}
              name="arrow-left"
              size={30}
              color="#fff"
              onPress={() => {
                navigation.goBack();
              }}
            />
            <TextInput 
            value={value}
            onChangeText={(text)=>setValue(text)}
            style={styles.textInput} 
             />
            <TouchableOpacity>
            <Icon
              onPress={()=>fetchData()}
              style={styles.search}
              name="search"
              size={30}
              
              color="#fff"
            />
            </TouchableOpacity>
        </View>
        <FlatList style={styles.background}  data={CardData}
            renderItem={({item}) =>{
              return <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channelName={item.snippet.channelTitle}
              description={item.snippet.description}
              publishTime={item.snippet.publishTime}
              />
            }} 
            keyExtractor={item =>item.id.videoId}
            
            />
        {/* <MiniCard/> */}
        </>
    )
}
  const styles = StyleSheet.create({
    header: {
      width:'100%',
      height: 55,
      backgroundColor: " rgb(36, 36, 36)",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems:'center',
    },
    background:{
      backgroundColor: " rgb(36, 36, 36)",
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
    marginRight:10,
    justifyContent:'center',
    alignItems:'center'
    } ,
    textInput: {
      height: '60%',
      width: '70%',
      backgroundColor:'gray',
      position: "absolute",
      marginLeft: 40,
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

    
  })
export default Search
