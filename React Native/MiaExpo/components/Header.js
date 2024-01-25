import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { HEADER_ICON_MENU_URI, HEADER_ICON_LANGUAGE_URI, HEADER_ICON_USER_URI, HEADER_ICON_MAP_URI, HEADER_ICON_STORE_URI } from "@env";
import tw from 'twrnc';

const Header = () => {
	return (

			<View style={{
        height: '25%', alignItems: 'center', justifyContent: 'center', flex: 1,
      }}>
				<View style={{
	        marginTop: 80, flexDirection: 'row', width: '84.76%', height: '100%'
	      }}>
					<TouchableOpacity>
						<Image
								style={tw`p-0`, {width: 25, height: 21, resizeMode: "contain"}}
								source={require(HEADER_ICON_MENU_URI)}
							/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={{marginHorizontal: 22}}>Deliv-X</Text>
					</TouchableOpacity>
					<View style={{
						flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 0, flex:1, paddingRight: 0
					}}>
						<TouchableOpacity>
							<Image
								style={{width: 21, height: 21, resizeMode: "contain"}}
								source={require(HEADER_ICON_LANGUAGE_URI)}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Image
								style={{width: 21, height: 21, resizeMode: "contain", paddingHorizontal: 16}}
								source={require(HEADER_ICON_USER_URI)}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Image
								style={{width: 21, height: 21, resizeMode: "contain", paddingHorizontal: 16}}
								source={require(HEADER_ICON_MAP_URI)}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Image
								style={{width: 21, height: 21, resizeMode: "contain"}}
								source={require(HEADER_ICON_STORE_URI)}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
	)
}

export default Header
