import * as React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { CharacterProps } from '../../../../types/CharacterProps'

export function ListItem({ name, status, species, image }: CharacterProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <View style={styles.vStack}>
        <Text style={styles.titleText}>{name}</Text>
        <Text style={styles.descriptionText}>{`Status: ${status}`}</Text>
        <Text style={styles.descriptionText}>{`Especie: ${species}`}</Text>
      </View>
    </View>
  )
}
