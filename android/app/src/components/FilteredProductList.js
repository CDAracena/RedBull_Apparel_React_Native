import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList, Image, ScrollView} from 'react-native';
import ProductCard from './ProductCard';
import HTML from 'react-native-render-html';
import { withNavigation } from 'react-navigation';


function ProductList(props){
    return (
        <View style={styles.productListContainer}>
           
        <Text>Found ({props.found}) Items</Text>
       {/* <ScrollView
       style={{flex: 1}}>
           {props.products.map((product, idx) => (
               <ProductCard key={idx} title={product.title}
               item={product}
               body={<HTML html={product.body_html}/>}
            imageSrc={product.images[0] ? product.images[0].src : ''}/>
           ))}
       </ScrollView> */}
            <FlatList
            data={props.products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) =>
            <ProductCard title={item.title}
            item={item}
            body={<HTML html={item.body_html}/>}
            imageSrc={item.images[0] ? item.images[0].src : ''}
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
