import React from 'react'
import { View } from 'react-native'
import MiniCard from './MiniCard'

const TrendsCard = () => {
    return (
        <View >
        <MiniCard
        image='https://i.ytimg.com/vi/mQnXBNK8NPs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAlhROHKQvbdVQFzGh-z4_5DKbsNA'
        title='Everything was FROZEN! | Trucking Through A HUGE Blizzard Part 2' 
        channelName='Happiness By The Mile' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwnhXpR-Eq6dzXF3F5Yfm3pQWHV9Nl_xo99igDBDvLA=s68-c-k-c0x00ffffff-no-rj'
        views='69K Views'
        time='15 hours ago'
        />
        <MiniCard
        image='https://i.ytimg.com/vi/YjjxUtzgfvw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDLi7LcQrj8QpTxwnyCTu5GB_5d_w'
        title='Great video of Rosie and Randy throwing down!!!' 
        channelName='Orphaned Wildlife Center' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwnjOzKVD8Ap9NZ7Efoax0sH6Hv49SLQ4GEVNbcu6=s68-c-k-c0x00ffffff-no-rj'
        views='6.2K Views'
        time='1 day ago'
        />
        </View>
    )
}

export default TrendsCard
