import React from 'react'
import { View, Text } from 'react-native'
import Search from './components/Search'
import Home from './components/Home'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Trends from './components/Trends'
import Subscriptions from './components/Subscriptions'
import Library from './components/Library'
import VideoPlayer from './components/VideoPlayer'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {reducer} from './reducers/reducer';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome =()=>{
    return (
        <Tabs.Navigator
       
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ color, size }) => {
            
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            
            } else if (route.name === 'Trends') {
              iconName = 'compass';
            }else if (route.name ==='Subscriptions'){
            iconName = 'youtube-subscription';
             }else if(route.name ==='Library')
            iconName = 'clipboard-play-multiple';

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'lightgray',
          inactiveTintColor: 'gray',
          inactiveBackgroundColor:'rgb(36, 36, 36)',
          activeBackgroundColor:'rgb(36, 36, 36)'
        }}
      >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Trends" component={Trends} />
        <Tabs.Screen name="Subscriptions" component={Subscriptions} />
        <Tabs.Screen name="Library" component={Library} />
      </Tabs.Navigator>
    )
}
const rooReducer = combineReducers({
  cardData:reducer, //[],
})
const store = createStore(rooReducer)

const App = () => {
    return (
      <Provider store={store}>
       <NavigationContainer >
           <Stack.Navigator headerMode='none'>
             <Stack.Screen name='rootHome' component={RootHome}/>
             <Stack.Screen name='search' component={Search}/>
             <Stack.Screen name='VideoPlayer' component={VideoPlayer}/>
           </Stack.Navigator>
       </NavigationContainer>
       </Provider>
    )
}

export default App
