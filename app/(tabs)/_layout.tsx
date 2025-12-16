import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { useState } from "react";
import { DeviceEventEmitter } from "react-native";
import AddModal from "../../components/addModal";

export default function TabsLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  // We will use this to update index page with recipe addition on modal.
  const handleRecipeAdded = () => {
    DeviceEventEmitter.emit("event.updateRecipes");
  };

  return (
    <>
      {/* Adding modal here */}
      <AddModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSuccess={handleRecipeAdded}
      />
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="restaurant" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="recipe"
          options={{
            title: "Recipe",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pizza" size={size} color={color} />
            ),
          }}
          // Default tab keeps last param (like /recipe?id=3). This replaces link.
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              router.replace("/recipe");
            },
          }}
        />

        <Tabs.Screen
          name="add"
          options={{
            title: "Add",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" size={size} color={color} />
            ),
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setModalVisible(true);
            },
          }}
        />

        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="help-circle" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
