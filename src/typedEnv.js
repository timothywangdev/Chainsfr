// @flow
const env = ((process.env: any): {[string]: string}) // if you're sure that everything will be defined

export default {
  NODE_ENV: env.NODE_ENV,
  REACT_APP_GOOGLE_CLIENT_ID: env.REACT_APP_GOOGLE_CLIENT_ID,
  REACT_APP_GOOGLE_API_SCOPE: env.REACT_APP_GOOGLE_API_SCOPE,
  REACT_APP_GOOGLE_API_DISCOVERY_DOCS: env.REACT_APP_GOOGLE_API_DISCOVERY_DOCS,
  REACT_APP_ETHEREUM_NETWORK: env.REACT_APP_ETHEREUM_NETWORK,
  REACT_APP_INFURA_API_KEY: env.REACT_APP_INFURA_API_KEY,
  REACT_APP_BTC_NETWORK: env.REACT_APP_BTC_NETWORK,
  REACT_APP_DAI_ADDRESS: env.REACT_APP_DAI_ADDRESS,
  REACT_APP_CHAINSFER_API_ENDPOINT: env.REACT_APP_CHAINSFER_API_ENDPOINT,
  REACT_APP_LIBRA_API_ENDPOINT: env.REACT_APP_LIBRA_API_ENDPOINT,
  REACT_APP_PREFILLED_ACCOUNT_ENDPOINT: env.REACT_APP_PREFILLED_ACCOUNT_ENDPOINT,
  REACT_APP_ENV: env.REACT_APP_ENV,
  REACT_APP_BITCOIN_JS_LIB_NETWORK: env.REACT_APP_BTC_NETWORK === 'mainnet' ? 'bitcoin' : 'testnet',
  REACT_APP_BTC_PATH: env.REACT_APP_BTC_NETWORK === 'mainnet' ? "49'/0'" : "49'/1'",
  REACT_APP_ENTRYPOINT_TESTNET_URL: env.REACT_APP_ENTRYPOINT_TESTNET_URL,
  REACT_APP_ENTRYPOINT_MAINNET_URL: env.REACT_APP_ENTRYPOINT_MAINNET_URL,
  REACT_APP_FAQ_URL: env.REACT_APP_FAQ_URL,
  REACT_APP_FAQ_TESTNET_URL: env.REACT_APP_FAQ_TESTNET_URL,
  REACT_APP_TERMS_URL: env.REACT_APP_TERMS_URL
}
