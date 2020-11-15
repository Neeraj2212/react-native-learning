import React from "react";
import { View, FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

function Menu(props) {
	const renderMenuItem = ({ item, index }) => {
		return (
			<ListItem key={index} onPress={() => props.onPress(item.id)}>
				<Avatar rounded source={require("./images/uthappizza.png")} />
				<ListItem.Content>
					<ListItem.Title>{item.name}</ListItem.Title>
					<ListItem.Subtitle>{item.description}</ListItem.Subtitle>
				</ListItem.Content>
				<ListItem.Chevron />
			</ListItem>
			//  <ListItem
			//               key={index}
			//               title={item.name}
			//               subtitle={item.description}
			//               hideChevron={true}
			//               onPress={() => props.onPress(item.id)}
			//               leftAvatar={{ source: require('./images/uthappizza.png')}}
			//             />
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
