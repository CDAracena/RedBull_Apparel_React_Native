/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  ActivityIndicator,
  ScrollView
} from "react-native";
import ProductList from "./android/app/src/components/ProductList.js";
import FilteredProductList from "./android/app/src/components/FilteredProductList";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProductPage from "./android/app/src/components/ProductPage";
import Cart from "./android/app/src/components/Cart.js";
import CartIcon from "./android/app/src/components/CartIcon.js";
import CardPayment from "./android/app/src/components/CardPayment";

function HomeScreen(props) {
  const [products, setProducts] = useState([]);
  const [storeTitle, setTitle] = useState("Red Bull Apparel Finder");
  const [searchInput, setSearchInput] = useState("");
  const [productListType, setProductListType] = useState("everything");

  useEffect(() => {
    const fetchProducts = async () => {
      const promise = await fetch(
        "https://www.redbullshopus.com/products.json"
      );
      const data = await promise.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const renderProductList = () => {
    if (productListType === "filtered") {
      const filteredProducts = products.filter(
        product =>
          product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          product.product_type
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          product.tags.includes(searchInput)
      );
      return (
        <React.Fragment>
          {products && (
            <FilteredProductList
              products={filteredProducts}
              found={filteredProducts.length}
            />
          )}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {products && <ProductList products={products} />}
        </React.Fragment>
      );
    }
  };

  const updateProductListType = () => {
    if (searchInput) {
      setProductListType("filtered");
    } else {
      setProductListType("everything");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcome}> {storeTitle} </Text>
      <Text style={styles.subheader}>Search The Red Bull Inventory!</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a particular item"
        onChangeText={text => setSearchInput(text)}
        onChange={() => updateProductListType()}
      />
      <Text style={styles.searchText}>
        Searching for: {searchInput ? searchInput : "Everything"}
      </Text>

      {products ? (
        renderProductList()
      ) : (
        <View>
          <ActivityIndicator color="#880D1E" size="large" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#880D1E"
  },
  subheader: {
    fontSize: 15,
    textAlign: "center",
    color: "#880D1E",
    fontWeight: "600"
  },
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#880D1E",
    borderStyle: "solid"
  },
  searchText: {
    paddingTop: 10
  },
  mainContainer: {
    marginHorizontal: 10
  }
});

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: "Red Bull"
      })
    },
    ProductPage: { screen: ProductPage },
    Cart: {
      screen: Cart,
      navigationOptions: () => ({
        title: "Your Cart"
      })
    },
    CardPayment: { screen: CardPayment }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTintColor: "#880D1E",
      headerRight: <CartIcon />,
      headerRightContainerStyle: {
        marginRight: 10
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
