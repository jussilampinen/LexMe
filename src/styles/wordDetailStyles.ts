import { StyleSheet } from "react-native";
import { colors, spacing } from "./theme";

export const wordDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.l,
    paddingTop: spacing.xl,
    backgroundColor: colors.background,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: spacing.m,
  },

  section: {
    marginTop: spacing.m,
    backgroundColor: "white",
    padding: spacing.m,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.secondary,
    marginBottom: spacing.s,
  },

  definitionBlock: {
    marginBottom: spacing.m,
    padding: spacing.m,
    backgroundColor: colors.primaryLight + "33",
    borderRadius: 10,
  },

  definition: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },

  example: {
    marginTop: spacing.s,
    fontStyle: "italic",
    color: colors.subtitle,
    fontSize: 15,
  },

  subList: {
    marginTop: spacing.s,
    fontSize: 14,
    color: colors.subtitle,
  },

  deleteButton: {
    marginTop: spacing.l,
    backgroundColor: colors.error,
    padding: spacing.m,
    borderRadius: 12,
    alignItems: "center",
  },

  deleteButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
