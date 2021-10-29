import React from "react";
import { View, Text } from "react-native";
import About from "../components/restuarantsDetail/About";
import MenuItem from "../components/restuarantsDetail/MenuItem";
import { Divider } from "react-native-elements";
import ViewCart from "../components/restuarantsDetail/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem />
      <ViewCart />
    </View>
  );
}
