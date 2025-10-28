import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { Link } from 'expo-router'

const _layout = () => {
  
    return (
        
    <Drawer>
        {/* <Link href='/'><Text>Home</Text></Link> */}
        {/* <Drawer.Screen name="(drawer)/(color_tabs)" options={{ title: "Color Tabs"}}></Drawer.Screen>
        <Drawer.Screen name="drawer_a" options={{ title: "Drawer A"}}></Drawer.Screen>
        <Drawer.Screen name="drawer_b" options={{ title: "Drawer B"}}></Drawer.Screen>
        <Drawer.Screen name="drawer_c" options={{ title: "Drawer C"}}></Drawer.Screen> */}
    </Drawer>
  )
}

export default _layout

const styles = StyleSheet.create({})