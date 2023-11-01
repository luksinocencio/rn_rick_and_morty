import * as React from 'react'
import { useState, useEffect } from 'react'
import { View, Image } from 'react-native'
import { styles } from './styles'
import { CustomText } from '../../compoents/Text'
import { FlatList } from 'react-native'
import { api } from '../../services/api'
import { CharacterDetailProps } from '../../types/CharacterDetailProps'
import LoadImage from './../../assets/img/loading.jpg'
import { CharacterDetailEpisodeItem } from './components/CharacterDetailEpisodeItem'

export function CharacterDetailScreen({ route, navigation }: any) {
  const [characterDetail, setCharacterDetail] = useState<CharacterDetailProps>(
    {} as CharacterDetailProps,
  )

  const { id } = route.params

  async function getEpisodes() {
    try {
      const { data } = await api.get(`character/${id}`)
      setCharacterDetail(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getEpisodes()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={
            characterDetail.image ? { uri: characterDetail?.image } : LoadImage
          }
          style={styles.avatar}
        />
        <CustomText style={styles.tilte}>{characterDetail.name}</CustomText>

        <CustomText style={styles.subTilte}>
          Status: {characterDetail.status}
        </CustomText>

        <FlatList
          ListHeaderComponent={() => <CustomText>Episodes</CustomText>}
          data={characterDetail.episode}
          keyExtractor={item => String(item)}
          renderItem={({ item }: any) => CharacterDetailEpisodeItem(item)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      </View>
    </View>
  )
}
