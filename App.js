import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from './app/screens/welcome/welcome.screen'
import ScreenNames from './app/configs/screen_names'

const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.WELCOME} component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
