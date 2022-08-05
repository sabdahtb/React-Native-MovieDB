import React from 'react'
import { useEffect, useState } from 'react'
import { Keyboard, View } from 'react-native'

import TabItem from '../tab-item'
import styles from './style'

const BottomNavigation = ({
  state,
  descriptors,
  navigation,
}: {
  state: any
  descriptors: any
  navigation: any
}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      //Whenever keyboard did show make it don't visible
      setVisible(false)
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setVisible(true)
    })
    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])
  return (
    <>
      {visible && (
        <View style={styles.container}>
          {state.routes.map(
            (route: { key: string | number; name: any }, index: any) => {
              const { options } = descriptors[route.key]
              const label: string =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name

              const isFocused = state.index === index

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                })

                if (!isFocused && !event.defaultPrevented) {
                  // The `merge: true` option makes sure that the params inside the tab screen are preserved
                  navigation.navigate({ name: route.name, merge: true })
                }
              }

              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                })
              }

              return (
                <TabItem
                  key={index}
                  onLongPress={onLongPress}
                  onPress={onPress}
                  isFocused={isFocused}
                  label={label}
                />
              )
            },
          )}
        </View>
      )}
    </>
  )
}

export default BottomNavigation
