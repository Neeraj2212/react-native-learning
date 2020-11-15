import React from "react";
import { View, FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

function Menu(props) {
	const renderMenuItem = ({ item, index }) => {
		return (
			<ListItem key={index}>
				<Avatar rounded source={{ uri: require("./images/uthappizza.png") }} />
				<ListItem.Content>
					<ListItem.Title>{item.name}</ListItem.Title>
					<ListItem.Subtitle>{item.description}</ListItem.Subtitle>
				</ListItem.Content>
				<ListItem.Chevron />
			</ListItem>
			// <ListItem
			// 	key={index}
			// 	title={item.name}
			// 	subtitle={item.description}
			// 	hideChevron={true}
			// 	leftAvatar= {{ source: require('./images/uthappizza.png')}}
			// />
		);
	};

	return (
		<FlatList
			data={props.dishes}
			renderItem={renderMenuItem}
			keyExtractor={(item) => item.id.toString()}
		/>
	);
}

export default Menu;
