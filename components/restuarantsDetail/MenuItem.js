import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
export default function MenuItem() {
  const foods = [
    {
      title: "Lasagna",
      description: "with butter lettuce,tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://www.simplyrecipes.com/thmb/Hm1DTQDZ9Dhkl7zTUkD6idFKmT8=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-1-6173a71bfd1347aa8d7659150e87b8f4.jpg",
    },
    {
      title: "Tandoori Chicken",
      description: "with butter lettuce,tomato and sauce bechamel",
      price: "$11.50",
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1.jpg",
    },
    {
      title: "Chilaquiles",
      description: "with butter lettuce,tomato and sauce bechamel",
      price: "$14.50",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Portada-chilaquiles-rojos.jpg",
    },
    {
      title: "Chilaquiles",
      description: "wiht butter lettuce,tomato and sauce bechamel",
      price: "$14.50",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Portada-chilaquiles-rojos.jpg",
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
            />
            <FoodInfo
              title={food.title}
              description={food.description}
              price={food.price}
            />
            <FoodImage image={food.image} />
          </View>
          <Divider width={1} orientation="horizontal" />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = ({ title, description, price }) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{title}</Text>
    <Text>{description}</Text>
    <Text>{price}</Text>
  </View>
);

const FoodImage = ({ image }) => (
  <View>
    <Image
      source={{ uri: image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
