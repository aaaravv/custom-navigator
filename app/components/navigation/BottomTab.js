import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AppIcon from "../AppIcon";
import Colors from "../../config/colors";

export default function BottomTab({
	type,
	color,
	size = 24,
	isFocused,
	index,
}) {
	const icon = index == 0 ? "home" : "heart";
	const gradient = index == 1;
	return (
		<View>
			{gradient ? (
				<LinearGradient
					colors={[Colors.light, Colors.dark]}
					start={{ x: isFocused ? 0 : 1, y: 0 }}
					end={{ x: isFocused ? 1 : 0, y: 0 }}
					style={styles.middleIcon}>
					<AppIcon
						name={"basket"}
						type={type}
						size={size}
						color={"white"}
					/>
				</LinearGradient>
			) : (
				<View style={styles.icon}>
					<AppIcon
						name={icon}
						type={type}
						size={size}
						color={color}
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	middleIcon: {
		bottom: 18,
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "black",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.6,
		elevation: 8,
	},
});
