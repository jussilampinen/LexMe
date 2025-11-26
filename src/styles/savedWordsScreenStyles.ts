import { StyleSheet } from "react-native";
import { colors, spacing } from "./theme";

export const savedWordsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.l,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.primary,
    textAlign: "center",
    marginBottom: spacing.l,
  },

  listContainer: {
    marginTop: spacing.m,
  },

  item: {
    backgroundColor: colors.card,
    padding: spacing.m,
    marginBottom: spacing.s,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  word: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },

  deleteButton: {
    marginTop: spacing.s,
    padding: spacing.s,
    backgroundColor: colors.error,
    borderRadius: 8,
    alignItems: "center",
  },

  deleteButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
