import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />

      <Text style={styles.title}>GROW YOUR BUSINESS</Text>

      <Text style={styles.description}>
        We will help you to grow your business using online server
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ForgetPassword")}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.link}>HOW WE WORK?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#37D6F8", // Nền xanh nhạt
    paddingVertical: 40,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#000", // Màu đen
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
    paddingHorizontal: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    backgroundColor: "#FFCC00", // Vàng
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  link: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});

export default WelcomeScreen;
