
// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract CMNFT is ERC721, Ownable {


    using SafeMath for uint256;
    using SafeMath for uint;

    uint public constant MAX_CMNFT = 10000;
    bool public hasSaleStarted = false;


    // The IPFS hash
    
    string public METADATA_PROVENANCE_HASH = "";


    constructor() ERC721 ("Cryptomorial NFT", "CMNFT") {}

    function tokensOfOwner(address _owner) external view returns(uint256[] memory ) {
        uint256 tokenCount = balanceOf(_owner); 
        if (tokenCount == 0) {
            // Return an empty array
            return new uint256[](0);
        } else {
            uint256[] memory result = new uint256[](tokenCount);
            uint256 index;
            for (index = 0; index < tokenCount; index++) {
                result[index] = tokenOfOwnerByIndex(_owner, index);
            }
            return result;
        }
    }

    function calculatePrice() public view returns (uint256) {
        require(hasSaleStarted == true, "Sale hasn't started");
        require(totalSupply() < MAX_CMNFT, "Sale has already ended");

        uint currentSupply = totalSupply();
        if (currentSupply >= 9950) {
            return 1000000000000000000;        // 9950-9999 (50) -> 1.00 ETH
        } else if (currentSupply >= 9020) {
            return 640000000000000000;         // 9020 - 9949 (930) -> 0.64 ETH
        } else if (currentSupply >= 7020) {
            return 320000000000000000;         // 7020 - 9019 (2000) -> 0.32 ETH
        } else if (currentSupply >= 4020) {
            return 160000000000000000;         // 4020 - 7019 (3000) -> 0.16 ETH
        } else if (currentSupply >= 2020) {
            return 80000000000000000;          // 2020 -4019 (2000) -> 0.08 ETH 
        } else if (currentSupply >= 1020) {
            return 40000000000000000;          // 1020 - 2019 (1000)-> 0.04 ETH 
        } else if (currentSupply >= 520) {
            return 20000000000000000;          // 520 - 1019 (500) -> 0.02 ETH 
        } else {
            return 10000000000000000;          // 0 - 519  (500 + 20 Premint) -> 0.01 ETH
        }
    }

     function calculatePriceForToken(uint _id) public pure returns (uint256) {
        require(_id < MAX_CMNFT, "Sale has already ended");

        if (_id >= 9950) {
            return 1000000000000000000;        // 9950-9999 (50) -> 1.00 ETH
        } else if (_id >= 9020) {
            return 640000000000000000;         // 9020 - 9949 (930) -> 0.64 ETH
        } else if (_id >= 7020) {
            return 320000000000000000;         // 7020 - 9019 (2000) -> 0.32 ETH
        } else if (_id >= 4020) {
            return 160000000000000000;         // 4020 - 7019 (3000) -> 0.16 ETH
        } else if (_id >= 2020) {
            return 80000000000000000;          // 2020 -4019 (2000) -> 0.08 ETH 
        } else if (_id >= 1020) {
            return 40000000000000000;          // 1020 - 2019 (1000)-> 0.04 ETH 
        } else if (_id >= 520) {
            return 20000000000000000;          // 520 - 1019  -> 0.02 ETH
        } else {
            return 10000000000000000;          // 0 - 519 -> 0.01 ETH        
        }
    }

   function mintCMNFT(uint256 numCMNFT) public payable {
        require(totalSupply() < MAX_CMNFT, "Sale has already ended");
        require(numCMNFT > 0 && numCMNFT <= 10, "You can create minimum 1, maximum 10 CMNFTs");
        require(totalSupply().add(numCMNFT) <= MAX_CMNFT, "Exceeds 10,000 Mintable NFT");
        require(msg.value >= calculatePrice().mul(numCMNFT), "Ether value sent is below the price");

        for (uint i = 0; i < numCMNFT; i++) {
            uint mintIndex = totalSupply();
            _safeMint(msg.sender, mintIndex);
        }
    }

    // Owner Funtions - setProvenanceHash
    function setProvenanceHash(string memory _hash) public onlyOwner {
        METADATA_PROVENANCE_HASH = _hash;
    }
    // Owner Funtions - setBaseURI
    function setBaseURI(string memory baseURI) public onlyOwner {
        //_setBaseURI(baseURI);
        setBaseURI(baseURI);
    }
    // Owner Funtion - startSale
    function startSale() public onlyOwner {
        hasSaleStarted = true;
    }
    // Owner Funtion - pauseSale
    function pauseSale() public onlyOwner {
        hasSaleStarted = false;
    }

    function withdrawAll() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }

    function reserveProjectTokens(uint256 numCMNFT) public onlyOwner {
        uint currentSupply = totalSupply();
        require(totalSupply().add(numCMNFT) <= 20, "Exceeded Project Token Allocation");
        require(hasSaleStarted == false, "Sale has already started");
        uint256 index;
        // Reserved for people who helped this project and giveaways
        for (index = 0; index < numCMNFT; index++) {
            _safeMint(owner(), currentSupply + index);
        }
    }
  

}