import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAllRecipes } from "../database/api";
import { Recipe } from "../database/db";

export default function Index() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const recipesData = getAllRecipes();
    setRecipes(recipesData);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "#0F172A",
        alignItems: "center",
      }}
    >
      <Text style={styles.headerTop}>Getting Hungry? Nice...</Text>
      <Text style={styles.header2}>Here Are Some Options:</Text>
      <View style={styles.listContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={recipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              style={styles.listItem}
              onPress={() => {
                router.push({
                  pathname: "/recipe",
                  params: { id: item.id },
                });
              }}
            >
              <Image
                source={item.imageUrl}
                style={styles.imageStyles}
                contentFit="cover"
              />
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <Text style={styles.recipeDescription}>{item.description}</Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTop: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#F8FAFC",
  },
  header2: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#94A3B8",
  },
  listContainer: { flex: 1, maxWidth: 640 },
  listItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 24,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#E2E8F0",
  },
  recipeDescription: {
    fontSize: 16,
    color: "#CBD5E1",
  },
  imageStyles: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
});
