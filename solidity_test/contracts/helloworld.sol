pragma solidity ^0.7.6;

contract helloworld {
    string public str;
    
    constructor(string memory _str) public {
        str = _str;
    }

    function setStr(string memory _str) public {
        str = _str;
    }

    function print() public view returns(string memory){
        return str;
    }
}