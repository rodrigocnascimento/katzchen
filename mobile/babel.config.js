module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "~/components": "./ui/components",
            "~/screens": "./ui/screens",
            "~/ui": "./ui",
            "~/modules": "./modules",
          },
        },
      ],
    ],
  };
};
