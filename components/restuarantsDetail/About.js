import React from "react";
import { View, Text, Image } from "react-native";

// const image =
//   "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80";
// const title = "Farmhouse Kitchen Thai Cuisine";
// const description = " Thi- Comfort Food * $$ *  4 (2913+)";
export default function About({ route }) {
  const { name, image, price, reviews, rating, categories } = route.params;
  const formattedCategories = categories.join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      {/* <Image source={{ uri: image }}  />
      <Text>About</Text> */}
      <RestuarantImage image={image} />
      <RestuarantTitle title={name} />
      <RestuarantDescription description={description} />
    </View>
  );
}

const RestuarantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 200 }} />
);

const RestuarantTitle = ({ title }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "900",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {title}
  </Text>
);

const RestuarantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {description}
  </Text>
);
