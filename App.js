import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import CoinDetails from "./screens/CoinDetails/CoinDetails";

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
						headerTintColor: "#AB6D23",
						...TransitionPresets.ModalPresentationIOS,
					}}
					initialRouteName={"MainLayout"}
				>
					<Stack.Screen name="MainLayout" component={Tabs} />
					<Stack.Screen name="Details" component={CoinDetails} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
