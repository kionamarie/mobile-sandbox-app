import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const drawer_c = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>drawer c</Text>
    </View>
  )
}

export default drawer_c

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