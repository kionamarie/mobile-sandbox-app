import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const drawer_a = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>drawer a</Text>
    </View>
  )
}

export default drawer_a

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
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