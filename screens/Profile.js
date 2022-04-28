import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
	Switch,
} from "react-native";
import {MainLayout} from "./Main";
import HeaderBar from "../components/HeaderBar";
import {FONTS, COLORS, SIZES, dummyData, icons} from "../constants";
import SectionTitle from "../components/SectionTitle";

const Profile = () => {
	return (
		<MainLayout>
			<View
				style={{
					flex: 1,
					paddingHorizontal: SIZES.padding,
					backgroundColor: COLORS.secondary,
				}}
			>
				{/* Header */}
				<HeaderBar title="Profile" />
				{/* Details */}
				<ScrollView>
					{/* Email and User Id */}
					<View
						style={{
							flexDirection: "row",
							marginTop: SIZES.radius,
						}}
					>
						{/* Email */}
						<View
							style={{
								flex: 1,
							}}
						>
							<Text
								style={{
									color: COLORS.white,
									...FONTS.h3,
								}}
							>
								{dummyData.profile.email}
							</Text>
							<Text style={{color: COLORS.lightGray3, ...FONTS.h3}}>
								ID: {dummyData.profile.id}
							</Text>
						</View>
						{/* Status */}
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<Image
								source={icons.verified}
								style={{
									height: 25,
									width: 25,
								}}
							/>
							<Text
								style={{
									marginLeft: SIZES.base,

									color: COLORS.lightGray3,
									...FONTS.body4,
								}}
							>
								Verified
							</Text>
						</View>
					</View>

					{/* App Section */}
					<SectionTitle title="APP" />

					{/* Account Section */}
					<SectionTitle title="ACCOUNT" />

					{/* Security Section */}
					<SectionTitle title="SECURITY" />
				</ScrollView>
			</View>
		</MainLayout>
	);
};

export default Profile;
