import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import tw from 'twrnc';
import CheckBox from "./CheckBox";
import { HEADER_ICON_PUFF_URI } from "@env";
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";


const initialState = {
  react: false,
  next: false,
  vue: false,
  angular: false,
};

const Body = () => {
	const navigation = useNavigation();

	const [state, setState] = React.useState(initialState);
  const [toggleButton, setToggleButton] = React.useState(false);
	// rules
  const [rules, setRules] = useState(true);

	return (
		<View style={styles.container}>
	<ImageBackground source={require(HEADER_ICON_PUFF_URI)} style={{ aspectRatio: 1090/1024, height: undefined, width: '100%', alignItems: "center", justifyContent: "center", }} >
		<Image style={styles.image} source={require('../assets/images/logo.png') } />

		<StatusBar style="auto" />

		<TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('LoginScreen')}>
		<Text style={styles.loginText}>PIETEIKT PIEGĀD</Text>
		</TouchableOpacity>
		<CheckBox
			onPress={() => setRules(!rules)}
			title="Piekrītu&#10;noteikumiem"
			isChecked={rules}
			defaultChecked={true}
		/>
		</ImageBackground>
</View>
	)
}

export default Body

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: '8%',

  },

  image: {
    aspectRatio: 1114/372,
    height: undefined,
    width: '50%',
    marginBottom: 10,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "white",
    opacity: 0.8,
  },

  loginText: {
    fontSize: 15,
  },
});
