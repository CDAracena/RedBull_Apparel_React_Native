import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {removeFromCart} from '../../../../actions/shoppingCart.js'
import {Icon} from 'react-native-elements';


const Cart = (props) => {
    const [cartTotal, setCartTotal] = useState('')
    const {Cart} = props.shoppingCart
    const {deleteItem} = props
    return (
        <View style={styles.mainContainer}>
           <FlatList
           data={Cart}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({item})=> <View style={styles.listItemContainer}>
           <View style={{flexDirection: 'row', alignItems: 'center'}}>
           <Image source={{ uri: item.images[0].src}} style={{width: 66, height: 54}}/>
           <Text style={styles.itemTitle}>{item.title}</Text>
           <Text>${Number(item.price) * Number(item.itemCount) }</Text>
           <View style={{marginLeft: 5}}>
               <Icon name="trash" type="font-awesome" color="#880D1E" component={TouchableOpacity} onPress={() => deleteItem(item.id)}/>
               </View>
           </View>
           <View style={styles.counterContainer}>
           <View style={{marginRight: 10}}>
           <Icon name="plus-square" type="font-awesome" color="#880D1E" component={TouchableOpacity} />
           </View>
           <Text style={{fontWeight: '600'}}>{item.itemCount}</Text>
           <View style={{marginLeft: 10}}>
           <Icon name="minus-square" type="font-awesome" color="#880D1E" component={TouchableOpacity} />
           </View>
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
        deleteItem: (itemId) => dispatch(removeFromCart(itemId))
    }
}

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#880D1E',
       paddingBottom: 10
    },
    mainContainer: {
        marginTop: 10,
        marginHorizontal: 15
    },
    itemTitle: {
        width: 100
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1
    },
 
})

export default connect(mapStateToProps, mapDispatchToProps) (Cart);