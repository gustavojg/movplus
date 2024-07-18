import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useLocalSearchParams } from "expo-router";
import data from "../../../../mockData/story.json";

export default function StoryDetail() {
  const { slug } = useLocalSearchParams();
  console.log("Detail", slug);

  const { cover, title } = data;

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: cover }} style={styles.backgroundImage}>
        <SafeAreaView style={{ flex: 1 }}>
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.7)"]}
            style={styles.gradient}
          >
            <View style={{ flex: 1, padding: 50 }}>
              <Text style={styles.title}>{title}</Text>
              <Link href={`main/Story/StoryPage/${slug}`} asChild>
                <TouchableOpacity>
                  <Text style={styles.cta}>Read this story</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cta: { backgroundColor: "white", fontSize: 24, color: "black" },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  gradient: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
});
