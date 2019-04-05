import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import HTML from 'react-native-render-html';

export default function ProductPage(props) {
    const {navigation} = props
    console.log(navigation.state.params)
    return (
    <View style={styles.cardContainer}>
    <Text style={styles.cardTitle}>{navigation.state.params.title}</Text>
    <View style={styles.cardBody}>{props.body}</View>
    <Text>This is the product page component </Text>

</View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    cardTitle: {
        color: '#880D1E',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 5
    },
    cardBody: {
        paddingLeft: 5
    }
})
