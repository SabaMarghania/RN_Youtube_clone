import React from 'react'
import {ScrollView } from 'react-native'
import MiniCard from './MiniCard'
import Header from './Header'

 const Home=()=>{
    return(
        <ScrollView style={{backgroundColor:'rgb(36, 36, 36)'}}>
          <Header/> 
        <MiniCard
        image='https://i.ytimg.com/vi/RafBj8LUFcw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD6Qs_NizwklWba4zMmHgT-F6llsA' 
        title='The Home Workout Routine That Got Me Ripped' 
        channelName='Neoshred' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwnhisyZjlCB4lJfEmAQyIwFB2ltSWZ5JjR5cT-8w=s68-c-k-c0x00ffffff-no-rj'
        views='37K Views'
        time='2 weeks ago'
        />
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
        <MiniCard
        image='https://i.ytimg.com/vi/6APhgYV4BkU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGwBnC-jQk22o8d_9_bEIvB7KsHg'
        title='Software Developer Desk Setup Tour (2021)' 
        channelName='Kalle Hallden' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwnjXndA1IozeIYHvyWML5BLjhrXBkqvtnSXjwOwOyQ=s68-c-k-c0x00ffffff-no-rj'
        views='49K Views'
        time='1 week ago'
        />
        <MiniCard
        image='https://i.ytimg.com/vi/l5-gja10qkw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB4ilzamHYXmgoFMcDdCFPvCbR23w'
        title='Highly Suspect - My Name Is Human [Official Video]' 
        channelName='Highly Suspect' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwngkH_pGwAc9aTPafLEqFvfau2Ze6BS1a0H4B8aZlQ=s88-c-k-c0x00ffffff-no-rj'
        views='86M Views'
        time='3 years ago'
        />
         <MiniCard
        image='https://i.ytimg.com/vi/jfc3Eh-L4sQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD6U4Fz71RYBLQMbpmtQ9IRYpM8JQ'
        title='When Life Goes Wrong (2021)' 
        channelName='Mo Samuels' 
        channelProfile='https://yt3.ggpht.com/ytc/AAUvwni3aU6GXCgfVlazub09vo16Gkutwgdv29_PftOzkQ=s68-c-k-c0x00ffffff-no-rj'
        views='13K Views'
        time='5 days ago'
        />
       </ScrollView>
    )
}
export default Home