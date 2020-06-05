import React from 'react';
import { View, TextInput, Button } from 'react-native';
import Styles from '../styles/style.js'

const ToDoInput = (props) => {
	const [text, setText] = React.useState('');

	return (
		<View style={Styles.topView}>
			<TextInput placeholder='Adicione sua tarefa' onChangeText={(newText) => setText(newText)} style={Styles.textInput}/>
			<Button title='Add' onPress={props.onAddPress.bind(this, text)} />
		</View>
	)
}

export default ToDoInput;