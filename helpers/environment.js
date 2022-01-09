export function getContractAddress (address) {
    const network = process.env.ZILLIQA_NETWORK
    switch (network) {
      case 'testnet': {
        switch (address) {
          case 'NFT_CONTRACT': return process.env.TESTNET_NFD_CONTRACT
          case 'PROXY_CONTRACT': return process.env.TESTNET_PROXY_CONTRACT
          case 'TOKEN_CONTRACT': return process.env.TESTNET_TOKEN_CONTRACT
        }
      }
      case 'mainnet': {
        switch (address) {
          case 'NFT_CONTRACT': return process.env.MAINNET_NFD_CONTRACT
          case 'PROXY_CONTRACT': return process.env.MAINNET_PROXY_CONTRACT
          case 'TOKEN_CONTRACT': return process.env.MAINNET_TOKEN_CONTRACT
        }
      }
      default: throw new Error('Invalid network')
    }
}

export function getRpcUrl(type = '') {
    const network = process.env.ZILLIQA_NETWORK
    if (network === 'testnet') {
        return type === 'ws' ? 'wss://dev-ws.zilliqa.com' : 'https://dev-api.zilliqa.com'
    } else {
        return type === 'ws' ? 'wss://api-ws.zilliqa.com' : 'https://api.zilliqa.com'
    }
}

export function getNetworkFromEnv () {
    return process.env.ZILLIQA_NETWORK   
}