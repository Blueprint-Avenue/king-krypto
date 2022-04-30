import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {MainLayout} from "./Main";
import {StatusBar} from "expo-status-bar";
import {Transition, Transitioning} from "react-native-reanimated";
import data from "../assets/data/data";

const transition = (
	<Transition.Together>
		<Transition.In type="fade" durationMs={200} />
		<Transition.Change />
		<Transition.Out type="fade" durationMs={200} />
	</Transition.Together>
);

const Market = () => {
	const [currentIndex, setCurrentIndex] = React.useState(null);
	const ref = React.useRef();

	return (
		<MainLayout>
			<Transitioning.View
				ref={ref}
				transition={transition}
				style={styles.container}
			>
				<StatusBar hidden />
				{data.map(({bg, color, category, subCategories}, index) => {
					return (
						<TouchableOpacity
							key={category}
							onPress={() => {
								ref.current.animateNextTransition();
								setCurrentIndex(index === currentIndex ? null : index);
							}}
							style={styles.cardContainer}
							activeOpacity={0.9}
						>
							<View style={[styles.card, {backgroundColor: bg}]}>
								<Text style={[styles.heading, {color}]}>{category}</Text>
								{index === currentIndex && (
									<View style={styles.subCategoriesList}>
										{subCategories.map((subCategory) => (
											<Text key={subCategory} style={[styles.body, {color}]}>
												{subCategory}
											</Text>
										))}
									</View>
								)}
							</View>
						</TouchableOpacity>
					);
				})}
			</Transitioning.View>
		</MainLayout>
	);
};

export default Market;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EBEFD0",
		justifyContent: "center",
	},
	cardContainer: {
		flexGrow: 1,
	},
	card: {
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	heading: {
		fontSize: 38,
		fontWeight: "900",
		textTransform: "uppercase",
		letterSpacing: -2,
	},
	body: {
		fontSize: 20,
		lineHeight: 20 * 1.5,
		textAlign: "center",
	},
	subCategoriesList: {
		marginTop: 20,
	},
});
