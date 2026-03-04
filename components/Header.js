import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Header component displays the app title
export default function Header({ title }) {
  return (
    <View style={styles.container}>
      {/* Show the title text */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

// Styles for the header section
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,      // space from the top of screen
    paddingBottom: 16,   // space below the header
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
});