import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList, Image, Button, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';


const ProductCard = (props) => {
    const {navigate} = props.navigation
    const {item} = props

    const visitProductPage = () => {
        navigate('ProductPage', {
           item
        })
    }
    return (
        <ScrollView>
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Image source={{uri: props.imageSrc}} style={{width: 300, height: 300}}/>
            <View style={styles.cardBody}>{props.body}</View>
            <Button
            style={styles.productButton}
            title="See Product"
            onPress={() => visitProductPage()}
            color='#880D1E'/>
        </View>
        </ScrollView>
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
    },
    productButton: {
        marginBottom: 10
    }
})

export default withNavigation(ProductCard);