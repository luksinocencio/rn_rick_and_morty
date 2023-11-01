import * as React from 'react'
import { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { CustomText } from '../../compoents/Text'
import { LocationProps } from '../../types/LocationProps'
import { api } from '../../services/api'

export function LocationScreen() {
  const [location, setLocation] = useState<LocationProps[]>()

  async function getLocations() {
    try {
      const { data } = await api.get('/location')
      // console.log(data.results)
      setLocation(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocations()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={location}
        keyExtractor={({ id }: LocationProps, index) => String(id + index)}
        renderItem={({ item }) => LocationItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

function LocationItem(item: LocationProps) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginVertical: 5,
        marginHorizontal: 16,
        padding: 10,
        borderRadius: 10,
        elevation: 3,
      }}>
      <CustomText textType="bold">
        Nome: {item.name} - {item.type}
      </CustomText>

      <CustomText>{`Dimensão: ${item.dimension}`}</CustomText>
    </View>
  )
}
