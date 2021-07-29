const helloworld = artifacts.require("main");

module.exports = function (deployer) {
  deployer.deploy(helloworld); // 스마트 컨트랙트 코드 상 생성자에 인자를 넣어줄수잇음.
};
