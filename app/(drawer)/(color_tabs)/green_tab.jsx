import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const green_tab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>green tab</Text>
    </View>
  )
}

export default green_tab

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
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