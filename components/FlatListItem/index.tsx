import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface FlatListItemProps {
  id: string;
  image: string;
  title: string;
  onPress: (id: any) => void;
}

const HighlightedText = ({ children }) => {
  return (
    <View style={styles.highlightContainer}>
      <Text style={styles.highlightText}>
        <Text style={styles.highlightMarker}>{children}</Text>
      </Text>
    </View>
  );
};

const FlatListItem: React.FC<FlatListItemProps> = ({
  image,
  title,
  onPress,
  id,
}) => {
  return (
    <Link href={`main/Story/StoryDetail/${id}`} asChild>
      <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
        <ImageBackground source={{ uri: image }} style={styles.imageBackground}>
          <View style={styles.overlay}>
            <Text style={styles.title}>
              <HighlightedText>{title}</HighlightedText>
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  highlightContainer: {
    position: "relative",
  },
  highlightText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  highlightMarker: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "yellow",
    zIndex: -1,
  },
  imageBackground: {
    width: 200,
    height: 280,
    borderRadius: 18,
    overflow: "hidden",
  },
  overlay: {
    width: 200,
    height: 300,
    borderRadius: 20,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  title: {
    fontSize: 18,
    textDecorationStyle: "solid",
  },
});

export default FlatListItem;
