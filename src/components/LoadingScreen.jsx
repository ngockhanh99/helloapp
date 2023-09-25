import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Loading, please wait...</Text>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
  )
}
