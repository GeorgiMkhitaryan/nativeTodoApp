import React from 'react'
import {View, StyleSheet} from 'react-native'
import { THEME } from '../../theme'

export const TodoCart = (props) => <View style={styles.default}>{props.children}</View>

const styles = StyleSheet.create({
    default: {
        padding: 20,
        borderWidth: 2,
        borderColor: THEME.GREY_COLOR,
        marginBottom: 20
    }
})