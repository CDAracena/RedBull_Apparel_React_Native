import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList, Image, ScrollView, Button} from 'react-native';
import {connect} from 'react-redux';


const Cart = (props) => {
    const {Cart} = props.shoppingCart
    return (
        <View>
           <FlatList
           data={Cart}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({item})=> <View><Image source={{uri: item.images[0].src}} style={{width: 66, height: 54}}/><Text>{item.title}</Text></View>}/>
        </View>
    )
}

const mapStateToProps = ({shoppingCart})=> {
    return {
        shoppingCart
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);