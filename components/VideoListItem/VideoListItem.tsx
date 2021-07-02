import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

type VideoListitemProps = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    views: number;
    user: {
      name: string;
      image?: string;
    };
  };
};

const VideoListItem = (props: VideoListitemProps) => {
  const { video } = props;

  //Minute from Video
  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;

  //Views number
  let viewsString = video.views.toString();
  if (video.views > 1_000_000) {
    viewsString = (video.views / 1_000_000).toFixed(1) + "m";
  } else if (video.views / 1_000) {
    viewsString = (video.views / 1_000).toFixed(1) + "k";
  }

  return (
    <View style={styles.videoCard}>
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: video.thumbnail,
          }}
        />
        <View style={styles.timerContainer}>
          <Text style={styles.time}>
            {minutes}:{seconds < 10 ? "0" : ""}
            {seconds}
          </Text>
        </View>
      </View>

      <View style={styles.titleRow}>
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />
        <View style={styles.middleContainer}>
          <Text style={styles.title}>{video.title} </Text>
          <Text style={styles.subTitle}>
            {video.user.name} {viewsString} {video.createdAt}
          </Text>
        </View>
        <Entypo name="dots-three-vertical" size={18} color="#ffff" />
      </View>
    </View>
  );
};

export default VideoListItem;
