import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList, Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {withNavigation} from 'react-navigation'


export const CartIcon = (props) => (
    <Icon name="shopping-cart"
    component={TouchableOpacity}  
    color="#880D1E"
    type="material"
    onPress={() => props.navigation.navigate('Cart')}
    />
)

export default withNavigation(CartIcon)