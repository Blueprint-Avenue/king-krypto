import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons } from "../constants";
import { Home, Portfolio, Market, Profile } from "../screens/Main";
import { TabIcon } from "../components";
import { connect } from "react-redux";
import { setTradeModalVisibility } from "../stores/tab/tabActions";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
	return (
		<TouchableOpacity
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	);
};

const Tabs = ({ setTradeModalVisibility, isTradeModalVisible }) => {
	function tradeTabButtonOnClickHandler() {
		setTradeModalVisibility(!isTradeModalVisible);
	}

	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					height: 140,
					backgroundColor: COLORS.primary,
					borderTopColor: "transparent",
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => {
						if (!isTradeModalVisible) {
							return (
								<TabIcon focused={focused} icon={icons.home} label="Home" />
							);
						}
					},
				}}
				//Whenever the Trade Modal is Visible, I don't want any tab to listen to any tab action by calling prevent default
				listeners={{
					tabPress: (e) => {
						if (isTradeModalVisible) {
							e.preventDefault();
						}
					},
				}}
			/>
			<Tab.Screen
				name="Portfolio"
				component={Portfolio}
				options={{
					tabBarIcon: ({ focused }) => {
						if (!isTradeModalVisible) {
							return (
								<TabIcon
									focused={focused}
									icon={icons.briefcase}
									label="Portfolio"
								/>
							);
						}
					},
				}}
				//Whenever the Trade Modal is Visible, I don't want any tab to listen to any tab action by calling prevent default
				listeners={{
					tabPress: (e) => {
						if (isTradeModalVisible) {
							e.preventDefault();
						}
					},
				}}
			/>
			<Tab.Screen
				name="Trade"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<TabIcon
								focused={focused}
								icon={isTradeModalVisible ? icons.close : icons.trade}
								iconStyle={
									isTradeModalVisible
										? {
												width: 15,
												height: 15,
										  }
										: null
								}
								label="Trade"
								isTrade={true}
							/>
						);
					},
					tabBarButton: (props) => (
						<TabBarCustomButton
							{...props}
							onPress={() => tradeTabButtonOnClickHandler()}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Market"
				component={Market}
				options={{
					tabBarIcon: ({ focused }) => {
						if (!isTradeModalVisible) {
							return (
								<TabIcon focused={focused} icon={icons.market} label="Market" />
							);
						}
					},
				}}
				//Whenever the Trade Modal is Visible, I don't want any tab to listen to any tab action by calling prevent default
				listeners={{
					tabPress: (e) => {
						if (isTradeModalVisible) {
							e.preventDefault();
						}
					},
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) => {
						if (!isTradeModalVisible) {
							return (
								<TabIcon
									focused={focused}
									icon={icons.profile}
									label="Profile"
								/>
							);
						}
					},
				}}
				//Whenever the Trade Modal is Visible, I don't want any tab to listen to any tab action by calling prevent default
				listeners={{
					tabPress: (e) => {
						if (isTradeModalVisible) {
							e.preventDefault();
						}
					},
				}}
			/>
		</Tab.Navigator>
	);
};

function mapStateToProps(state) {
	return {
		isTradeModalVisible: state.tabReducer.isTradeModalVisible,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setTradeModalVisibility: (isVisible) => {
			return dispatch(setTradeModalVisibility(isVisible));
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
