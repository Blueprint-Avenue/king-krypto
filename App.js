import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";
import CoinDetails from "./screens/CoinDetails/CoinDetails";
import {COLORS} from "./constants";
import {RecoilRoot} from "recoil";

import Tabs from "./navigation/tabs";
import {StatusBar} from "expo-status-bar";
import AddNewAsset from "./screens/AddNewAsset";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer
				independent={true}
				theme={{
					colors: {
						background: COLORS.white,
					},
				}}
			>
				<RecoilRoot>
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
						<Stack.Screen name="AddNewAsset" component={AddNewAsset} />
					</Stack.Navigator>
				</RecoilRoot>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
