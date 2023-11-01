import * as React from 'react'

import { View } from 'react-native'
import { styles } from './styles'
import { CustomText } from '../../../../compoents/Text'

export function CharacterDetailEpisodeItem(item: string) {
  return (
    <View style={styles.container}>
      <CustomText>{item}</CustomText>
    </View>
  )
}
