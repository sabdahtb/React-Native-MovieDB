import React from 'react'
import { Image, View } from 'react-native'
import { Images } from '../../../assets'

import styles from '../style'
const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Images.movie_db_header} style={styles.headerImage} />
    </View>
  )
}

export default Header
