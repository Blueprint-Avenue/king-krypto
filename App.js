import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import CoinDetails from "./screens/CoinDetails/CoinDetails";
import {COLORS} from "./constants";
import WatchlistProvider from "./Contexts/WatchlistContext";
import Tabs from "./navigation/tabs";
import {StatusBar} from "expo-status-bar";
import AddNewAsset from "./screens/AddNewAsset";
import {backgroundColor} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer
				theme={{
					colors: {
						background: COLORS.white,
					},
				}}
			>
				<WatchlistProvider>
					<StatusBar style="auto" />
					<Stack.Navigator
						screenOptions={{
							headerShown: false,
						}}
						initialRouteName={"MainLayout"}
					>
						<Stack.Screen name="MainLayout" component={Tabs} />
						<Stack.Screen
							name="Details"
							component={CoinDetails}
							options={{headerShown: false}}
						/>
						<Stack.Screen
							name="AddNewAsset"
							component={AddNewAsset}
							options={{
								title: "Add New Asset",
								headerStyle: {
									backgroundColor: "#49BEB7",
								},
								headerTintColor: "#EBEFD0",
								headerTitleStyle: {
									fontWeight: "bold",
								},
							}}
						/>
					</Stack.Navigator>
				</WatchlistProvider>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
