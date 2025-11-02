// 23520912_Từ Lý Mai_Lab 1.2: PostItem Component
import React from "react";
import { View, StyleSheet } from "react-native";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostStats from "./PostStats";
import PostActions from "./PostActions";

const PostItem = ({ post, onLike, onComment, onShare }) => {
  if (!post) return null;

  return (
    <View style={styles.postContainer}>
      <PostHeader avatar={post.avatar} username={post.username} />

      <PostContent content={post.content} image={post.image} />

      <PostStats
        likes={post.likes}
        comments={post.comments}
        shares={post.shares}
      />

      <View style={styles.separator} />

      <PostActions
        onLike={() => onLike(post.id)}
        onComment={() => onComment(post.id)}
        onShare={() => onShare(post.id)}
        isLiked={post.isLiked}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 0,
    marginVertical: 4,
    borderRadius: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  separator: {
    height: 1,
    backgroundColor: "#E4E6EB",
    marginHorizontal: 12,
  },
});

export default PostItem;
