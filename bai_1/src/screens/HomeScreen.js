// 23520912_Từ Lý Mai_Lab 1.2: Home Screen
import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostItem from "../components/PostItem";

import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";
export default function HomeScreen() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Từ Lý Mai",
      avatar: avatar1,
      content: "Ôi dui quá xá là dui",
      image: post1,
      likes: 103,
      comments: 16,
      shares: 7,
      isLiked: false,
    },
    {
      id: 2,
      username: "Mèo con cộc cằn",
      avatar: avatar2,
      content: "Ăn gì mà khó ở quá è 😾😾😾",
      image: post2,
      likes: 211,
      comments: 18,
      shares: 10,
      isLiked: false,
    },
    {
      id: 3,
      username: "Anh Tí đẹp choai",
      avatar: avatar3,
      content:
        "Hôm nay gió nhẹ hiu hiu, anh Tí chúc cả nhà buổi sáng dui dẻ nhó 🐒",
      image: post3,
      likes: 4170,
      comments: 663,
      shares: 58,
      isLiked: false,
    },
  ]);

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleComment = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments + 1,
            }
          : post
      )
    );
  };

  const handleShare = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              shares: post.shares + 1,
            }
          : post
      )
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor="#1877F2" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingVertical: 8,
  },
});
