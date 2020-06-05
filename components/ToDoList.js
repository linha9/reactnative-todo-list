import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Styles from '../styles/style.js';

const ToDoList = (props) => {
	return (
		<View style={Styles.bottomView}>
			<FlatList 
				data={props.todoList} 
				renderItem={itemData => <View style={Styles.card}><Text>{itemData.item.value}</Text></View>}
				style={Styles.listView} />
		</View>
	)
}

export default ToDoList;

