import * as React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { CharacterProps } from '../../../../types/CharacterProps'
import Icon from 'react-native-vector-icons/MaterialIcons'

type ListItemProps = CharacterProps & {
  onPress: () => void
}

export function ListItem({
  name,
  status,
  species,
  image,
  onPress,
}: ListItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
      <Icon name="arrow-right" size={32} color={'#000'} />
    </TouchableOpacity>
  )
}
