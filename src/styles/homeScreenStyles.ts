import { StyleSheet } from "react-native";
import { colors, spacing } from "./theme";

export const homeScreenStyles = StyleSheet.create({
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
    marginBottom: spacing.xl,
    textAlign: "center",
  },

  button: {
    backgroundColor: colors.primary,
    padding: spacing.l,
    marginBottom: spacing.m,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});
