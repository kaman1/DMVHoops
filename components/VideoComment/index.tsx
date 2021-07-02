import React from "react";
import { View, Text, Image } from "react-native";

interface VideoCommentProps {
  comment: {
    id: string;
    comment: string;
    createdAt: string;
    likes: number;
    dislikes: number;
    replies: number;
    user: {
      name: string;
      image: string;
    };
  };
}

const VideoComment = ({ comment }: VideoCommentProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <Image
        style={{ width: 30, height: 30, borderRadius: 15 }}
        source={{ uri: comment.user.image }}
      />
      <View style={{ marginHorizontal: 10, flex: 1 }}>
        <Text style={{ marginLeft: 10, color: "white" }}>
          {comment.comment}
        </Text>
      </View>
    </View>
  );
};

export default VideoComment;
