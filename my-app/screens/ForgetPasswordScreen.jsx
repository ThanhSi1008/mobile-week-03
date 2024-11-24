import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const ForgetPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-filled/100/000000/lock.png",
        }}
        style={styles.icon}
      />
      <Text style={styles.title}>FORGET PASSWORD</Text>
      <Text style={styles.description}>
        Provide your account’s email for which you want to reset your password
      </Text>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/mail-227-512.png")}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="| Email"
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Verification")}
      >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#37D6F8",
    padding: 20,
  },
  icon: {
    width: 80,
    height: 80,
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "90%",
    height: 50,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FFCC00",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    alignItems: "center",
    width: "90%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

export default ForgetPasswordScreen;
