import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const VerificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 46 }}>CODE</Text>
      <Text style={styles.title}>VERIFICATION</Text>
      <Text style={styles.description}>
        Enter ontime password sent on +849092605798
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Code"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
  description: {
    fontSize: 12,
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

export default VerificationScreen;
