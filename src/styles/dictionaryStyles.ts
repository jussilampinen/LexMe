import { StyleSheet } from "react-native";
import { colors, spacing } from "./theme";

export const dictionarySearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.l,
    paddingTop: spacing.xl,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.primary,
    textAlign: "center",
    marginBottom: spacing.l,
  },

  searchInput: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: colors.primaryLight,
    borderRadius: 12,
    padding: spacing.m,
    fontSize: 16,
    marginBottom: spacing.m,
  },

  searchButton: {
    backgroundColor: colors.primary,
    padding: spacing.m,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: spacing.l,
  },

  searchButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  resultCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: spacing.l,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.m,
  },

  wordTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.s,
  },

  partOfSpeech: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.subtitle,
    marginBottom: spacing.s,
  },

  definition: {
    fontSize: 16,
    color: colors.text,
    marginBottom: spacing.s,
  },

  saveButton: {
    backgroundColor: colors.secondary,
    padding: spacing.m,
    borderRadius: 12,
    alignItems: "center",
    marginTop: spacing.m,
  },

  saveButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  input: {
    backgroundColor: "#fff",
    padding: spacing.m,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    fontSize: 16,
    marginBottom: spacing.m,
  },

  button: {
    backgroundColor: colors.primary,
    padding: spacing.m,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: spacing.l,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  error: {
    color: colors.error,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: spacing.m,
    marginBottom: spacing.m,
    textAlign: "center",
  },

  card: {
    backgroundColor: colors.card,
    padding: spacing.l,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.l,
  },

  word: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: spacing.s,
  },

  phonetic: {
    fontSize: 18,
    color: colors.subtleText,
    marginBottom: spacing.m,
  },

  example: {
    fontSize: 15,
    fontStyle: "italic",
    color: colors.subtleText,
    marginTop: spacing.s,
    marginBottom: spacing.m,
  },

  section: {
    marginBottom: spacing.l,
  },

  definitionBlock: {
    marginBottom: spacing.m,
  },
});
