import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Profile component shows the user's picture and name
export default function Profile({ name }) {
  return (
    <View style={styles.container}>
      {/* Image from the assets folder */}
      <Image style={styles.avatar} source={require("../assets/avatar.jpg")} />

      {/* Display the name passed in from props */}
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

// Styles for the profile section
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70, // make image circular
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
});