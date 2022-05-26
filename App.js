import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import FavoriteScreen from "./app/screens/FavoriteScreen";
import HomeScreen from "./app/screens/HomeScreen.js";
import ProductScreen from "./app/screens/ProductScreen";
import TabBar from "./app/components/navigation/TabBar.js";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Product" component={ProductScreen} />
			<Tab.Screen name="Favorite" component={FavoriteScreen} />
		</Tab.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	);
}
