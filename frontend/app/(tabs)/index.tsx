// Imports: React/React Native, Link (Navigate between screens)
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export const metadata = {
  title: "Home",
};

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3a6486ff",
      }}
    >
      <Text style={style.text}>Hello World!</Text>
      <Link href="/history" style={style.button}>Go to History Screen</Link>
    </View>
  );
}

const style = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#3a6486ff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontSize: 20,
  },

  button: {
    marginTop: 20,
    textDecorationLine: "underline",
    color: "white",
  }

})