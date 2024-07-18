import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import FlatlistComponent from "../../../components/FlatlistComponet";
import data from "../../../mockData/storiesList.json";

export default function Home() {
  const navigation = useNavigation();
  const router = useRouter();

  const renderCategory = ({ item }) => (
    <FlatlistComponent
      key={item.name}
      data={item}
      onPress={(el) => console.log(el)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
