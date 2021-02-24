import React from 'react';
import { 
  Text,
  StyleSheet,
  ScrollView,
   } from 'react-native';
  import SubscriptionChannels from './SubscriptionChannels'
  import MiniCard from './MiniCard'
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from './Header';
const Subscriptions = ()=> {


    return (
      <ScrollView style={styles.container}>
        <Header/> 
          <ScrollView contentContainerStyle={styles.ScrollView}>
      <SubscriptionChannels
      image='http://yt3.ggpht.com/ytc/AAUvwnh7Mc3UQPAsAQNBJLBp6Zupc4DbP_knSxSuLj7qxA=s48-c-k-c0x00ffffff-no-rj-mo'
      channelName='Joshua Fluke'
      />
      
      <SubscriptionChannels
      image='http://yt3.ggpht.com/ytc/AAUvwngeN9y3AzP_UdjFzh9NQ8urpQBEAH9BT7E22bbAlg=s48-c-k-c0x00ffffff-no-rj-mo'
      channelName='Макс Степ'
      />
      <SubscriptionChannels
      image='https://yt3.ggpht.com/ytc/AAUvwnjxXYRiFjguNwXVvQSMND6Yq6A7DJ9C11S1t2NlxA=s176-c-k-c0x00ffffff-no-rj'
      channelName='Gymshark'
      />
      <SubscriptionChannels
      image='https://yt3.ggpht.com/ytc/AAUvwnjr0yv7VKDZVgTVKU28P9ApPgt8nBaQwZjc78OOiw=s176-c-k-c0x00ffffff-no-rj'
      channelName='Ninja'
      />
      <TouchableOpacity >
        <Text style={styles.SeeAll}>ALL</Text>
      </TouchableOpacity>

      </ScrollView>

      <MiniCard
        image='https://i.ytimg.com/vi/2LhoCfjm8R4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBJZKoelkqQqjd47cO9ZrMjl-VSFg'
        title='Data Visualization with D3, JavaScript, React - Full Course [2021]' 
        channelName='freeCodeCamp.org' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s88-c-k-c0x00ffffff-no-rj'
        views='5.4K Views'
        time='2 hours ago'
        />
       <MiniCard
        image='https://i.ytimg.com/vi/yZQAUkYhq_o/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD1TOty8yMAWzCG0BcNMvRunQmF0A'
        title='Tallest Person Ever: The UNBREAKABLE Record? - Guinness World Records' 
        channelName='Guinness World Records' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwnhzYLWgA8jqX0UiQpr2w6W12co8a7m787qfhqDV2fs=s88-c-k-c0x00ffffff-no-rj'
        views='16K Views'
        time='1 hours ago'
        />
        <MiniCard
        image='https://i.ytimg.com/vi/C_ul5DPCVU4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCJlJggc34dp7ykYlOFPj0M0wioCg'
        title='EPIC ROCK MUSIC "burnboy x Sam Tinnesz - Victorious [Lyric Video]"' 
        channelName='Discovering Music Club' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwnhvunmjZ_aKSoQEPN4zKl97XH7ZhYfTNcFpwZNOhg=s88-c-k-c0x00ffffff-no-rj'
        views='1.2K Views'
        time='2 hours ago'
        />
         <MiniCard
        image='https://i.ytimg.com/vi/mQnXBNK8NPs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAlhROHKQvbdVQFzGh-z4_5DKbsNA'
        title='Everything was FROZEN! | Trucking Through A HUGE Blizzard Part 2' 
        channelName='Happiness By The Mile' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwnhXpR-Eq6dzXF3F5Yfm3pQWHV9Nl_xo99igDBDvLA=s68-c-k-c0x00ffffff-no-rj'
        views='69K Views'
        time='15 hours ago'
        /><MiniCard
        image='https://i.ytimg.com/vi/SeAZp5Qfbio/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD5kcGO4Qx8O4gNcbSEoNtFlfqn2Q'

        title='Я учил 3D месяц и вот что вышло!' 
        channelName='Хауди Хо™ - Просто о мире IT!' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwngB6nPmI9yyQI6MzTiWHBCzpsqNFK8Mvr3X2G_djA=s88-c-k-c0x00ffffff-no-rj'
        views='51K Views'
        time='3 hours ago'
        />
    </ScrollView>
      
    );
  }
   const styles =StyleSheet.create({
   
    container: {
      flex: 1,
      height: "100%",
      backgroundColor:'rgb(36, 36, 36)'
    },
    SeeAll:{
      alignItems:'center',
      width:50,
      marginTop:20,
      marginRight:10,
      color:'#2196F3',
      fontSize:18,
      fontWeight:'500'
    },
    ScrollView:{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      width: '100%',
      marginBottom:20,
      marginLeft:10,
      borderBottomWidth:1,
      borderBottomColor:'gray'

    },
    textInput: {
      borderColor: "gray",
      borderWidth: 1,
      height: 25,
      width: 300,
      position: "absolute",
      right: 0
    },
    button: {
      position: "absolute",
      right: 0,
      fontSize: 14,
      width: 50,
      height: 20,
      borderColor: "gray",
      borderWidth: 1
    }

}
)
export default Subscriptions