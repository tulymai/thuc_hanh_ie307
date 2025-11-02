// 23520912_Từ Lý Mai_Lab 1.2: PostContent Component
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PostContent = ({ content, image }) => {
  return (
    <>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{content}</Text>
      </View>
      {image && (
        <Image
          source={typeof image === "number" ? image : { uri: image }}
          style={styles.postImage}
          resizeMode="cover"
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  contentText: {
    fontSize: 15,
    color: "#050505",
    lineHeight: 20,
  },
  postImage: {
    width: "100%",
    height: 300,
    backgroundColor: "#E4E6EB",
  },
});

export default PostContent;
