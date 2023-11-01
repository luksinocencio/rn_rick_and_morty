import * as React from 'react'
import { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { CustomText } from '../../compoents/Text'
import { EpisodeProps } from '../../types/EpisodeProps'
import { api } from '../../services/api'

export function EpisodeScreen() {
  const [episodes, setEpisodes] = useState<EpisodeProps[]>()

  async function getEpisodes() {
    try {
      const { data } = await api.get('/episode')
      // console.log(data.results)
      setEpisodes(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getEpisodes()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={episodes}
        keyExtractor={({ id }: EpisodeProps, index) => String(id + index)}
        renderItem={({ item }) => EpisodeItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

function EpisodeItem(item: EpisodeProps) {
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
        Titulo: {item.name} - {item.episode}
      </CustomText>

      <CustomText>{`Exibido em: ${item.air_date}`}</CustomText>
    </View>
  )
}
