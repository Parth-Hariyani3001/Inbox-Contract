// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

//Setup provider using account mnemonic and Infura API link
const provider = new HDWalletProvider(
    'fatigue feed science culture soldier alarm squirrel sibling age butter bounce family',
    'https://goerli.infura.io/v3/660daaedfc034825af9a3a2f0b030e60'
);

//Providing the provider
const web3 = new Web3(provider);

//Deploying the contract
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting To deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data : bytecode, arguments : ['Hi there'] })
    .send({ from : accounts[0] , gas : '1000000'});

    console.log('Contract deployed to :',result.options.address);
    provider.engine.stop();
};

deploy();