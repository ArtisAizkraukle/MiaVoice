import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import { HEADER_ICON_CHAT_URI, HEADER_ICON_PHONE_URI } from "@env";

const Footer = () => {
	return (

			<View style={{
        height: '25%', alignItems: 'center', flex: 1, justifyContent: 'flex-end',
      }}>
				<View style={{
	        marginTop: 38, flexDirection: 'row', width: '84.76%', position: 'absolute', paddingBottom: 33,
	      }}>

					<TouchableOpacity style={{ flexDirection: 'row' }}>
					<Image
						style={{width: 38, height: 21, resizeMode: "contain"}}
						source={require(HEADER_ICON_CHAT_URI)}
					/>
					<Text style={{marginLeft: 4}}>Lietotāju atbalsts</Text>
					</TouchableOpacity>

					<TouchableOpacity style={{
						flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 0, flex:1, paddingRight: 0
					}}>
					<Image
						style={{width: 23, height: 23, resizeMode: "contain"}}
						source={require(HEADER_ICON_PHONE_URI)}
					/>
					<Text style={{marginLeft: 4}}>Sadarbībai</Text>

					</TouchableOpacity>
				</View>
			</View>
	)
}

export default Footer
