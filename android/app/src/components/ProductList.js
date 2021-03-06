import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList, Image, ScrollView} from 'react-native';
import ProductCard from './ProductCard';
import HTML from 'react-native-render-html';
import { withNavigation } from 'react-navigation';


function ProductList(props){

    return (
        <View style={styles.productListContainer}>
            <FlatList
            data={props.products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) =>
            <ProductCard title={item.title}
            item={item}
            body={<HTML html={item.body_html ? item.body_html : 'No Data Available Yet'}/>}
            imageSrc={ item.images[0] ? item.images[0].src : ''}
            />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    productListContainer: {
      justifyContent: 'center',
      marginTop: 10
    }
})

export default withNavigation(ProductList);
