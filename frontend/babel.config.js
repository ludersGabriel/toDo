module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["styled-components", { "ssr": true }],
    "inline-react-svg",
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@src': './src'
        }
      },

    ],
  ],

}
