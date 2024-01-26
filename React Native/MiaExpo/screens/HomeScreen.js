import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'
import tw from 'twrnc';
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const HomeScreen = () => {
	return (

		<SafeAreaView style={tw`h-full`}>
			<ImageBackground source={require('../assets/images/bg.png')} resizeMode="cover" style={styles.image}>
				<Header />
				<Body />
				<Footer />
			</ImageBackground>
		</SafeAreaView>

	);
};

export default HomeScreen

const styles = StyleSheet.create({
	image: {
		flex: 1,
		justifyContent: "center"
	},
})
