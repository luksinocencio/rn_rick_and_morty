import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { CharacterDetailScreen } from './../screens/CharacterDetailScreen'

const { Navigator, Screen } = createNativeStackNavigator()

import { Tabs } from './tabs.routes'

type MainRouterProps = {
  characterDetail: undefined | any
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<MainRouterProps>

export default function MainRouter() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        <Screen
          name="characterDetail"
          component={CharacterDetailScreen}
          options={({ route }: any) => ({ title: route.params.name })}
        />
      </Navigator>
    </NavigationContainer>
  )
}
