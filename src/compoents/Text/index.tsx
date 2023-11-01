import * as React from 'react'
import { ReactNode } from 'react'
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native'

type CustomTextProps = TextProps & {
  children: ReactNode
  style?: TextStyle | TextStyle[]
  textType?: 'regular' | 'bold' | 'light'
}

export function CustomText({ children, textType, style }: CustomTextProps) {
  let textStyle: {}
  switch (textType) {
    case 'regular':
      textStyle = styles.regular
      break
    case 'bold':
      textStyle = styles.bold
      break
    case 'light':
      textStyle = styles.light
      break
    default:
      textStyle = styles.regular
      break
  }

  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style

  return <Text style={[textStyle, { ...passedStyles }]}>{children}</Text>
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'OpenSans-Regular',
  },
  bold: {
    fontFamily: 'OpenSans-Bold',
  },
  light: {
    fontFamily: 'OpenSans-Light',
  },
})
