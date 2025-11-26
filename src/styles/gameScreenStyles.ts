import { StyleSheet } from "react-native";
import { colors, spacing } from "./theme";

export const gameScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.l,
    paddingTop: spacing.xl,
    backgroundColor: colors.background,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: spacing.l,
    color: colors.text,
  },

  clue: {
    backgroundColor: colors.secondary,
    padding: spacing.m,
    borderRadius: 10,
    marginBottom: spacing.s,
    color: "white",
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    padding: spacing.m,
    borderRadius: 12,
    fontSize: 18,
    marginTop: spacing.m,
    marginBottom: spacing.l,
  },

  result: {
    marginTop: spacing.m,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: colors.primary,
  },

  counter: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: spacing.m,
    color: colors.subtleText,
  },

  score: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: spacing.m,
    color: colors.primary,
  },

  mainButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.m,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.m,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  secondaryButton: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingVertical: spacing.m,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: spacing.l,
    justifyContent: "space-between",
  },
});
