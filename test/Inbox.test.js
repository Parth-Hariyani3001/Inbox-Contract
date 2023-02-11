// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');      // 'W' is capital because Web3 is a constructor function  
const {interface,bytecode} = require('../compile');

const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

 beforeEach(async () => {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts()
    
    //use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments : ["Hi there!"] })
        .send({ from: accounts[0],gas: '1000000'})
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });
    it('Initial message is passing',async () => {
        const msg = await inbox.methods.message().call()
        assert.equal(msg,"Hi there!")
    });
    it('If we can change the message', async () => {
        await inbox.methods.setMessage("bye").send({from : accounts[0]})
        const message = await inbox.methods.message().call()
        assert.equal(message,"bye")
    });
})