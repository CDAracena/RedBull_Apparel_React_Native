/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import ProductList from './android/app/src/components/ProductList.js';
import {Container, Title, Header} from 'native-base';

function App(props) {

  const [products, setProducts] = useState([])
  const [storeTitle, setTitle] = useState('Red Bull Apparel Finder')
  const [searchInput, setSearchInput] = useState('Everything')

  useEffect( () => {
    const fetchProducts = async () => {
      const promise = await fetch('https://www.redbullshopus.com/products.json')
      const data = await promise.json()
      setProducts(data.products)   
    }
    fetchProducts()

  }, [])


  return (
    <View>
      <Text style={styles.welcome}> {storeTitle} </Text>
      <Text style={styles.subheader}>Search The Red Bull Inventory!</Text>
      <TextInput
      style={styles.searchInput}
      placeholder="Search for a particular item"
      onChangeText={(text) => setSearchInput(text)}
      />
      <Text style={styles.searchText}>Searching for: {searchInput}</Text>
     {products && <ProductList products={products}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#880D1E'
  },
  subheader: {
    fontSize: 15,
    textAlign: 'center',
    color: '#880D1E',
  },
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#880D1E',
    borderStyle: 'solid',
    marginLeft: 5
  },
  searchText: {
    paddingTop: 10,
    paddingLeft: 5
  }
});

export default App