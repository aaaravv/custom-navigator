import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import BottomTab from "./BottomTab";
import Colors from "../../config/colors";
import { Icons } from "../AppIcon.js";

export default function TabBar({ state, descriptors, navigation }) {
	return (
		<View style={styles.bottomBar}>
			{state.routes.map((route, index) => {
				const isFocused = state.index === index;
				const { options } = descriptors[route.key];

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
					});
					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const color = isFocused ? Colors.dark : Colors.gray;

				return (
					<TouchableOpacity
						key={index}
						onPress={onPress}
						testID={options.tabBarTestID}
						accessibilityRole="button">
						<BottomTab
							type={
								index !== 1
									? Icons.MaterialCommunityIcons
									: Icons.SimpleLineIcons
							}
							index={index}
							isFocused={isFocused}
							size={24}
							color={color}
						/>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	bottomBar: {
		height: 60,
		backgroundColor: "white",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-around",
	},
});
