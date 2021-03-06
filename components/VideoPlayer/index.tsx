import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";

type VideoPlayerProps = {
  videoURI: string;
  thumbnailURI: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
  const { videoURI, thumbnailURI } = props;

  return (
    <View>
      <Video
        style={{ width: "100%", aspectRatio: 16 / 9 }}
        source={{ uri: videoURI }}
        posterSource={{ uri: thumbnailURI }}
        posterStyle={{ resizeMode: "cover" }}
        usePoster={false}
        resizeMode="contain"
        useNativeControls
      />
    </View>
  );
};

export default VideoPlayer;
