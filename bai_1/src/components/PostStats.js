// 23520912_Từ Lý Mai_Lab 1.2: PostStats Component
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostStats = ({ likes, comments, shares }) => {
  return (
    <View style={styles.statsContainer}>
      <Text style={styles.statsText}>{likes} Likes</Text>
      <View style={styles.statsRight}>
        <Text style={styles.statsText}>{comments} Comments</Text>
        <Text style={styles.statsText}>{shares} Shares</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  statsText: {
    fontSize: 13,
    color: "#65676B",
    marginRight: 12,
  },
  statsRight: {
    flexDirection: "row",
  },
});

export default PostStats;
