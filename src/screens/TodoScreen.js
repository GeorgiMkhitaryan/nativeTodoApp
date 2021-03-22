import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { TodoCart } from '../components/ui/TodoCart';
import { THEME } from '../theme';

export const Todoscreen = ({goBack, todo, onRemove}) => {
    const removeHandler = () => {
        onRemove(todo.id);
        goBack()
    }
    return (
        <View>
            <TodoCart>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Edite'/>
            </TodoCart>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='Back' onPress={goBack} color={THEME.GREY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button title='Remove' color={THEME.DENGER_COLOR} onPress={removeHandler}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }
})