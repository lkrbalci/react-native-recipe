/* The modal for adding recipe */

import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { addRecipe, getRecipeCount } from "../database/api";
import { Recipe } from "../database/db";

interface AddModalProps {
  visible: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddModal({
  visible,
  onClose,
  onSuccess,
}: AddModalProps) {
  // I assume good enough for demo app, would use a form library instead.
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipePreparation, setRecipePreparation] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  // Function to use image picker
  const pickImageAsync = async () => {
    let imagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!imagePickerResult.canceled) {
      setSelectedImage(imagePickerResult.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const handleSubmit = () => {
    if (recipeTitle.trim() && recipeDescription.trim()) {
      const id = Math.floor(Math.random() * 100 + getRecipeCount()).toString();
      const ingredients = recipeIngredients.split(",");
      const imageUrl = selectedImage || "";
      const newRecipe: Recipe = {
        id,
        title: recipeTitle.trim(),
        description: recipeDescription.trim(),
        imageUrl,
        ingredients,
        preparation: recipePreparation,
      };
      addRecipe(newRecipe);
      onSuccess();
      setRecipeTitle("");
      setRecipeDescription("");
      setSelectedImage("");
      setSelectedImage("");
      setRecipePreparation("");
      onClose();
    }
  };

  const handleClose = () => {
    setRecipeTitle("");
    onClose();
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.backdrop}>
        <Pressable style={styles.backdropPress} onPress={handleClose} />

        <View style={styles.modalContainer}>
          <View style={styles.handle} />

          <View style={styles.header}>
            <Text style={styles.title}>Add Recipe</Text>
            <Pressable onPress={handleClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#0F172A" />
            </Pressable>
          </View>

          <View style={styles.content}>
            <Text>
              <Text style={styles.label}>Recipe Title</Text>
              <Text style={[styles.label, { color: "red" }]}> *</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={recipeTitle}
              onChangeText={setRecipeTitle}
              placeholder="Recipe title..."
              placeholderTextColor="#999"
              autoFocus
            />
            <Text>
              <Text style={styles.label}>Recipe Description</Text>
              <Text style={[styles.label, { color: "red" }]}> *</Text>
            </Text>
            <TextInput
              style={styles.input}
              value={recipeDescription}
              onChangeText={setRecipeDescription}
              placeholder="Recipe Description..."
              placeholderTextColor="#999"
              autoFocus
            />

            <Pressable style={styles.button} onPress={pickImageAsync}>
              <Text style={styles.buttonText}>Pick Image</Text>
            </Pressable>

            <Text style={styles.label}>Recipe Ingredients</Text>
            <TextInput
              style={styles.input}
              value={recipeIngredients}
              onChangeText={setRecipeIngredients}
              placeholder="Recipe Ingredients, comma seperated (peach, salt, sugar...)"
              placeholderTextColor="#999"
              autoFocus
            />

            <Text style={styles.label}>Recipe Preparation</Text>
            <TextInput
              style={styles.input}
              value={recipePreparation}
              onChangeText={setRecipePreparation}
              placeholder="Recipe Preparation"
              placeholderTextColor="#999"
              autoFocus
            />

            <Pressable
              style={[
                styles.button,
                (!recipeTitle.trim() || !recipeDescription.trim()) &&
                  styles.buttonDisabled,
              ]}
              onPress={handleSubmit}
              disabled={!recipeTitle.trim() || !recipeDescription.trim()}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  backdropPress: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: "#F8FAFC",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 40,
    minHeight: "70%",
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#ddd",
    borderRadius: 2,
    alignSelf: "center",
    marginTop: 12,
    marginBottom: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0F172A",
  },
  closeButton: {
    padding: 4,
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0F172A",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#0F172A",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonDisabled: {
    backgroundColor: "#a9b7d8ff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
