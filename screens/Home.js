import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import BottomTabs from "../components/Home/BottomTabs";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
// import { Divider } from "react-native-elements";
import RestaurantItems, {
  localRestaurants,
} from "../components/Home/RestaurantItems";
import SearchBar from "../components/Home/SearchBar";

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Diago");
  const getRestaurantsFromYelp = async () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiago";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    const res = await fetch(yelpUrl, apiOptions);
    const json = await res.json();
    // console.log(json);
    return setRestaurantData(json.businesses);
  };
  // useEffect(() => {
  //   getRestaurantsFromYelp();
  // }, [city]);
  // console.log(restaurantData);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 20 }}>
        <HeaderTabs />
        <SearchBar cityHandle={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>{city}</Text>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      {/* <Divider orientation="horizontal" /> */}
      <BottomTabs />
    </SafeAreaView>
  );
}
