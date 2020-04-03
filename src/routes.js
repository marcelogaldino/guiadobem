import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
 
import Cities from './pages/Cities'
import Offers from './pages/Offers'
import List from './pages/List'
import Contact from './pages/Contact'

const AppStack = createStackNavigator()

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="cities" component={Cities} /> 
                <AppStack.Screen name="offers" component={Offers} /> 
                <AppStack.Screen name="list" component={List} /> 
                <AppStack.Screen name="contact" component={Contact} /> 
            </AppStack.Navigator>
        </NavigationContainer>
    )
}