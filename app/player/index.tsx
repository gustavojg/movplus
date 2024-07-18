import React, { useRef } from "react";
import { View, Platform } from "react-native";
import { Video } from "expo-av";
import { useFocusEffect } from "@react-navigation/native";

export default function player() {
  const videoUri = Platform.select({
    ios: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    android:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    default:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  });
  const videoRef = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      videoRef.current?.playAsync();
      return () => {
        videoRef.current?.pauseAsync();
        videoRef.current?.setPositionAsync(0);
      };
    }, [])
  );
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      <Video
        ref={videoRef}
        source={{ uri: videoUri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        isLooping
        useNativeControls
        style={{ width: 600, height: 350 }}
      />
    </View>
  );
}
