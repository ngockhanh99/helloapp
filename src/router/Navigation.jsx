import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import Screen1 from '../screens/Auth/Screen1';
import { Entypo, FontAwesome } from '@expo/vector-icons'; 
import Screen2 from '../screens/Auth/Screen2';

export default function Navigation() {
const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login"  screenOptions = {({ route }) =>({
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#f3f3f3',
        tabBarStyle: {
          backgroundColor:'#214daf'
        },
        headerShown: false
  })}>
        <Tab.Screen 
        name="Login" 
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="login" size={24} color="black" />
          ),
        }}
         />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Home" component={Screen1} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color="black" />
          ),
        }}/>
        <Tab.Screen name="Screen2" component={Screen2} options={{
          tabBarLabel: 'Screen2',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color="black" />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})