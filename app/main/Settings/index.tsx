import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Purchases from 'react-native-purchases';

const Settings = () => {
  const [subscriptionType, setSubscriptionType] = useState("");

  const handleSubscriptionChange = (type: string) => {
    setSubscriptionType(type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscription Settings</Text>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleSubscriptionChange("free")}
      >
        <Text style={styles.optionText}>Free</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleSubscriptionChange("basic")}
      >
        <Text style={styles.optionText}>Basic</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleSubscriptionChange("plus")}
      >
        <Text style={styles.optionText}>Plus</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleSubscriptionChange("total")}
      >
        <Text style={styles.optionText}>Total</Text>
      </TouchableOpacity>
      <Text style={styles.selectedOption}>
        Selected Subscription: {subscriptionType}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
  selectedOption: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Settings;
