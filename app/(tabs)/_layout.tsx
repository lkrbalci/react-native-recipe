import { router, Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen
        name="recipe"
        options={{ title: "Recipe" }}
        // Default tab keeps last param (like /recipe?id=3). This replaces link.
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.replace("/recipe");
          },
        }}
      />
      <Tabs.Screen name="about" options={{ title: "About" }} />
    </Tabs>
  );
}
