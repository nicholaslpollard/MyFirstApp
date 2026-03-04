import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

// Reusable button component
export default function ToggleButton({ label, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

// Button styling
const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: "#2f6fed",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});