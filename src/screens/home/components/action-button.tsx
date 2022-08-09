import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../style'

type IActionButton = {
  pageNumber: number
  handlePageNumber: () => void
  handlePrevPageNumber: () => void
}

const ActionButtons = ({
  pageNumber,
  handlePageNumber,
  handlePrevPageNumber,
}: IActionButton) => {
  return (
    <View style={styles.actionsButton}>
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={handlePrevPageNumber}
        disabled={pageNumber === 1}>
        <Text style={styles.textActionsButton}>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.pageStyles}>
        <Text style={styles.pageText} children={pageNumber} />
      </View>
      <TouchableOpacity style={styles.buttonStyles} onPress={handlePageNumber}>
        <Text style={styles.textActionsButton}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ActionButtons
