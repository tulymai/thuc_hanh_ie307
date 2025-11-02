// 23520912_Từ Lý Mai_Lab 1.2: ActionButton Component
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ActionButton = ({
  iconName,
  text,
  onPress,
  isActive = false,
  activeColor = "#1877F2",
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.actionButton,
        pressed && styles.actionButtonPressed,
      ]}
    >
      <Icon
        name={iconName}
        size={18}
        color={isActive ? activeColor : "#65676B"}
      />
      <Text style={[styles.actionButtonText, isActive && styles.likedText]}>
        {"  "}
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 4,
  },
  actionButtonPressed: {
    backgroundColor: "#F0F2F5",
  },
  actionButtonText: {
    fontSize: 15,
    color: "#65676B",
    fontWeight: "600",
  },
  likedText: {
    color: "#1877F2",
    fontWeight: "bold",
  },
});

export default ActionButton;
