const helloworld = artifacts.require("helloworld");

module.exports = function (deployer) {
  deployer.deploy(helloworld, "helloworld"); // 스마트 컨트랙트 코드 상 생성자에 인자를 넣어줄수잇음.
};
