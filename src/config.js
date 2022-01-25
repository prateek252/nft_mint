const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Walmart Avatars";
const description = "Unique Avatars for walmart's metaverse ";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "WMA",
  seller_fee_basis_points: 100, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "HF2gxvWd4jMTku3ajGTse6W2bb9RUWDzgfyzdP7R4yVk",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
// const layerConfigurations = [
//   {
//     growEditionSizeTo: 5,
//     layersOrder: [
//       { name: "Background" },
//       { name: "Eyeball" },
//       { name: "Eye color" },
//       { name: "Iris" },
//       { name: "Shine" },
//       { name: "Bottom lid" },
//       { name: "Top lid" },
//     ],
//   },
// ];
const layerConfigurations = [
  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "topOffer" },
      { name: "other" },
      { name: "base" },
      { name: "upper" },
      { name: "lower" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
