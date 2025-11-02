// 23520912_Từ Lý Mai_Lab 1.2: PostHeader Component
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const PostHeader = ({ avatar, username, timestamp = "2 giờ trước" }) => {
  return (
    <View style={styles.postHeader}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#050505",
  },
  timestamp: {
    fontSize: 12,
    color: "#65676B",
    marginTop: 2,
  },
});

export default PostHeader;
