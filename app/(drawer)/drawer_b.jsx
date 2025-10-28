import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const drawer_b = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>drawer b</Text>
    </View>
  )
}

export default drawer_b

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