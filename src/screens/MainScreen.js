import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { AddTodo } from '../components/AddTodo.js'
import { Todo } from '../components/Todo.js'

export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    return (
        <View>
            <AddTodo
                onSubmit={addTodo}
            />
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={ item => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}></Todo>}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})