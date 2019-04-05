import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight} from 'react-native';
import HTML from 'react-native-render-html';

export default function ProductPage(props) {
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
    <Image source={{uri: item.images[itemPosition].src}} style={{width: 300, height: 300}}/>
    </TouchableHighlight>
    <View style={styles.cardBody}>
    <HTML html={item.body_html}/>
    </View>
</View>
<Text style={styles.variantHeader}> {item.variants ? 'Different Variants': ''} </Text>
    <View style={styles.variantWrapper}>
        {item.variants.length > 1 && 
        item.variants.map((variant, idx) =>
        <View key={variant.id}> 
        <Text >{variant.title}</Text>
        <Image source={{uri: variant.featured_image.src}} 
        style={{width: 300, height: 300}}/>
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
        alignItems:'center'
    }
})
