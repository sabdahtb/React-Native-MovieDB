import { Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style'
import { Icons } from '../../assets'

const TabItem = ({
  isFocused,
  onLongPress,
  onPress,
  label,
}: {
  isFocused: boolean
  onLongPress: () => void
  onPress: () => void
  label: string
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      {label === 'Home' && (
        <Image
          source={Icons.home_icon}
          style={isFocused ? styles.activeIcon : styles.inActiveIcon}
        />
      )}
      {label === 'Likes' && (
        <Image
          source={Icons.chart_icon}
          style={isFocused ? styles.activeLikeIcon : styles.inActiveIcon}
        />
      )}
      {label === 'Profile' && (
        <Image
          source={Icons.profile_icon}
          style={isFocused ? styles.activeProfileIcon : styles.inActiveIcon}
        />
      )}
      <Text style={isFocused ? styles.acntiveText : styles.inAcntiveText}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TabItem
