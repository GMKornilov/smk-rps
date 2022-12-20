const Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/cc383d48f16d453f838a1f8cffef7746"));

const address = "0x33a71Ea61A9B25F780F1602a8dE7B35969FD406a";

var jsonFile = "abi.json";
const ABI= JSON.parse(fs.readFileSync(jsonFile));

web3.eth.getBalance // проверяем
const myContract = new web3.eth.Contract(ABI, address);
myContract.methods.whoAmI().call().then(console.log);