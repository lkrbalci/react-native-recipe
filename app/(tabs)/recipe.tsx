import { Image } from "expo-image";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import React, { useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { getRandomRecipe, getRecipeById } from "../database/api";

type Props = {};

const recipe = (props: Props) => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [recipe, setRecipe] = React.useState<any>(null);

  useFocusEffect(
    useCallback(() => {
      if (id) {
        setRecipe(getRecipeById(id));
      } else {
        setRecipe(getRandomRecipe());
      }
    }, [id])
  );

  return (
    <View style={styles.recipeContainer}>
      <ScrollView>
        <Image
          source={recipe?.imageUrl}
          style={styles.imageStyles}
          contentFit="cover"
        />
      </ScrollView>
    </View>
  );
};

export default recipe;

const styles = StyleSheet.create({
  imageStyles: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  recipeContainer: { flex: 1, maxWidth: 640, alignItems: "center" },
});
