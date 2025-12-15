import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const about = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <Text>about</Text>
    </View>
  );
};

export default about;

const styles = StyleSheet.create({});
