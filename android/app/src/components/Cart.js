import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';


const Cart = (props) => {
    const {Cart} = props.shoppingCart
    return (
        <View style={styles.mainContainer}>
           <FlatList
           data={Cart}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({item})=> <View style={styles.listItemContainer}>
           <Image source={{ uri: item.images[0].src}} style={{width: 66, height: 54}}/>
           <Text style={styles.itemTitle}>{item.title}</Text>
           <Text>${item.price}</Text>
           <View style={styles.counterContainer}>
           <Icon name="plus-square" type="font-awesome" color="#880D1E" component={TouchableOpacity}/>
           <Text>{item.itemCount}</Text>
           <Icon name="minus-square" type="font-awesome" color="#880D1E" component={TouchableOpacity}/>
           </View>
           </View>}/>
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

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainContainer: {
        marginTop: 10
    },
    itemTitle: {
        width: 100
    },
    counterContainer: {
        flexDirection: 'row'
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Cart);