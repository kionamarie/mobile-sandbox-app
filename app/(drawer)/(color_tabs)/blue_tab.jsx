import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const blue_tab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>blue tab</Text>
    </View>
  )
}

export default blue_tab

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