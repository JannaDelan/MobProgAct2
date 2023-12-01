import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../../assets/images/logo.png";

const LandingPage = () => {
  const navigation = useNavigation();

  const onStartLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} resizeMode="contain" />
      <Text style={styles.title}>Welcome to Coffee With Me</Text>
      <TouchableOpacity onPress={onStartLoginPress} style={styles.loginButton}>
      <Text style={styles.buttonText}>Start Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#bec2bf",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    height: 300,
  },
  loginButton: {
    backgroundColor: "#bec2bf",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "black",
  },
});

export default LandingPage;
