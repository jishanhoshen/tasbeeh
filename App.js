import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Counter from "./src/Components/Counter";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar animated={true} style="light" />
      <View style={styles.StatusArea} />
      <View style={styles.container}>
        <Counter />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#231F20",
  },
  StatusArea: {
    height: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    backgroundColor: "#231F20",
    alignItems: "center",
    justifyContent: "center",
  },
});
