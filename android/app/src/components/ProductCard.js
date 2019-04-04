import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList, Image} from 'react-native';

const ProductCard = (props) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Image source={{uri: props.imageSrc}} style={{width: 300, height: 300}}/>
            <View style={styles.cardBody}>{props.body}</View>

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

export default ProductCard;