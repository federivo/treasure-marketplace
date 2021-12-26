module.exports = {
  "src/**/*.ts?(x)": [
    (filenames) =>
      `next lint --fix --file ${filenames
        .map((file) => file.split(process.cwd())[1])
        .join(" --file ")}`,
    "npx prettier --write",
  ],
};
