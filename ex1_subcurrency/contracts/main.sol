pragma solidity ^0.7.6;
pragma abicoder v2;

contract main {
    mapping (uint=>string) public names;
    mapping (address=>Book[]) public books;

    
    struct Book{
        string title;
        string Author;
    }

    function add_book_info(uint id_var, string memory title_, string memory author_) public payable returns (bool)
    {
        Book memory output = Book({title:title_, Author:author_});
        books[msg.sender].push(output);
        return true;
    }

    function test() public returns (Book[] memory)
    {
        return books[msg.sender];
    }
}