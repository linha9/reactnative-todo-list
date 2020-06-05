import React from 'react';
import { View } from 'react-native';

import Styles from '../styles/style.js'

import ToDoList from './ToDoList.js';
import ToDoInput from './ToDoInput.js';

const ListC = (props) => {
    const [keyCount, setKeyCount] = React.useState(0);
    const [todoList, setTodoList] = React.useState([]);
    
    function onAddPress(text) {
        setTodoList([...todoList, {key: keyCount.toString(), value: text}]);
        console.log(todoList);
        setKeyCount(keyCount + 1);
    }

    return (
        <View style={Styles.container}>
            <ToDoInput onAddPress={onAddPress} />
            <ToDoList todoList={todoList} />
        </View>
    );
}

export default ListC;