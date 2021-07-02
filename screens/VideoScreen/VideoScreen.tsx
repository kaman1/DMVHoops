import React from "react";
import { View, SafeAreaView, Image, Text, FlatList } from "react-native";
import styles from "./styles";
import video from "../../assets/data/video.json";
import videos from "../../assets/data/videos.json";
import { AntDesign } from "@expo/vector-icons";
import VideoListItem from "../../components/VideoListItem";
import VideoPlayer from "../../components/VideoPlayer";

const VideoScreen = () => {
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
    <View>
      {/** video Player */}
      <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />
      <View style={styles.middleContainer}>
        <Text style={styles.tags}>{video.tags} </Text>
        <Text style={styles.title}>{video.title} </Text>
        <Text style={styles.subTitle}>
          {video.user.name} {viewsString} {video.createdAt}
        </Text>
      </View>
      {/** action list */}
      <View style={styles.actionListContainer}>
        <View style={styles.actionListItem}>
          <AntDesign name="like1" size={20} color="white" />
          <Text style={styles.actionText}>{video.likes}</Text>
        </View>
        <View style={styles.actionListItem}>
          <AntDesign name="dislike2" size={20} color="white" />
          <Text style={styles.actionText}>{video.likes}</Text>
        </View>
        <View style={styles.actionListItem}>
          <AntDesign name="message1" size={20} color="white" />
          <Text style={styles.actionText}>{video.likes}</Text>
        </View>
      </View>
      {/** video info */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderColor: "#3d3d3d",
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
      >
        <Image style={styles.avatar} source={{ uri: video.user.image }} />
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <Text style={{ color: "white", fontSize: 18 }}>
            {video.user.name}
          </Text>
          <Text
            style={{ color: "lightgrey", fontSize: 14, fontWeight: "bold" }}
          >
            {video.user.subscribers} Subscribers
          </Text>
        </View>
        <Text
          style={{
            color: "red",
            fontSize: 18,
            fontWeight: "bold",
            padding: 10,
          }}
        >
          Subscribe
        </Text>
      </View>
      {/** video comment */}
      <View style={{ padding: 10, marginVertical: 10 }}>
        <Text style={{ color: "white" }}>Comments 333</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Image
            style={{ width: 30, height: 30, borderRadius: 15 }}
            source={{ uri: video.user.image }}
          />
          <View style={{ marginHorizontal: 10, flex: 1 }}>
            <Text style={{ marginLeft: 10, color: "white" }}>
              In this video, you will learn React Native from scratch by
              building a cross-platform (ios and android) YouTube mobile
              application clone.
            </Text>
          </View>
        </View>
      </View>
      {/** video recommended */}
    </View>
  );
};

const videoScreenRecommendation = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#141414", flex: 1 }}>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
        ListHeaderComponent={VideoScreen}
      />
    </SafeAreaView>
  );
};

export default videoScreenRecommendation;
