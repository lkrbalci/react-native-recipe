import { Link, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


type Props = {}

const NotFoundScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{ title: 'Oh My...' }}  />
    <View style={styles.container}>
      <Text style={styles.descText}>Things Gone Extremely Bad!</Text>
      <Link href={"/"}>
        <Text style={styles.linkText}>Go Back Home</Text>
      </Link>
    </View>
    </>
  )
}

export default NotFoundScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  descText: {
    marginTop: 20,
    color: 'gray',
    fontSize: 64,
    marginBottom: 36,
  }
})