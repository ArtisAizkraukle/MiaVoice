import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { BODY_LOGO_URI } from "@env";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "../navigation/DrawerNavigator";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

	return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Image style={styles.logoIMG} source={require('../assets/images/logo.png') } />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Epasts"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Parole"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Aizmirsi paroli?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>IEIET</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  logoIMG: {
    aspectRatio: 1114/372,
    height: undefined,
    width: '50%',
    marginBottom: 16,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
