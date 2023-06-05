import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate("login")}
        title="Login"
      ></Button>
      <Button
        onPress={() => navigation.navigate("mypage")}
        title="Mypage"
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
