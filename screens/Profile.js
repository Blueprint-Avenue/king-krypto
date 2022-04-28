import React, {useState} from "react";
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
import Setting from "../components/Settings";

const Profile = () => {
	const [faceId, setFaceId] = useState(true);

	return (
		<MainLayout>
			<View
				style={{
					flex: 1,
					paddingHorizontal: 15,
					backgroundColor: COLORS.secondary,
				}}
			>
				{/* Header */}
				<HeaderBar title="Profile" />
				{/* Details */}
				<ScrollView
					style={{
						marginTop: 40,
					}}
				>
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

					<Setting
						title="Launch Screen"
						value="Home"
						type="button"
						onPress={() => console.log("Pressed")}
					/>

					<Setting
						title="Appearance"
						value="Dark"
						type="button"
						onPress={() => console.log("Pressed")}
					/>

					{/* Account Section */}
					<SectionTitle title="ACCOUNT" />
					<Setting
						title="Payment Currency"
						value="USD"
						type="button"
						onPress={() => console.log("Pressed")}
					/>

					<Setting
						title="Language"
						value="English"
						type="button"
						onPress={() => console.log("Pressed")}
					/>

					{/* Security Section */}
					<SectionTitle title="SECURITY" />
					<Setting
						title="FaceID"
						value={faceId}
						type="switch"
						onPress={(value) => setFaceId(value)}
					/>

					<Setting
						title="Password Settings"
						value=""
						type="button"
						onPress={() => console.log("Pressed")}
					/>

					<Setting
						title="Change Password"
						value=""
						type="button"
						onPress={() => console.log("Pressed")}
					/>

					<Setting
						title="2-Factor Authentication"
						value=""
						type="button"
						onPress={() => console.log("Pressed")}
					/>
				</ScrollView>
			</View>
		</MainLayout>
	);
};

export default Profile;
