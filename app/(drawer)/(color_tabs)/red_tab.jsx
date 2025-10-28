import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const red_tab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>red tab</Text>
    </View>
  )
}

export default red_tab

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'floralwhite',
        fontSize: 32,
        fontWeight: 'bold'
    }
})