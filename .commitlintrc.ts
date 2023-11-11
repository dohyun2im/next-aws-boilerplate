import type { UserConfig } from "@commitlint/types";

const commitlintConfig: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    //Commit Type
    "type-enum": [2, "always", ["Feat", "Fix", "Style", "Refactor", "Config", "Docs"]],
    "type-case": [2, "always", "start-case"],
    "type-empty": [2, "never"],

    //* Scope
    "scope-case": [2, "never", []],

    //* Subject
    "subject-full-stop": [2, "never", "."],
    "subject-exclamation-mark": [2, "never", "!"],
    "subject-case": [2, "never", []],
    "subject-empty": [2, "never"],
  },

  prompt: {},
  ignores: [
    (message: string) =>
      message.startsWith("Merge") ||
      message.startsWith("Revert") ||
      message.startsWith("Amend") ||
      message.startsWith("Reset") ||
      message.startsWith("Rebase") ||
      message.startsWith("Tag"),
  ],
};

module.exports = commitlintConfig;
