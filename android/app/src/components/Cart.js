import React, { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import { connect } from "react-redux";
import {
  removeFromCart,
  increaseItemCount,
  decreaseItemCount
} from "../../../../actions/shoppingCart.js";
import { Icon } from "react-native-elements";
import CardPayment from "./CardPayment.js";

const Cart = props => {
  const [openCardPayment, setCardPayment] = useState(false);

  const { Cart } = props.shoppingCart;
  const { deleteItem, increaseItemCount, decreaseItemCount } = props;
  const { navigate } = props.navigation;

  const increaseCount = itemId => {
    increaseItemCount(itemId);
  };

  const decreaseCount = item => {
    if (item.itemCount < 2) {
      deleteItem(item.id);
      return;
    }
    decreaseItemCount(item.id);
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={Cart}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{ uri: item.images[0].src }}
                style={{ width: 66, height: 54 }}
              />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={{ fontWeight: "600" }}>
                ${item.price * item.itemCount}
              </Text>
              <View style={{ marginLeft: 10 }}>
                <Icon
                  name="trash"
                  type="font-awesome"
                  color="#880D1E"
                  component={TouchableOpacity}
                  onPress={() => deleteItem(item.id)}
                />
              </View>
            </View>
            <View style={styles.counterContainer}>
              <View style={{ marginRight: 10 }}>
                <Icon
                  name="plus-square"
                  type="font-awesome"
                  color="#880D1E"
                  component={TouchableOpacity}
                  onPress={() => increaseCount(item.id)}
                />
              </View>
              <Text style={{ fontWeight: "600" }}>{item.itemCount}</Text>
              <View style={{ marginLeft: 10 }}>
                <Icon
                  name="minus-square"
                  type="font-awesome"
                  color="#880D1E"
                  component={TouchableOpacity}
                  onPress={() => decreaseCount(item)}
                />
              </View>
            </View>
          </View>
        )}
      />
      {Cart.length >= 1 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>
            total: $
            {Cart.map(item => item.price * item.itemCount).reduce(
              (acc, curr) => acc + curr
            )}{" "}
          </Text>
        </View>
      )}
      {Cart.length >= 1 && (
        <View style={{ marginTop: 20 }}>
          <Button
            title="Checkout"
            color="#880D1E"
            onPress={() => setCardPayment(!openCardPayment)}
          />
        </View>
      )}
      {openCardPayment && <CardPayment />}
    </View>
  );
};

const mapStateToProps = ({ shoppingCart }) => {
  return {
    shoppingCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: itemId => dispatch(removeFromCart(itemId)),
    increaseItemCount: id => dispatch(increaseItemCount(id)),
    decreaseItemCount: id => dispatch(decreaseItemCount(id))
  };
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#880D1E",
    paddingVertical: 10
  },
  mainContainer: {
    marginTop: 10,
    marginHorizontal: 15
  },
  itemTitle: {
    width: 140,
    marginLeft: 10,
    fontWeight: "600",
    color: "#880D1E"
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1
  },
  totalText: {
    textTransform: "uppercase",
    color: "#40C41F",
    fontWeight: "700",
    textAlign: "right"
  },
  totalContainer: {
    marginTop: 15
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
