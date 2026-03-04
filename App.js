import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// Components
import Header from "./components/Header";
import Profile from "./components/Profile";
import ToggleButton from "./components/ToggleButton";

export default function App() {
  // Example user name 
  const userName = "James";

  // State for the greeting message (starts empty)
  const [greeting, setGreeting] = useState("");

  // Toggle the greeting when button pressed
  const handleToggleGreeting = () => {
    setGreeting((prev) => (prev === "" ? "Hello! Welcome to React Native" : ""));
  };

  return (
    // Main screen container
    <View style={styles.container}>
      {/* App title */}
      <Header title="My First React Native App" />

      <View style={styles.card}>
        {/* Profile name */}
        <Profile name={userName} />

        {/* Button that toggles the greeting message */}
        <ToggleButton label="Toggle Greeting" onPress={handleToggleGreeting} />

        {greeting !== "" && <Text style={styles.greeting}>{greeting}</Text>}
      </View>
    </View>
  );
}

// Styles for layout and spacing
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  card: {
    width: "100%",
    maxWidth: 360,
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    elevation: 4, // adds a shadow on Android
  },
  greeting: {
    marginTop: 14,
    fontSize: 16,
    textAlign: "center",
  },
});