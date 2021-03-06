import nodeList from '@/networks';
const state = {
  client:{},
  network: {
    auth: false,
    password: '',
    port: 80,
    service: 'hub.byteballtalk.cn/bb',
    type: {
      blockExplorerAddr: 'https://explorer.byteball.org/#[[address]]',
      blockExplorerTX: 'https://explorer.byteball.org/#[[txHash]]',
      chainID: 0,
      contracts: [],
      homePage: 'https://explorer.byteball.org/',
      name: 'LIVENET',
      name_long: 'livenet',
      tokens: []
    },
    url: 'wss://hub.byteballtalk.cn/bb',
    username: ''
  },
  wallet: null,
  account: {
    balance: 0
  },
  Transactions: {},
  Networks: nodeList,
  Errors: {},
  online: true,
  customPaths: {},
  notifications: {},
};

export default state;
