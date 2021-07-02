import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  videoPlayer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  middleContainer: {
    margin: 16,
  },
  actionListContainer: {
    flexDirection: "row",
  },
  actionListItem: {
    width: 70,
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  tags: {
    color: "#ff99",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  actionText: {
    color: "white",
  },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  title: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    marginVertical: 10,
  },
  subTitle: { color: "grey", fontSize: 14, fontWeight: "500" },
});

export default styles;
