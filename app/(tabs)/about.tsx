import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const about = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0F172A",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text style={styles.headerTop}>About</Text>
      <Text style={styles.description}>Just an App with Demo Purposes.</Text>
    </View>
  );
};

export default about;

const styles = StyleSheet.create({
  headerTop: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#F8FAFC",
  },
  description: {
    fontSize: 16,
    color: "#CBD5E1",
  },
});
