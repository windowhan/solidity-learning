const Web3=require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const compiled_json = require("../build/contracts/main.json");

const interface = compiled_json["abi"];
const bytecode = compiled_json["bytecode"];


async function setup(){
    const MyContract = new web3.eth.Contract(interface, "0xea8F40B5A50a2CF8A71900ff0CCFEd7c012E8F76");
    const account_list = await web3.eth.getAccounts();
    console.log(account_list);

    await MyContract.methods.add_book_info(1337, "nonono2222no", "test22").send({from:account_list[0], gas: 200000, gasPrice: '200000'}).then(
        function(res){
            console.log(res);
        }
    );

    await MyContract.methods.test().call().then(
        function(res){
            console.log(res);
        }
    );
}

setup();

/*
const MyContract = new web3.eth.Contract(abi);
const subContract = new web3.eth.Contract(abi, "0x1bDCfb873CC6aDe53A2f86251Db7bB5DE34B8cA6"); // 배포한 컨트랙트 adress.
//subContract.methods.test().call().then(result=>console.log("ASD"));
subContract.methods.add_book_info(1337, "nononono", "test2").send({from:"0xBAD1103Bee11a6aDe61843064AEC5c6e14Ea43c9", gas: 20000, gasPrice: '20000'}).then(function(arg){console.log(arg);});
subContract.methods.test().send({from:"0xBAD1103Bee11a6aDe61843064AEC5c6e14Ea43c9", gas: , gasPrice: '40000'}).then(result=>console.log(result));
*/