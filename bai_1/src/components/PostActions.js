// 23520912_Từ Lý Mai_Lab 1.2: PostActions Component
import React from "react";
import { View, StyleSheet } from "react-native";
import ActionButton from "./ActionButton";

const PostActions = ({ onLike, onComment, onShare, isLiked = false }) => {
  return (
    <View style={styles.actionsContainer}>
      <ActionButton
        iconName="thumbs-up"
        text="Likes"
        onPress={onLike}
        isActive={isLiked}
      />
      <ActionButton
        iconName="comment-alt"
        text="Comments"
        onPress={onComment}
      />
      <ActionButton iconName="share" text="Shares" onPress={onShare} />
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
  },
});

export default PostActions;
