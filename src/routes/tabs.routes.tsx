import * as React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CharacterScreen } from '../screens/CharacterScreen'
import { EpisodeScreen } from '../screens/EpisodesScreen'
import { LocationScreen } from '../screens/Location'

import Icon from 'react-native-vector-icons/MaterialIcons'

const { Navigator, Screen } = createBottomTabNavigator()

export function Tabs() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2f9331',
        tabBarInactiveTintColor: '#aaa',
      }}>
      <Screen
        name="Character"
        component={CharacterScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={28} color={color} />
          ),
        }}
      />
      <Screen
        name="Episodes"
        component={EpisodeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="list" size={28} color={color} />
          ),
        }}
      />
      <Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="map" size={28} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
