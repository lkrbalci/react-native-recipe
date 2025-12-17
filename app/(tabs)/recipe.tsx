/* Single Recipe Page. If not directed from index page, hydrated with random
 * recipe. Else, with the recipe clicked.
 */

import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Stack, useFocusEffect, useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  getAllRecipes,
  getRandomRecipe,
  getRecipeById,
  getRecipeCount,
} from "../../database/api";
import { Recipe } from "../../database/db";

type Props = {};

const recipe = (props: Props) => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [recipeId, setRecipeId] = useState<string | undefined>(id);
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

  // Syncs the id
  useEffect(() => {
    if (id) {
      setRecipeId(id);
    } else {
    }
  }, [id]);

  // For hydration
  useFocusEffect(
    useCallback(() => {
      if (recipeId) {
        const data = getRecipeById(recipeId);
        setRecipe(data);
      } else {
        setRecipe(getRandomRecipe);
      }
    }, [recipeId]) // Only listen to recipeId now
  );

  const handleDicePress = () => {
    const recipeCount = getRecipeCount();
    const recipes = getAllRecipes();
    // -1 is a dirty way to avoid overflows. Ok for demo app I guess.
    let index = Math.floor(Math.random() * (recipeCount - 1));
    let recipe = recipes[index];
    if (recipe.id === recipeId) {
      index += 1;
      recipe = recipes[index];
    }
    setRecipe(recipe);
  };

  return (
    <>
      <Stack.Screen options={{ title: `${recipe?.title}` }} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: "#0F172A",
        }}
      >
        <View style={styles.recipeContainer}>
          <View style={styles.descriptipnContainer}>
            <Text style={styles.descriptionText}>{recipe?.description}</Text>
            <Pressable
              onPress={handleDicePress}
              style={({ pressed }) => [
                { marginRight: 10, opacity: pressed ? 0.6 : 1 },
              ]}
            >
              <Ionicons name="dice" size={48} color="#F8FAFC" />
            </Pressable>
          </View>
          {!!recipe?.imageUrl && (
            <View style={styles.imageContainer}>
              <Image
                source={recipe?.imageUrl}
                style={styles.imageStyles}
                contentFit="cover"
              />
            </View>
          )}
          {!!recipe?.ingredients[0] && (
            <View style={styles.ingredientsContainer}>
              {recipe?.ingredients.map((ingredient) => (
                <Text
                  style={styles.ingredientText}
                  key={ingredient}
                >{`\u2022 ${ingredient.trim()}`}</Text>
              ))}
            </View>
          )}
          <Text style={styles.preparationText}>{recipe?.preparation}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default recipe;

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
    maxWidth: 640,
  },
  descriptipnContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionText: {
    fontSize: 32,
    fontWeight: "bold",
    paddingBottom: 32,
    color: "#F8FAFC",
    flex: 0.95,
  },
  imageContainer: { maxWidth: 640, paddingBottom: 16 },
  imageStyles: {
    width: "100%",
    height: 400,
    borderRadius: 8,
    marginBottom: 8,
  },
  ingredientsContainer: {
    flex: 1,
    marginBottom: 16,
  },
  ingredientText: {
    fontSize: 16,
    color: "#CBD5E1",
    paddingBottom: 4,
  },
  preparationText: {
    fontSize: 16,
    color: "#CBD5E1",
    paddingBottom: 4,
  },
});
