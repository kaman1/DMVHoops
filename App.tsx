import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import VideoScreen from "./screens/VideoScreen/VideoScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return <ActivityIndicator />;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <VideoScreen />
        {/* <Navigation colorScheme={"dark"} /> */}
      </SafeAreaProvider>
    );
  }
}
