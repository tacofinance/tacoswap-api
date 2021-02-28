import { TokenAddresses as contracts } from "./TokenAddresses";
import { TokenSymbols as QuoteToken } from "./TokenSymbols";

const TACO_BUSD_LP_MAINNET = `0x3BB3B98c0FABE30166E6B7D62aEef393249871E4`;
const TACO_BNB_LP_MAINNET = `0x5590d45592C846DD820D360dd5Ba6b2610cDeeFB`;
const TACO_MAINNET = `0x9066e87Bac891409D690cfEfA41379b34af06391`;

export const farmsConfig = [
  {
    risk: 5,
    lpSymbol: "TACO-BUSD LP",
    lpAddresses: {
      97: "0x11CE35aa3eE3639C30FEF3Af9A359A638B29Fba8",
      56: TACO_BUSD_LP_MAINNET,
    },
    tokenSymbol: "TACO",
    tokenAddresses: {
      97: "0x294Bc5a393B8de74f8d389197DA639C5FbDB9A07",
      56: TACO_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 5,
    lpSymbol: "TACO-BNB LP",
    lpAddresses: {
      97: "0x01b1405bEF38652468C9f43861010eB73E0AA443",
      56: TACO_BNB_LP_MAINNET,
    },
    tokenSymbol: "TACO",
    tokenAddresses: {
      97: "0x294Bc5a393B8de74f8d389197DA639C5FbDB9A07",
      56: TACO_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    risk: 3,
    lpSymbol: "BNB-BUSD LP",
    lpAddresses: {
      97: "0x01b1405bEF38652468C9f43861010eB73E0AA443",
      56: "0x1b96b92314c44b159149f7e0303511fb2fc4774f",
    },
    tokenSymbol: "BNB",
    tokenAddresses: {
      97: "0x294Bc5a393B8de74f8d389197DA639C5FbDB9A07",
      56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 1,
    lpSymbol: "USDT-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd",
    },
    tokenSymbol: "USDT",
    tokenAddresses: {
      97: "",
      56: "0x55d398326f99059ff775485246999027b3197955",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 2,
    lpSymbol: "ETH-BNB LP",
    lpAddresses: {
      97: "",
      56: "0x70d8929d04b60af4fb9b58713ebcf18765ade422",
    },
    tokenSymbol: "ETH",
    tokenAddresses: {
      97: "",
      56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    risk: 1,
    lpSymbol: "USDC-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x680dd100e4b394bda26a59dd5c119a391e747d18",
    },
    tokenSymbol: "USDC",
    tokenAddresses: {
      97: "",
      56: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 3,
    lpSymbol: "DOT-BNB LP",
    lpAddresses: {
      97: "",
      56: "0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c",
    },
    tokenSymbol: "DOT",
    tokenAddresses: {
      97: "",
      56: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    risk: 4,
    lpSymbol: "CAKE-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458",
    },
    tokenSymbol: "CAKE",
    tokenAddresses: {
      97: "",
      56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 4,
    lpSymbol: "CAKE-BNB LP",
    lpAddresses: {
      97: "",
      56: "0xa527a61703d82139f8a06bc30097cc9caa2df5a6",
    },
    tokenSymbol: "CAKE",
    tokenAddresses: {
      97: "",
      56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // TODO: CHECK POOLS https://github.com/VikingDefi/viking-frontend-farms/blob/master/src/config/constants/farms.ts
  // pools
  {
    risk: 5,
    isTokenOnly: true,
    lpSymbol: "TACO",
    lpAddresses: {
      97: "",
      56: TACO_BUSD_LP_MAINNET, // TACO-BUSD LP
    },
    tokenSymbol: "TACO",
    tokenAddresses: {
      97: "",
      56: TACO_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 1,
    isTokenOnly: true,
    lpSymbol: "BUSD",
    lpAddresses: {
      97: "",
      56: TACO_BUSD_LP_MAINNET, // TACO-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: "BUSD",
    tokenAddresses: {
      97: "",
      56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 1,
    isTokenOnly: true,
    lpSymbol: "EGG",
    lpAddresses: {
      97: "",
      56: "0x19e7cbecdd23a16dfa5573df54d98f7caae03019", // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: "EGG",
    tokenAddresses: {
      97: "",
      56: "0xf952fc3ca7325cc27d15885d37117676d25bfda6",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 3,
    isTokenOnly: true,
    lpSymbol: "VIKING",
    lpAddresses: {
      97: "",
      56: "0x9b989a7b8963f4b08ec094710e2966fb3c7f6c43", // VIKING-BUSD LP
    },
    tokenSymbol: "VIKING",
    tokenAddresses: {
      97: "",
      56: "0x896ede222d3f7f3414e136a2791bdb08aaa25ce0",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 3,
    isTokenOnly: true,
    lpSymbol: "DOT",
    lpAddresses: {
      97: "",
      56: "0x54c1ec2f543966953f2f7564692606ea7d5a184e", // DOT-BUSD LP
    },
    tokenSymbol: "DOT",
    tokenAddresses: {
      97: "",
      56: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 3,
    isTokenOnly: true,
    lpSymbol: "ALPHA",
    lpAddresses: {
      97: "",
      56: "0x5ba0d670ea3db79067ee6861b960f06d53712e18", // ALPHA-BUSD LP
    },
    tokenSymbol: "ALPHA",
    tokenAddresses: {
      97: "",
      56: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 3,
    isTokenOnly: true,
    lpSymbol: "STAX",
    lpAddresses: {
      97: "",
      56: "0x13abfa7b781bee80ca7fae7ec71045488d876a8d", // STAX-BUSD LP
    },
    tokenSymbol: "STAX",
    tokenAddresses: {
      97: "",
      56: "0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 3,
    isTokenOnly: true,
    lpSymbol: "LINK",
    lpAddresses: {
      97: "",
      56: "0xe54a9d8412287cfc675cae18a0011483ef975f05", // LINK-BUSD LP
    },
    tokenSymbol: "LINK",
    tokenAddresses: {
      97: "",
      56: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 4,
    isTokenOnly: true,
    lpSymbol: "CAKE",
    lpAddresses: {
      97: "",
      56: "0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458", // CAKE-BUSD LP
    },
    tokenSymbol: "CAKE",
    tokenAddresses: {
      97: "",
      56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 3,
    isTokenOnly: true,
    lpSymbol: "LINA",
    lpAddresses: {
      97: "",
      56: "0xeb325a8ea1c5abf40c7ceaf645596c1f943d0948", // LINA-BUSD LP
    },
    tokenSymbol: "LINA",
    tokenAddresses: {
      97: "",
      56: "0x762539b45a1dcce3d36d080f74d1aed37844b878",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
].map((farm, index) => ({ ...farm, pid: index }));

export default farms;
