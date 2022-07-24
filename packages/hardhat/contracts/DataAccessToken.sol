// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DataAccessToken is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(address => uint256) public tokenOf;

    struct Guardian {
        address guardian;
        bool enabled;
    }

    mapping(uint256 => Guardian[]) public guardiansOfToken;

    constructor() ERC721("DataAccessToken", "DAT") {
        _tokenIds.increment();
    }

    function mint() external returns (uint256) {
        require(tokenOf[msg.sender] == 0, "DAT: Should not own a token already");
        uint256 newTokenId = _tokenIds.current();
        _safeMint(msg.sender, newTokenId);
        tokenOf[msg.sender] = newTokenId;

        _tokenIds.increment();
        return newTokenId;
    }

    function assignGuardian(address _newGuardian) external {
        require(tokenOf[msg.sender] != 0, "DAT: Should own a token");

        Guardian memory newGuardian = Guardian(_newGuardian, true);
        guardiansOfToken[tokenOf[msg.sender]].push(newGuardian);
    }

    function getMyGuardians()
        external
        view
        returns (Guardian[] memory)
    {
        return guardiansOfToken[tokenOf[msg.sender]];
    }
}
