import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function Page() {
  const { slug } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Text>
        <Link href="/">Home</Link>Blog post: {slug}
      </Text>
    </SafeAreaView>
  );
}
