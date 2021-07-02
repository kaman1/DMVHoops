import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  thumbnail: { width: "100%", aspectRatio: 16 / 9 },
  timerContainer: {
    backgroundColor: "#00000099",
    height: 25,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    position: "absolute",
    right: 5,
    bottom: 5,
  },
  time: {
    color: "#ffff",
    fontWeight: "bold",
  },
  videoCard: {},
  titleRow: {
    flexDirection: "row",
    padding: 10,
  },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  middleContainer: {
    marginHorizontal: 16,
    flex: 1,
  },
  title: { color: "#ffff", fontSize: 16, fontWeight: "500", marginBottom: 5 },
  subTitle: { color: "grey", fontSize: 14, fontWeight: "500" },
});

export default styles;
