import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'
import { THEME } from '../theme'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState("")
    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value);
            setValue('')
        }else {
            Alert.alert('Todo text cannot be empty')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Add Text Todo'
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Button title='Add' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        width: '70%',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        borderStyle: 'solid',
        padding: 10
    }
})