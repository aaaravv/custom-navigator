import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export const Icons = {
	AntDesign: "AntDesign",
	Entypo: "Entypo",
	Feather: "Feather",
	FontAwesome: "FontAwesome",
	FontAwesome5: "FontAwesome5",
	Foundation: "Foundation",
	Ionicons: "Ionicons",
	MaterialCommunityIcons: "MaterialCommunityIcons",
	MaterialIcons: "MaterialIcons",
	Octicons: "Octicons",
	SimpleLineIcons: "SimpleLineIcons",
};

const AppIcon = (props) => {
	const fontSize = 24;
	return (
		<>
			{props.type === Icons.AntDesign && (
				<AntDesign
					name={props.name}
					size={props.size || fontSize}
					color={props.color}
					style={props.style}
				/>
			)}
			{props.type === Icons.Entypo && (
				<Entypo
					name={props.name}
					size={props.size || fontSize}
					color={props.color}
					style={props.style}
				/>
			)}
			{props.type === Icons.Feather && (
				<Feather
					name={props.name}
					size={props.size || fontSize}
					color={props.color}
					style={props.style}
				/>
			)}
			{props.type === Icons.FontAwesome && (
				<FontAwesome5
					name={props.name}
					size={props.size || fontSize}
					color={props.color}
					style={props.style}
				/>
			)}
			{props.type === Icons.FontAwesome5 && (
				<FontAwesome
					name={props.name}
					size={props.size || fontSize}
					color={props.color}
					style={props.style}
				/>
			)}
			{props.type === Icons.Foundation && (
				<Foundation
					name={props.name}
					size={props.size || fontSize}
					color={props.color}
					style={props.style}
				/>
			)}
			{props.type === Icons.Ionicons && (
				<Ionicons
					name={props.name}
					size={props.size || fontSize}
					color={props.color}
					style={props.style}
				/>
			)}
			{props.type === Icons.MaterialCommunityIcons && (
				<MaterialCommunityIcons
					name={props.name}
					size={props.size || fontSize}
					color={props.color}
					style={props.style}
				/>
			)}
			{props.type === Icons.MaterialIcons && (
				<MaterialIcons
					name={props.name}
					size={props.size || fontSize}
					color={props.color}
					style={props.style}
				/>
			)}
			{props.type === Icons.Octicons && (
				<Octicons
					name={props.name}
					size={props.size || fontSize}
					color={props.color}
					style={props.style}
				/>
			)}
			{props.type === Icons.SimpleLineIcons && (
				<SimpleLineIcons
					name={props.name}
					size={props.size || fontSize}
					color={props.color}
					style={props.style}
				/>
			)}
		</>
	);
};

export default AppIcon;
