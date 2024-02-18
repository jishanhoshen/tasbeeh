import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const Tasbeeh = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.resetButton} onPress={resetCount}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>Tap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  countText: {
    fontSize: 60,
    marginBottom: 20,
    zIndex: 1,
    position: "absolute",
    top: 80,
    paddingVertical: 60,
    color: "white",
  },
  button: {
    width: "85%",
    height: 400,
    backgroundColor: "#1C1819",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    position: "absolute",
    bottom: 50,
    zIndex: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "#3F1C25",
    padding: 15,
    width: "100%",
    height: 60,
    position: "absolute",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Tasbeeh;
