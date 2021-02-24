import * as React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MiniCard from './MiniCard'
import TrendsHeader from './TrendsHeader';
function Trends() {
    return (
      <ScrollView style={{ backgroundColor:'rgb(36, 36, 36)'}}>
      <TrendsHeader/>
      <MiniCard
        image='https://i.ytimg.com/vi/f9bl0Vjn96U/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBy9DdkX2JChZ1Td3dh1RLatWDf2w'
        title='როგორ ვაკივლეთ თი მაჭავარიანი? - სიურპრიზი აკვარიუმში' 
        channelName='Giorgi Danelia' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwnh4a8oj0iGbOJMtJxrVVtupkKUJJTdp23V4Qnvy-Q=s176-c-k-c0x00ffffff-no-rj'
        views='324K views'
        time='1 week ago'
        />
        <MiniCard
        image='https://i.ytimg.com/vi/R1Pm_btnrT8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBAh4JtDpkxgKxvtxdEmaBiJ57Y9A'
        title='ყველაზე რენდომ ტიკტოკები 2' 
        channelName='ოქტოპუსი / Octopus' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwngY9V-OvwXRAjHHHA8m0dV3RPzKG0CRkVvPV_mn=s176-c-k-c0x00ffffff-no-rj'
        views='71K views'
        time='5 days ago'
        />
        <MiniCard
        image='https://i.ytimg.com/vi/Ep-CnsOGjgM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDoSX7BHGnTRWZ9rl3x6yob1whdKA'
        title='ამ პროდუქტზე ვერ ვამბობთ უარს!' 
        channelName='GEOFITMAN' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwnhVuZcfWW3qy0OuSHXEePcnms_osi1XcgwraYrYpQ=s176-c-k-c0x00ffffff-no-rj'
        views='29K Views'
        time='2 days ago'
        />
        <MiniCard
        image='https://i.ytimg.com/vi/Tq60c_SaExc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB7L-tpBxq1XzaANtt1df3W9zsfPw'
        title='Enes Batur - Ayaz (Official Video)' 
        channelName='Enes Batur' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwnjQY7viJ63-Xc5dHV8unQ1BDLRWW5FLGxzRMgNxjw=s176-c-k-c0x00ffffff-no-rj'
        views='13M Views'
        time='2 days ago'
        />
</ScrollView>
       
    );
  }
   const styles =StyleSheet.create({
    Container:{
    },
    Text:{
    color:'white'
  
    },
    title: {
      color: "#fff",
      fontSize: 22,
      fontWeight: "bold",
      marginBottom:10
    },
  
  })
export default Trends;  