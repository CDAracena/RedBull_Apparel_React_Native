import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Button} from 'react-native';
import HTML from 'react-native-render-html';
import {connect} from 'react-redux';
import {addToCart} from '../../../../actions/shoppingCart.js'

function ProductPage(props) {
    const {item} = props.navigation.state.params
    const [itemPosition, setProductPosition] = useState(0)
    const setImgPosition = () => itemPosition === 0 ? setProductPosition(1) : setProductPosition(0)

    return (
    <ScrollView>
    <View style={styles.cardContainer}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <TouchableHighlight 
    onPress={setImgPosition}
    underlayColor='lightgray'
    >
    <Image source={{uri: item.images[itemPosition].src}} style={styles.mainImg}/>
    </TouchableHighlight>
    <View style={styles.cardBody}>
    <HTML html={item.body_html}/>
    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 5}}>
    <Button 
    title="Add To Cart"
    color="#880D1E"
    onPress={() => props.addItem(item)}
    />
    </View>
    </View>
</View>
<Text style={styles.variantHeader}> {item.variants ? 'Different Variants': ''} </Text>
    <View style={styles.variantWrapper}>
        {item.variants.length > 1 && 
        item.variants.map((variant, idx) =>
        <View key={variant.id} style={styles.variantContainer}> 
        <Text>{variant.title}</Text>
        <Image source={{uri: variant.featured_image.src}} 
        style={{width: 300, height: 300}}/>
        <View style={styles.variantButtonContainer}>
        <Button 
        title="Add To Cart"
        color="#880D1E"
        onPress={() => props.addItem(item)}/>
        </View>
         </View>
        )}
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
        paddingBottom: 5,
        paddingTop: 10
    },
    cardBody: {
        paddingLeft: 5
    },
    variantHeader: {
        color: '#880D1E',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 10
        
    },
    variantWrapper: {
        alignItems:'center',
    },
    mainImg: {
        width: 300,
        height: 400,
    },
    variantButtonContainer: {
        alignItems: 'center',
        marginBottom: 5,
    },
    variantContainer: {
        elevation: 2, 
        backgroundColor: 'white', 
        width: '90%', 
        alignItems: 'center',
    }
})

const mapStateToProps = ({shoppingCart}) => {
    return {
        shoppingCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: (item) => dispatch(addToCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)