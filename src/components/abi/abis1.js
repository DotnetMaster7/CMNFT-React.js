
export const CMNFTAbi = [

{
  "contractName": "CMNFT",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "MAX_CMLOT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "METADATA_PROVENANCE_HASH",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "baseURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "hasSaleStarted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "tokensOfOwner",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "calculatePrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "calculatePriceForToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_hash",
          "type": "string"
        }
      ],
      "name": "setProvenanceHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "baseURI",
          "type": "string"
        }
      ],
      "name": "setBaseURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pauseSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawAll",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "numCMLot",
          "type": "uint256"
        }
      ],
      "name": "reserveGiveaway",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.7.0+commit.9e61f92b\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_CMLOT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"METADATA_PROVENANCE_HASH\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"calculatePrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"calculatePriceForToken\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"hasSaleStarted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pauseSale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"numCMLot\",\"type\":\"uint256\"}],\"name\":\"reserveGiveaway\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"baseURI\",\"type\":\"string\"}],\"name\":\"setBaseURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_hash\",\"type\":\"string\"}],\"name\":\"setProvenanceHash\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startSale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"tokensOfOwner\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdrawAll\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Users/nlpacademy/Library/Mobile Documents/com~apple~CloudDocs/MAMP-PRO/solidity-projects/cmnft-concept/src/contracts/CMNFT.sol\":\"CMNFT\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/nlpacademy/Library/Mobile Documents/com~apple~CloudDocs/MAMP-PRO/solidity-projects/cmnft-concept/src/contracts/CMNFT.sol\":{\"keccak256\":\"0x0f83946c5047e43d0fe500150543d1f68310e198709bb43b46c50e000ada5580\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://edfb25be35c809714c29ea25190eb045471892d19d562881ffaad5add82f43e6\",\"dweb:/ipfs/QmVRfhtAZc2M7g7Dn935QRQmuVCKB4LuGsjfdLmMLyAEfm\"]},\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0x15e2d5bd4c28a88548074c54d220e8086f638a71ed07e6b3ba5a70066fcf458d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://90faf5851c02f9bd42c5bfb54d4f0421a2612f50ab80b2c4fa24fa3792071cc2\",\"dweb:/ipfs/QmRGM4F2PcGVF85aTfaA9YBhCHHDqrMhRjyp6fGeBTtirb\"]},\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0x24141d2f6b98d4cb77a8936eae8cbaad2e261d9062bdc08036096f4550092501\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b710eb003944777135f027500a5a57b479fe857849f5f467c1ef9687401e3c95\",\"dweb:/ipfs/QmcELzi6KRzAs3DXwxdsoKWRJ13KSeipKQsJgD3unctdZM\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x118ed7540f56b21ff92e21ebaa73584048e98d2ac04ca67571329bb8dbd9032f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://da2918b7aff73dd51d41bfcfa548f81eb50531b8353500fdbdacf297076db070\",\"dweb:/ipfs/Qmb8ixAs1vBjZRowQNuNg6bRf2NZmgZ1JTBxmQS14PHpcL\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x2d99a0deb6648c34fbc66d6ac4a2d64798d7a5321b45624f6736fadc63da1962\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2dcdce5ede1e5e650d174ec0b35be7d47b6a50f30bc895ef0d9e59fb75052e45\",\"dweb:/ipfs/QmQ2XFsDLTYqfEdw7pYzHiGtFRY11yQm4b6ynYgKqDxeB8\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0xe6bd1b1218338b6f9fe17776f48623b4ac3d8a40405f74a44bc23c00abe2ca13\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0c354c3f6e9c487759aa7869be4fba68e0b2efc777b514d289c4cbd3ff8f7e1a\",\"dweb:/ipfs/QmdF9LcSYVmiUCL7JxLEYmSLrjga6zJsujfi6sgEJD4M1z\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xccb917776f826ac6b68bd5a15a5f711e3967848a52ba11e6104d9a4f593314a7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://430255ad2229ced6d880e61a67bdc6e48dbbaed8354a7c1fe918cd8b8714a886\",\"dweb:/ipfs/QmTHY56odzqEpEC6v6tafaWMYY7vmULw25q5XHJLCCAeox\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x52146049d6709c870e8ddcd988b5155cb6c5d640cfcd8978aee52bc1ba2ec4eb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ada84513617b7c1b2f890b44503735abaec73a1acd030112a17aac7e6c66a4a1\",\"dweb:/ipfs/QmaiFwdio67iJrfjAdkMac24eJ5sS1qD7CZW6PhUU6KjiK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x4b087f06b6670a131a5a14e53b1d2a5ef19c034cc5ec42eeebcf9554325744ad\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6a6af5d848334e40db419773f6360601e311ffc21c2e274f730b8c542da99fd\",\"dweb:/ipfs/QmfA24cxQ2g41ZWUuDF295dxDJ4xF1bSDYtC3EaLd7CzW8\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0x1562cd9922fbf739edfb979f506809e2743789cbde3177515542161c3d04b164\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4580d57781513d98870d9738c7d39094336e0a70cdb90d68dad549c6ced466ec\",\"dweb:/ipfs/Qmf9YZzzRFuvMnav9dgmeRUpdYMMECiZX8w25sHWVbA18V\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa1e12f97981f1d0964b1c048978606a57127c56c438bab61cdfe269cad859a74\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5eefac1760f524971e14aa3f3d79515a3d54fd28c1d3bdca0b36127da349b830\",\"dweb:/ipfs/QmUMzkyH3ytJX5gVPizQruNLhkKmuJb3nFqBDad4LPdg5U\"]}},\"version\":1}",
  "bytecode": "0x60806040526000600a60146101000a81548160ff02191690831515021790555060405180602001604052806000815250600b9080519060200190620000469291906200031d565b503480156200005457600080fd5b506040518060400160405280601081526020017f43727970746f6d6f7269616c204e4654000000000000000000000000000000008152506040518060400160405280600581526020017f434d4e4654000000000000000000000000000000000000000000000000000000815250620000d96301ffc9a760e01b6200020c60201b60201c565b8160069080519060200190620000f19291906200031d565b5080600790805190602001906200010a9291906200031d565b50620001236380ac58cd60e01b6200020c60201b60201c565b6200013b635b5e139f60e01b6200020c60201b60201c565b6200015363780e9d6360e01b6200020c60201b60201c565b50506000620001676200031560201b60201c565b905080600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350620003c3565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620002a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200036057805160ff191683800117855562000391565b8280016001018555821562000391579182015b828111156200039057825182559160200191906001019062000373565b5b509050620003a09190620003a4565b5090565b5b80821115620003bf576000816000905550600101620003a5565b5090565b613fb880620003d36000396000f3fe6080604052600436106101e35760003560e01c806370a0823111610102578063b66a0e5d11610095578063d348b40911610064578063d348b40914610d3c578063e985e9c514610d67578063f0c9dc6014610dee578063f2fde38b14610e7e576101e3565b8063b66a0e5d14610b34578063b88d4fde14610b4b578063c87b56dd14610c5d578063ca4e5d6d14610d11576101e3565b80638da5cb5b116100d15780638da5cb5b146109cb57806395d89b4114610a0c578063a22cb46514610a9c578063a40f1aa514610af9576101e3565b806370a082311461089f578063715018a6146109045780638462151c1461091b578063853828b6146109c1576101e3565b80632f745c591161017a57806355f804b31161014957806355f804b3146106935780636352211e1461075b5780636c0360eb146107c05780636fd9537f14610850576101e3565b80632f745c591461054357806342842e0e146105b25780634f6ccce71461062d57806355367ba91461067c576101e3565b806310969523116101b657806310969523146103a857806318160ddd146104705780631c8b232d1461049b57806323b872dd146104c8576101e3565b806301ffc9a7146101e857806306fdde0314610258578063081812fc146102e8578063095ea7b31461034d575b600080fd5b3480156101f457600080fd5b506102406004803603602081101561020b57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610ecf565b60405180821515815260200191505060405180910390f35b34801561026457600080fd5b5061026d610f36565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ad578082015181840152602081019050610292565b50505050905090810190601f1680156102da5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102f457600080fd5b506103216004803603602081101561030b57600080fd5b8101908080359060200190929190505050610fd8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561035957600080fd5b506103a66004803603604081101561037057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611073565b005b3480156103b457600080fd5b5061046e600480360360208110156103cb57600080fd5b81019080803590602001906401000000008111156103e857600080fd5b8201836020820111156103fa57600080fd5b8035906020019184600183028401116401000000008311171561041c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506111b7565b005b34801561047c57600080fd5b50610485611280565b6040518082815260200191505060405180910390f35b3480156104a757600080fd5b506104b0611291565b60405180821515815260200191505060405180910390f35b3480156104d457600080fd5b50610541600480360360608110156104eb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112a4565b005b34801561054f57600080fd5b5061059c6004803603604081101561056657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061131a565b6040518082815260200191505060405180910390f35b3480156105be57600080fd5b5061062b600480360360608110156105d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611375565b005b34801561063957600080fd5b506106666004803603602081101561065057600080fd5b8101908080359060200190929190505050611395565b6040518082815260200191505060405180910390f35b34801561068857600080fd5b506106916113b8565b005b34801561069f57600080fd5b50610759600480360360208110156106b657600080fd5b81019080803590602001906401000000008111156106d357600080fd5b8201836020820111156106e557600080fd5b8035906020019184600183028401116401000000008311171561070757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611484565b005b34801561076757600080fd5b506107946004803603602081101561077e57600080fd5b810190808035906020019092919050505061153f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156107cc57600080fd5b506107d5611576565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108155780820151818401526020810190506107fa565b50505050905090810190601f1680156108425780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561085c57600080fd5b506108896004803603602081101561087357600080fd5b8101908080359060200190929190505050611618565b6040518082815260200191505060405180910390f35b3480156108ab57600080fd5b506108ee600480360360208110156108c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061174e565b6040518082815260200191505060405180910390f35b34801561091057600080fd5b50610919611823565b005b34801561092757600080fd5b5061096a6004803603602081101561093e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611993565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156109ad578082015181840152602081019050610992565b505050509050019250505060405180910390f35b6109c9611a8c565b005b3480156109d757600080fd5b506109e0611b7b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610a1857600080fd5b50610a21611ba5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a61578082015181840152602081019050610a46565b50505050905090810190601f168015610a8e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610aa857600080fd5b50610af760048036036040811015610abf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611c47565b005b348015610b0557600080fd5b50610b3260048036036020811015610b1c57600080fd5b8101908080359060200190929190505050611dfd565b005b348015610b4057600080fd5b50610b49612001565b005b348015610b5757600080fd5b50610c5b60048036036080811015610b6e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610bd557600080fd5b820183602082011115610be757600080fd5b80359060200191846001830284011164010000000083111715610c0957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506120cd565b005b348015610c6957600080fd5b50610c9660048036036020811015610c8057600080fd5b8101908080359060200190929190505050612145565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cd6578082015181840152602081019050610cbb565b50505050905090810190601f168015610d035780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610d1d57600080fd5b50610d26612416565b6040518082815260200191505060405180910390f35b348015610d4857600080fd5b50610d5161241c565b6040518082815260200191505060405180910390f35b348015610d7357600080fd5b50610dd660048036036040811015610d8a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506125f4565b60405180821515815260200191505060405180910390f35b348015610dfa57600080fd5b50610e03612688565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e43578082015181840152602081019050610e28565b50505050905090810190601f168015610e705780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610e8a57600080fd5b50610ecd60048036036020811015610ea157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612726565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fce5780601f10610fa357610100808354040283529160200191610fce565b820191906000526020600020905b815481529060010190602001808311610fb157829003601f168201915b5050505050905090565b6000610fe38261291b565b611038576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613ead602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061107e8261153f565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611105576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180613f316021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16611124612938565b73ffffffffffffffffffffffffffffffffffffffff16148061115357506111528161114d612938565b6125f4565b5b6111a8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180613e006038913960400191505060405180910390fd5b6111b28383612940565b505050565b6111bf612938565b73ffffffffffffffffffffffffffffffffffffffff166111dd611b7b565b73ffffffffffffffffffffffffffffffffffffffff1614611266576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600b908051906020019061127c929190613c72565b5050565b600061128c60026129f9565b905090565b600a60149054906101000a900460ff1681565b6112b56112af612938565b82612a0e565b61130a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180613f526031913960400191505060405180910390fd5b611315838383612b02565b505050565b600061136d82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612d4590919063ffffffff16565b905092915050565b611390838383604051806020016040528060008152506120cd565b505050565b6000806113ac836002612d5f90919063ffffffff16565b50905080915050919050565b6113c0612938565b73ffffffffffffffffffffffffffffffffffffffff166113de611b7b565b73ffffffffffffffffffffffffffffffffffffffff1614611467576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000600a60146101000a81548160ff021916908315150217905550565b61148c612938565b73ffffffffffffffffffffffffffffffffffffffff166114aa611b7b565b73ffffffffffffffffffffffffffffffffffffffff1614611533576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61153c81611484565b50565b600061156f82604051806060016040528060298152602001613e62602991396002612d8b9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561160e5780601f106115e35761010080835404028352916020019161160e565b820191906000526020600020905b8154815290600101906020018083116115f157829003601f168201915b5050505050905090565b60006127108210611691576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53616c652068617320616c726561647920656e6465640000000000000000000081525060200191505060405180910390fd5b6126de82106116aa57670de0b6b3a76400009050611749565b61233c82106116c3576708e1bc9bf04000009050611749565b611b6c82106116dc57670470de4df82000009050611749565b610fb482106116f5576702386f26fc1000009050611749565b6107e4821061170e5767011c37937e0800009050611749565b6103fc821061172657668e1bc9bf0400009050611749565b610208821061173e5766470de4df8200009050611749565b662386f26fc1000090505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613e38602a913960400191505060405180910390fd5b61181c600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612daa565b9050919050565b61182b612938565b73ffffffffffffffffffffffffffffffffffffffff16611849611b7b565b73ffffffffffffffffffffffffffffffffffffffff16146118d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b606060006119a08361174e565b905060008114156119fb57600067ffffffffffffffff811180156119c357600080fd5b506040519080825280602002602001820160405280156119f25781602001602082028036833780820191505090505b50915050611a87565b60608167ffffffffffffffff81118015611a1457600080fd5b50604051908082528060200260200182016040528015611a435781602001602082028036833780820191505090505b50905060005b82811015611a8057611a5b858261131a565b828281518110611a6757fe5b6020026020010181815250508080600101915050611a49565b8193505050505b919050565b611a94612938565b73ffffffffffffffffffffffffffffffffffffffff16611ab2611b7b565b73ffffffffffffffffffffffffffffffffffffffff1614611b3b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050611b7957600080fd5b565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c3d5780601f10611c1257610100808354040283529160200191611c3d565b820191906000526020600020905b815481529060010190602001808311611c2057829003601f168201915b5050505050905090565b611c4f612938565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611cf0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000611cfd612938565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611daa612938565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b611e05612938565b73ffffffffffffffffffffffffffffffffffffffff16611e23611b7b565b73ffffffffffffffffffffffffffffffffffffffff1614611eac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000611eb6611280565b90506014611ed483611ec6611280565b612dbf90919063ffffffff16565b1115611f48576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f457863656564656420676976656177617920737570706c79000000000000000081525060200191505060405180910390fd5b60001515600a60149054906101000a900460ff16151514611fd1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f53616c652068617320616c72656164792073746172746564000000000000000081525060200191505060405180910390fd5b60005b82811015611ffc57611fef611fe7611b7b565b828401612e47565b8080600101915050611fd4565b505050565b612009612938565b73ffffffffffffffffffffffffffffffffffffffff16612027611b7b565b73ffffffffffffffffffffffffffffffffffffffff16146120b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6001600a60146101000a81548160ff021916908315150217905550565b6120de6120d8612938565b83612a0e565b612133576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180613f526031913960400191505060405180910390fd5b61213f84848484612e65565b50505050565b60606121508261291b565b6121a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180613f02602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561224e5780601f106122235761010080835404028352916020019161224e565b820191906000526020600020905b81548152906001019060200180831161223157829003601f168201915b50505050509050606061225f611576565b9050600081511415612275578192505050612411565b6000825111156123465780826040516020018083805190602001908083835b602083106122b75780518252602082019150602081019050602083039250612294565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061230857805182526020820191506020810190506020830392506122e5565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050612411565b8061235085612ed7565b6040516020018083805190602001908083835b602083106123865780518252602082019150602081019050602083039250612363565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106123d757805182526020820191506020810190506020830392506123b4565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b61271081565b600060011515600a60149054906101000a900460ff161515146124a7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f53616c65206861736e277420737461727465640000000000000000000000000081525060200191505060405180910390fd5b6127106124b2611280565b10612525576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53616c652068617320616c726561647920656e6465640000000000000000000081525060200191505060405180910390fd5b600061252f611280565b90506126de811061254b57670de0b6b3a76400009150506125f1565b61233c8110612565576708e1bc9bf04000009150506125f1565b611b6c811061257f57670470de4df82000009150506125f1565b610fb48110612599576702386f26fc1000009150506125f1565b6107e481106125b35767011c37937e0800009150506125f1565b6103fc81106125cc57668e1bc9bf0400009150506125f1565b61020881106125e55766470de4df8200009150506125f1565b662386f26fc100009150505b90565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b8054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561271e5780601f106126f35761010080835404028352916020019161271e565b820191906000526020600020905b81548152906001019060200180831161270157829003601f168201915b505050505081565b61272e612938565b73ffffffffffffffffffffffffffffffffffffffff1661274c611b7b565b73ffffffffffffffffffffffffffffffffffffffff16146127d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561285b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613d646026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600061293182600261301e90919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166129b38361153f565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000612a0782600001613038565b9050919050565b6000612a198261291b565b612a6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613dd4602c913960400191505060405180910390fd5b6000612a798361153f565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612ae857508373ffffffffffffffffffffffffffffffffffffffff16612ad084610fd8565b73ffffffffffffffffffffffffffffffffffffffff16145b80612af95750612af881856125f4565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16612b228261153f565b73ffffffffffffffffffffffffffffffffffffffff1614612b8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180613ed96029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612c14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180613d8a6024913960400191505060405180910390fd5b612c1f838383613049565b612c2a600082612940565b612c7b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061304e90919063ffffffff16565b50612ccd81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061306890919063ffffffff16565b50612ce4818360026130829092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000612d5483600001836130b7565b60001c905092915050565b600080600080612d72866000018661313a565b915091508160001c8160001c9350935050509250929050565b6000612d9e846000018460001b846131d3565b60001c90509392505050565b6000612db8826000016132c9565b9050919050565b600080828401905083811015612e3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b612e618282604051806020016040528060008152506132da565b5050565b612e70848484612b02565b612e7c8484848461334b565b612ed1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180613d326032913960400191505060405180910390fd5b50505050565b60606000821415612f1f576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050613019565b600082905060005b60008214612f49578080600101915050600a8281612f4157fe5b049150612f27565b60608167ffffffffffffffff81118015612f6257600080fd5b506040519080825280601f01601f191660200182016040528015612f955781602001600182028036833780820191505090505b50905060006001830390508593505b6000841461301157600a8481612fb657fe5b0660300160f81b82828060019003935081518110612fd057fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a848161300957fe5b049350612fa4565b819450505050505b919050565b6000613030836000018360001b613564565b905092915050565b600081600001805490509050919050565b505050565b6000613060836000018360001b613587565b905092915050565b600061307a836000018360001b61366f565b905092915050565b60006130ae846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6136df565b90509392505050565b600081836000018054905011613118576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180613d106022913960400191505060405180910390fd5b82600001828154811061312757fe5b9060005260206000200154905092915050565b6000808284600001805490501161319c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180613e8b6022913960400191505060405180910390fd5b60008460000184815481106131ad57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b6000808460010160008581526020019081526020016000205490506000811415839061329a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561325f578082015181840152602081019050613244565b50505050905090810190601f16801561328c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106132ad57fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b6132e483836137bb565b6132f1600084848461334b565b613346576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180613d326032913960400191505060405180910390fd5b505050565b600061336c8473ffffffffffffffffffffffffffffffffffffffff166139af565b613379576001905061355c565b60606134e363150b7a0260e01b61338e612938565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156134125780820151818401526020810190506133f7565b50505050905090810190601f16801561343f5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001613d32603291398773ffffffffffffffffffffffffffffffffffffffff166139c29092919063ffffffff16565b905060008180602001905160208110156134fc57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b6000808360010160008481526020019081526020016000205490506000811461366357600060018203905060006001866000018054905003905060008660000182815481106135d257fe5b90600052602060002001549050808760000184815481106135ef57fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061362757fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050613669565b60009150505b92915050565b600061367b83836139da565b6136d45782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506136d9565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415613786578460000160405180604001604052808681526020018581525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084600001805490508560010160008681526020019081526020016000208190555060019150506137b4565b8285600001600183038154811061379957fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561385e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6138678161291b565b156138da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b6138e660008383613049565b61393781600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061306890919063ffffffff16565b5061394e818360026130829092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b60606139d184846000856139fd565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015613a58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613dae6026913960400191505060405180910390fd5b613a61856139af565b613ad3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310613b235780518252602082019150602081019050602083039250613b00565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114613b85576040519150601f19603f3d011682016040523d82523d6000602084013e613b8a565b606091505b5091509150613b9a828286613ba6565b92505050949350505050565b60608315613bb657829050613c6b565b600083511115613bc95782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613c30578082015181840152602081019050613c15565b50505050905090810190601f168015613c5d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10613cb357805160ff1916838001178555613ce1565b82800160010185558215613ce1579182015b82811115613ce0578251825591602001919060010190613cc5565b5b509050613cee9190613cf2565b5090565b5b80821115613d0b576000816000905550600101613cf3565b509056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220dcd2d66c4dacf985dad0302f7de9e0323d4bda7e7c1abcaa82dc579ac71fcd1964736f6c63430007000033",
  "deployedBytecode": "0x6080604052600436106101e35760003560e01c806370a0823111610102578063b66a0e5d11610095578063d348b40911610064578063d348b40914610d3c578063e985e9c514610d67578063f0c9dc6014610dee578063f2fde38b14610e7e576101e3565b8063b66a0e5d14610b34578063b88d4fde14610b4b578063c87b56dd14610c5d578063ca4e5d6d14610d11576101e3565b80638da5cb5b116100d15780638da5cb5b146109cb57806395d89b4114610a0c578063a22cb46514610a9c578063a40f1aa514610af9576101e3565b806370a082311461089f578063715018a6146109045780638462151c1461091b578063853828b6146109c1576101e3565b80632f745c591161017a57806355f804b31161014957806355f804b3146106935780636352211e1461075b5780636c0360eb146107c05780636fd9537f14610850576101e3565b80632f745c591461054357806342842e0e146105b25780634f6ccce71461062d57806355367ba91461067c576101e3565b806310969523116101b657806310969523146103a857806318160ddd146104705780631c8b232d1461049b57806323b872dd146104c8576101e3565b806301ffc9a7146101e857806306fdde0314610258578063081812fc146102e8578063095ea7b31461034d575b600080fd5b3480156101f457600080fd5b506102406004803603602081101561020b57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610ecf565b60405180821515815260200191505060405180910390f35b34801561026457600080fd5b5061026d610f36565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ad578082015181840152602081019050610292565b50505050905090810190601f1680156102da5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102f457600080fd5b506103216004803603602081101561030b57600080fd5b8101908080359060200190929190505050610fd8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561035957600080fd5b506103a66004803603604081101561037057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611073565b005b3480156103b457600080fd5b5061046e600480360360208110156103cb57600080fd5b81019080803590602001906401000000008111156103e857600080fd5b8201836020820111156103fa57600080fd5b8035906020019184600183028401116401000000008311171561041c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506111b7565b005b34801561047c57600080fd5b50610485611280565b6040518082815260200191505060405180910390f35b3480156104a757600080fd5b506104b0611291565b60405180821515815260200191505060405180910390f35b3480156104d457600080fd5b50610541600480360360608110156104eb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112a4565b005b34801561054f57600080fd5b5061059c6004803603604081101561056657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061131a565b6040518082815260200191505060405180910390f35b3480156105be57600080fd5b5061062b600480360360608110156105d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611375565b005b34801561063957600080fd5b506106666004803603602081101561065057600080fd5b8101908080359060200190929190505050611395565b6040518082815260200191505060405180910390f35b34801561068857600080fd5b506106916113b8565b005b34801561069f57600080fd5b50610759600480360360208110156106b657600080fd5b81019080803590602001906401000000008111156106d357600080fd5b8201836020820111156106e557600080fd5b8035906020019184600183028401116401000000008311171561070757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611484565b005b34801561076757600080fd5b506107946004803603602081101561077e57600080fd5b810190808035906020019092919050505061153f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156107cc57600080fd5b506107d5611576565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108155780820151818401526020810190506107fa565b50505050905090810190601f1680156108425780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561085c57600080fd5b506108896004803603602081101561087357600080fd5b8101908080359060200190929190505050611618565b6040518082815260200191505060405180910390f35b3480156108ab57600080fd5b506108ee600480360360208110156108c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061174e565b6040518082815260200191505060405180910390f35b34801561091057600080fd5b50610919611823565b005b34801561092757600080fd5b5061096a6004803603602081101561093e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611993565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156109ad578082015181840152602081019050610992565b505050509050019250505060405180910390f35b6109c9611a8c565b005b3480156109d757600080fd5b506109e0611b7b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610a1857600080fd5b50610a21611ba5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a61578082015181840152602081019050610a46565b50505050905090810190601f168015610a8e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610aa857600080fd5b50610af760048036036040811015610abf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611c47565b005b348015610b0557600080fd5b50610b3260048036036020811015610b1c57600080fd5b8101908080359060200190929190505050611dfd565b005b348015610b4057600080fd5b50610b49612001565b005b348015610b5757600080fd5b50610c5b60048036036080811015610b6e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610bd557600080fd5b820183602082011115610be757600080fd5b80359060200191846001830284011164010000000083111715610c0957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506120cd565b005b348015610c6957600080fd5b50610c9660048036036020811015610c8057600080fd5b8101908080359060200190929190505050612145565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cd6578082015181840152602081019050610cbb565b50505050905090810190601f168015610d035780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610d1d57600080fd5b50610d26612416565b6040518082815260200191505060405180910390f35b348015610d4857600080fd5b50610d5161241c565b6040518082815260200191505060405180910390f35b348015610d7357600080fd5b50610dd660048036036040811015610d8a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506125f4565b60405180821515815260200191505060405180910390f35b348015610dfa57600080fd5b50610e03612688565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e43578082015181840152602081019050610e28565b50505050905090810190601f168015610e705780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610e8a57600080fd5b50610ecd60048036036020811015610ea157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612726565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fce5780601f10610fa357610100808354040283529160200191610fce565b820191906000526020600020905b815481529060010190602001808311610fb157829003601f168201915b5050505050905090565b6000610fe38261291b565b611038576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613ead602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061107e8261153f565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611105576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180613f316021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16611124612938565b73ffffffffffffffffffffffffffffffffffffffff16148061115357506111528161114d612938565b6125f4565b5b6111a8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180613e006038913960400191505060405180910390fd5b6111b28383612940565b505050565b6111bf612938565b73ffffffffffffffffffffffffffffffffffffffff166111dd611b7b565b73ffffffffffffffffffffffffffffffffffffffff1614611266576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600b908051906020019061127c929190613c72565b5050565b600061128c60026129f9565b905090565b600a60149054906101000a900460ff1681565b6112b56112af612938565b82612a0e565b61130a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180613f526031913960400191505060405180910390fd5b611315838383612b02565b505050565b600061136d82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612d4590919063ffffffff16565b905092915050565b611390838383604051806020016040528060008152506120cd565b505050565b6000806113ac836002612d5f90919063ffffffff16565b50905080915050919050565b6113c0612938565b73ffffffffffffffffffffffffffffffffffffffff166113de611b7b565b73ffffffffffffffffffffffffffffffffffffffff1614611467576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000600a60146101000a81548160ff021916908315150217905550565b61148c612938565b73ffffffffffffffffffffffffffffffffffffffff166114aa611b7b565b73ffffffffffffffffffffffffffffffffffffffff1614611533576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61153c81611484565b50565b600061156f82604051806060016040528060298152602001613e62602991396002612d8b9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561160e5780601f106115e35761010080835404028352916020019161160e565b820191906000526020600020905b8154815290600101906020018083116115f157829003601f168201915b5050505050905090565b60006127108210611691576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53616c652068617320616c726561647920656e6465640000000000000000000081525060200191505060405180910390fd5b6126de82106116aa57670de0b6b3a76400009050611749565b61233c82106116c3576708e1bc9bf04000009050611749565b611b6c82106116dc57670470de4df82000009050611749565b610fb482106116f5576702386f26fc1000009050611749565b6107e4821061170e5767011c37937e0800009050611749565b6103fc821061172657668e1bc9bf0400009050611749565b610208821061173e5766470de4df8200009050611749565b662386f26fc1000090505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613e38602a913960400191505060405180910390fd5b61181c600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612daa565b9050919050565b61182b612938565b73ffffffffffffffffffffffffffffffffffffffff16611849611b7b565b73ffffffffffffffffffffffffffffffffffffffff16146118d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b606060006119a08361174e565b905060008114156119fb57600067ffffffffffffffff811180156119c357600080fd5b506040519080825280602002602001820160405280156119f25781602001602082028036833780820191505090505b50915050611a87565b60608167ffffffffffffffff81118015611a1457600080fd5b50604051908082528060200260200182016040528015611a435781602001602082028036833780820191505090505b50905060005b82811015611a8057611a5b858261131a565b828281518110611a6757fe5b6020026020010181815250508080600101915050611a49565b8193505050505b919050565b611a94612938565b73ffffffffffffffffffffffffffffffffffffffff16611ab2611b7b565b73ffffffffffffffffffffffffffffffffffffffff1614611b3b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050611b7957600080fd5b565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c3d5780601f10611c1257610100808354040283529160200191611c3d565b820191906000526020600020905b815481529060010190602001808311611c2057829003601f168201915b5050505050905090565b611c4f612938565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611cf0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060056000611cfd612938565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611daa612938565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b611e05612938565b73ffffffffffffffffffffffffffffffffffffffff16611e23611b7b565b73ffffffffffffffffffffffffffffffffffffffff1614611eac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000611eb6611280565b90506014611ed483611ec6611280565b612dbf90919063ffffffff16565b1115611f48576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f457863656564656420676976656177617920737570706c79000000000000000081525060200191505060405180910390fd5b60001515600a60149054906101000a900460ff16151514611fd1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f53616c652068617320616c72656164792073746172746564000000000000000081525060200191505060405180910390fd5b60005b82811015611ffc57611fef611fe7611b7b565b828401612e47565b8080600101915050611fd4565b505050565b612009612938565b73ffffffffffffffffffffffffffffffffffffffff16612027611b7b565b73ffffffffffffffffffffffffffffffffffffffff16146120b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6001600a60146101000a81548160ff021916908315150217905550565b6120de6120d8612938565b83612a0e565b612133576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180613f526031913960400191505060405180910390fd5b61213f84848484612e65565b50505050565b60606121508261291b565b6121a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180613f02602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561224e5780601f106122235761010080835404028352916020019161224e565b820191906000526020600020905b81548152906001019060200180831161223157829003601f168201915b50505050509050606061225f611576565b9050600081511415612275578192505050612411565b6000825111156123465780826040516020018083805190602001908083835b602083106122b75780518252602082019150602081019050602083039250612294565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b6020831061230857805182526020820191506020810190506020830392506122e5565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050612411565b8061235085612ed7565b6040516020018083805190602001908083835b602083106123865780518252602082019150602081019050602083039250612363565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106123d757805182526020820191506020810190506020830392506123b4565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b61271081565b600060011515600a60149054906101000a900460ff161515146124a7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f53616c65206861736e277420737461727465640000000000000000000000000081525060200191505060405180910390fd5b6127106124b2611280565b10612525576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53616c652068617320616c726561647920656e6465640000000000000000000081525060200191505060405180910390fd5b600061252f611280565b90506126de811061254b57670de0b6b3a76400009150506125f1565b61233c8110612565576708e1bc9bf04000009150506125f1565b611b6c811061257f57670470de4df82000009150506125f1565b610fb48110612599576702386f26fc1000009150506125f1565b6107e481106125b35767011c37937e0800009150506125f1565b6103fc81106125cc57668e1bc9bf0400009150506125f1565b61020881106125e55766470de4df8200009150506125f1565b662386f26fc100009150505b90565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b8054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561271e5780601f106126f35761010080835404028352916020019161271e565b820191906000526020600020905b81548152906001019060200180831161270157829003601f168201915b505050505081565b61272e612938565b73ffffffffffffffffffffffffffffffffffffffff1661274c611b7b565b73ffffffffffffffffffffffffffffffffffffffff16146127d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561285b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613d646026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600061293182600261301e90919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166129b38361153f565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000612a0782600001613038565b9050919050565b6000612a198261291b565b612a6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613dd4602c913960400191505060405180910390fd5b6000612a798361153f565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612ae857508373ffffffffffffffffffffffffffffffffffffffff16612ad084610fd8565b73ffffffffffffffffffffffffffffffffffffffff16145b80612af95750612af881856125f4565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16612b228261153f565b73ffffffffffffffffffffffffffffffffffffffff1614612b8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180613ed96029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612c14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180613d8a6024913960400191505060405180910390fd5b612c1f838383613049565b612c2a600082612940565b612c7b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061304e90919063ffffffff16565b50612ccd81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061306890919063ffffffff16565b50612ce4818360026130829092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000612d5483600001836130b7565b60001c905092915050565b600080600080612d72866000018661313a565b915091508160001c8160001c9350935050509250929050565b6000612d9e846000018460001b846131d3565b60001c90509392505050565b6000612db8826000016132c9565b9050919050565b600080828401905083811015612e3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b612e618282604051806020016040528060008152506132da565b5050565b612e70848484612b02565b612e7c8484848461334b565b612ed1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180613d326032913960400191505060405180910390fd5b50505050565b60606000821415612f1f576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050613019565b600082905060005b60008214612f49578080600101915050600a8281612f4157fe5b049150612f27565b60608167ffffffffffffffff81118015612f6257600080fd5b506040519080825280601f01601f191660200182016040528015612f955781602001600182028036833780820191505090505b50905060006001830390508593505b6000841461301157600a8481612fb657fe5b0660300160f81b82828060019003935081518110612fd057fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a848161300957fe5b049350612fa4565b819450505050505b919050565b6000613030836000018360001b613564565b905092915050565b600081600001805490509050919050565b505050565b6000613060836000018360001b613587565b905092915050565b600061307a836000018360001b61366f565b905092915050565b60006130ae846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6136df565b90509392505050565b600081836000018054905011613118576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180613d106022913960400191505060405180910390fd5b82600001828154811061312757fe5b9060005260206000200154905092915050565b6000808284600001805490501161319c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180613e8b6022913960400191505060405180910390fd5b60008460000184815481106131ad57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b6000808460010160008581526020019081526020016000205490506000811415839061329a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561325f578082015181840152602081019050613244565b50505050905090810190601f16801561328c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106132ad57fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b6132e483836137bb565b6132f1600084848461334b565b613346576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180613d326032913960400191505060405180910390fd5b505050565b600061336c8473ffffffffffffffffffffffffffffffffffffffff166139af565b613379576001905061355c565b60606134e363150b7a0260e01b61338e612938565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156134125780820151818401526020810190506133f7565b50505050905090810190601f16801561343f5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001613d32603291398773ffffffffffffffffffffffffffffffffffffffff166139c29092919063ffffffff16565b905060008180602001905160208110156134fc57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b6000808360010160008481526020019081526020016000205490506000811461366357600060018203905060006001866000018054905003905060008660000182815481106135d257fe5b90600052602060002001549050808760000184815481106135ef57fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061362757fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050613669565b60009150505b92915050565b600061367b83836139da565b6136d45782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506136d9565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415613786578460000160405180604001604052808681526020018581525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084600001805490508560010160008681526020019081526020016000208190555060019150506137b4565b8285600001600183038154811061379957fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561385e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6138678161291b565b156138da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b6138e660008383613049565b61393781600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061306890919063ffffffff16565b5061394e818360026130829092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b60606139d184846000856139fd565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015613a58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180613dae6026913960400191505060405180910390fd5b613a61856139af565b613ad3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310613b235780518252602082019150602081019050602083039250613b00565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114613b85576040519150601f19603f3d011682016040523d82523d6000602084013e613b8a565b606091505b5091509150613b9a828286613ba6565b92505050949350505050565b60608315613bb657829050613c6b565b600083511115613bc95782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613c30578082015181840152602081019050613c15565b50505050905090810190601f168015613c5d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10613cb357805160ff1916838001178555613ce1565b82800160010185558215613ce1579182015b82811115613ce0578251825591602001919060010190613cc5565b5b509050613cee9190613cf2565b5090565b5b80821115613d0b576000816000905550600101613cf3565b509056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220dcd2d66c4dacf985dad0302f7de9e0323d4bda7e7c1abcaa82dc579ac71fcd1964736f6c63430007000033",
  "immutableReferences": {},
  "sourceMap": "222:4329:0:-:0;;;441:5;412:34;;;;;;;;;;;;;;;;;;;;480:43;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;531:53;;;;;;;;;;3577:369:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;768:40:2;435:10;787:20;;768:18;;;:40;;:::i;:::-;3659:5:5;3651;:13;;;;;;;;;;;;:::i;:::-;;3684:7;3674;:17;;;;;;;;;;;;:::i;:::-;;3779:40;2742:10;3798:20;;3779:18;;;:40;;:::i;:::-;3829:49;3074:10;3848:29;;3829:18;;;:49;;:::i;:::-;3888:51;3447:10;3907:31;;3888:18;;;:51;;:::i;:::-;3577:369;;884:17:1;904:12;:10;;;:12;;:::i;:::-;884:32;;935:9;926:6;;:18;;;;;;;;;;;;;;;;;;992:9;959:43;;988:1;959:43;;;;;;;;;;;;850:159;222:4329:0;;1507:198:2;1605:10;1590:25;;:11;:25;;;;;1582:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1694:4;1658:20;:33;1679:11;1658:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1507:198;:::o;598:104:11:-;651:15;685:10;678:17;;598:104;:::o;222:4329:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "222:4329:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:148:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;4517:98:5;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7222:217;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;6766:395;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3429:114:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6260:208:5;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;412:34:0;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;8086:300:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6029:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8452:149;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6540:169;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3863:77:0;;;;;;;;;;;;;:::i;:::-;;3583:128;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4280:175:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;5855:95;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2351:1030:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4005:218:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1717:145:1;;;;;;;;;;;;;:::i;:::-;;590:528:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3947:121;;;:::i;:::-;;1085:85:1;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;4679:102:5;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7506:290;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4074:471:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3749:76;;;;;;;;;;;;;:::i;:::-;;8667:282:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4847:776;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;368:38:0;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1124:1220;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7862:162:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;480:43:0;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2011:240:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;965:148:2;1050:4;1073:20;:33;1094:11;1073:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1066:40;;965:148;;;:::o;4517:98:5:-;4571:13;4603:5;4596:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4517:98;:::o;7222:217::-;7298:7;7325:16;7333:7;7325;:16::i;:::-;7317:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7408:15;:24;7424:7;7408:24;;;;;;;;;;;;;;;;;;;;;7401:31;;7222:217;;;:::o;6766:395::-;6846:13;6862:23;6877:7;6862:14;:23::i;:::-;6846:39;;6909:5;6903:11;;:2;:11;;;;6895:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6987:5;6971:21;;:12;:10;:12::i;:::-;:21;;;:69;;;;6996:44;7020:5;7027:12;:10;:12::i;:::-;6996:23;:44::i;:::-;6971:69;6963:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7133:21;7142:2;7146:7;7133:8;:21::i;:::-;6766:395;;;:::o;3429:114:0:-;1308:12:1;:10;:12::i;:::-;1297:23;;:7;:5;:7::i;:::-;:23;;;1289:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3531:5:0::1;3504:24;:32;;;;;;;;;;;;:::i;:::-;;3429:114:::0;:::o;6260:208:5:-;6321:7;6440:21;:12;:19;:21::i;:::-;6433:28;;6260:208;:::o;412:34:0:-;;;;;;;;;;;;;:::o;8086:300:5:-;8245:41;8264:12;:10;:12::i;:::-;8278:7;8245:18;:41::i;:::-;8237:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8351:28;8361:4;8367:2;8371:7;8351:9;:28::i;:::-;8086:300;;;:::o;6029:160::-;6126:7;6152:30;6176:5;6152:13;:20;6166:5;6152:20;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6145:37;;6029:160;;;;:::o;8452:149::-;8555:39;8572:4;8578:2;8582:7;8555:39;;;;;;;;;;;;:16;:39::i;:::-;8452:149;;;:::o;6540:169::-;6615:7;6635:15;6656:22;6672:5;6656:12;:15;;:22;;;;:::i;:::-;6634:44;;;6695:7;6688:14;;;6540:169;;;:::o;3863:77:0:-;1308:12:1;:10;:12::i;:::-;1297:23;;:7;:5;:7::i;:::-;:23;;;1289:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3928:5:0::1;3911:14;;:22;;;;;;;;;;;;;;;;;;3863:77::o:0;3583:128::-;1308:12:1;:10;:12::i;:::-;1297:23;;:7;:5;:7::i;:::-;:23;;;1289:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3685:19:0::1;3696:7;3685:10;:19::i;:::-;3583:128:::0;:::o;4280:175:5:-;4352:7;4378:70;4395:7;4378:70;;;;;;;;;;;;;;;;;:12;:16;;:70;;;;;:::i;:::-;4371:77;;4280:175;;;:::o;5855:95::-;5903:13;5935:8;5928:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5855:95;:::o;2351:1030:0:-;2414:7;401:5;2441:3;:15;2433:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2505:4;2498:3;:11;2494:881;;2532:19;2525:26;;;;2494:881;2616:4;2609:3;:11;2605:770;;2643:18;2636:25;;;;2605:770;2730:4;2723:3;:11;2719:656;;2757:18;2750:25;;;;2719:656;2845:4;2838:3;:11;2834:541;;2872:18;2865:25;;;;2834:541;2960:4;2953:3;:11;2949:426;;2987:17;2980:24;;;;2949:426;3075:4;3068:3;:11;3064:311;;3102:17;3095:24;;;;3064:311;3190:3;3183;:10;3179:196;;3216:17;3209:24;;;;3179:196;3307:17;3300:24;;2351:1030;;;;:::o;4005:218:5:-;4077:7;4121:1;4104:19;;:5;:19;;;;4096:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4187:29;:13;:20;4201:5;4187:20;;;;;;;;;;;;;;;:27;:29::i;:::-;4180:36;;4005:218;;;:::o;1717:145:1:-;1308:12;:10;:12::i;:::-;1297:23;;:7;:5;:7::i;:::-;:23;;;1289:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1823:1:::1;1786:40;;1807:6;;;;;;;;;;;1786:40;;;;;;;;;;;;1853:1;1836:6;;:19;;;;;;;;;;;;;;;;;;1717:145::o:0;590:528:0:-;651:16;680:18;701:17;711:6;701:9;:17::i;:::-;680:38;;747:1;733:10;:15;729:383;;;822:1;808:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;801:23;;;;;729:383;855:23;895:10;881:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;855:51;;920:13;947:128;971:10;963:5;:18;947:128;;;1026:34;1046:6;1054:5;1026:19;:34::i;:::-;1010:6;1017:5;1010:13;;;;;;;;;;;;;:50;;;;;983:7;;;;;;;947:128;;;1095:6;1088:13;;;;;590:528;;;;:::o;3947:121::-;1308:12:1;:10;:12::i;:::-;1297:23;;:7;:5;:7::i;:::-;:23;;;1289:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4021:10:0::1;4013:24;;:47;4038:21;4013:47;;;;;;;;;;;;;;;;;;;;;;;4005:56;;;::::0;::::1;;3947:121::o:0;1085:85:1:-;1131:7;1157:6;;;;;;;;;;;1150:13;;1085:85;:::o;4679:102:5:-;4735:13;4767:7;4760:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4679:102;:::o;7506:290::-;7620:12;:10;:12::i;:::-;7608:24;;:8;:24;;;;7600:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7718:8;7673:18;:32;7692:12;:10;:12::i;:::-;7673:32;;;;;;;;;;;;;;;:42;7706:8;7673:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;7770:8;7741:48;;7756:12;:10;:12::i;:::-;7741:48;;;7780:8;7741:48;;;;;;;;;;;;;;;;;;;;7506:290;;:::o;4074:471:0:-;1308:12:1;:10;:12::i;:::-;1297:23;;:7;:5;:7::i;:::-;:23;;;1289:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4144:18:0::1;4165:13;:11;:13::i;:::-;4144:34;;4227:2;4196:27;4214:8;4196:13;:11;:13::i;:::-;:17;;:27;;;;:::i;:::-;:33;;4188:70;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;4294:5;4276:23;;:14;;;;;;;;;;;:23;;;4268:60;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;4338:13;4430:109;4454:8;4446:5;:16;4430:109;;;4487:41;4497:7;:5;:7::i;:::-;4522:5;4506:13;:21;4487:9;:41::i;:::-;4464:7;;;;;;;4430:109;;;1367:1:1;;4074:471:0::0;:::o;3749:76::-;1308:12:1;:10;:12::i;:::-;1297:23;;:7;:5;:7::i;:::-;:23;;;1289:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3814:4:0::1;3797:14;;:21;;;;;;;;;;;;;;;;;;3749:76::o:0;8667:282:5:-;8798:41;8817:12;:10;:12::i;:::-;8831:7;8798:18;:41::i;:::-;8790:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8903:39;8917:4;8923:2;8927:7;8936:5;8903:13;:39::i;:::-;8667:282;;;;:::o;4847:776::-;4920:13;4953:16;4961:7;4953;:16::i;:::-;4945:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5032:23;5058:10;:19;5069:7;5058:19;;;;;;;;;;;5032:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5087:18;5108:9;:7;:9::i;:::-;5087:30;;5212:1;5196:4;5190:18;:23;5186:70;;;5236:9;5229:16;;;;;;5186:70;5384:1;5364:9;5358:23;:27;5354:106;;;5432:4;5438:9;5415:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5401:48;;;;;;5354:106;5590:4;5596:18;:7;:16;:18::i;:::-;5573:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5559:57;;;;4847:776;;;;:::o;368:38:0:-;401:5;368:38;:::o;1124:1220::-;1171:7;1216:4;1198:22;;:14;;;;;;;;;;;:22;;;1190:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;401:5;1262:13;:11;:13::i;:::-;:25;1254:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1325:18;1346:13;:11;:13::i;:::-;1325:34;;1390:4;1373:13;:21;1369:969;;1417:19;1410:26;;;;;1369:969;1511:4;1494:13;:21;1490:848;;1538:18;1531:25;;;;;1490:848;1635:4;1618:13;:21;1614:724;;1662:18;1655:25;;;;;1614:724;1760:4;1743:13;:21;1739:599;;1787:18;1780:25;;;;;1739:599;1885:4;1868:13;:21;1864:474;;1912:17;1905:24;;;;;1864:474;2010:4;1993:13;:21;1989:349;;2037:17;2030:24;;;;;1989:349;2135:3;2118:13;:20;2114:224;;2161:17;2154:24;;;;;2114:224;2258:17;2251:24;;;1124:1220;;:::o;7862:162:5:-;7959:4;7982:18;:25;8001:5;7982:25;;;;;;;;;;;;;;;:35;8008:8;7982:35;;;;;;;;;;;;;;;;;;;;;;;;;7975:42;;7862:162;;;;:::o;480:43:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2011:240:1:-;1308:12;:10;:12::i;:::-;1297:23;;:7;:5;:7::i;:::-;:23;;;1289:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2119:1:::1;2099:22;;:8;:22;;;;2091:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2208:8;2179:38;;2200:6;;;;;;;;;;;2179:38;;;;;;;;;;;;2236:8;2227:6;;:17;;;;;;;;;;;;;;;;;;2011:240:::0;:::o;10383:125:5:-;10448:4;10471:30;10493:7;10471:12;:21;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;598:104:11:-;651:15;685:10;678:17;;598:104;:::o;16225:189:5:-;16326:2;16299:15;:24;16315:7;16299:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;16381:7;16377:2;16343:46;;16352:23;16367:7;16352:14;:23::i;:::-;16343:46;;;;;;;;;;;;16225:189;;:::o;7820:121:12:-;7889:7;7915:19;7923:3;:10;;7915:7;:19::i;:::-;7908:26;;7820:121;;;:::o;10666:351:5:-;10759:4;10783:16;10791:7;10783;:16::i;:::-;10775:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10858:13;10874:23;10889:7;10874:14;:23::i;:::-;10858:39;;10926:5;10915:16;;:7;:16;;;:51;;;;10959:7;10935:31;;:20;10947:7;10935:11;:20::i;:::-;:31;;;10915:51;:94;;;;10970:39;10994:5;11001:7;10970:23;:39::i;:::-;10915:94;10907:103;;;10666:351;;;;:::o;13707:584::-;13831:4;13804:31;;:23;13819:7;13804:14;:23::i;:::-;:31;;;13796:85;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13931:1;13917:16;;:2;:16;;;;13909:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13985:39;14006:4;14012:2;14016:7;13985:20;:39::i;:::-;14086:29;14103:1;14107:7;14086:8;:29::i;:::-;14126:35;14153:7;14126:13;:19;14140:4;14126:19;;;;;;;;;;;;;;;:26;;:35;;;;:::i;:::-;;14171:30;14193:7;14171:13;:17;14185:2;14171:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;14212:29;14229:7;14238:2;14212:12;:16;;:29;;;;;:::i;:::-;;14276:7;14272:2;14257:27;;14266:4;14257:27;;;;;;;;;;;;13707:584;;;:::o;9250:135:13:-;9321:7;9355:22;9359:3;:10;;9371:5;9355:3;:22::i;:::-;9347:31;;9340:38;;9250:135;;;;:::o;8269:233:12:-;8349:7;8358;8378:11;8391:13;8408:22;8412:3;:10;;8424:5;8408:3;:22::i;:::-;8377:53;;;;8456:3;8448:12;;8486:5;8478:14;;8440:55;;;;;;8269:233;;;;;:::o;9522:211::-;9629:7;9679:44;9684:3;:10;;9704:3;9696:12;;9710;9679:4;:44::i;:::-;9671:53;;9648:78;;9522:211;;;;;:::o;8806:112:13:-;8866:7;8892:19;8900:3;:10;;8892:7;:19::i;:::-;8885:26;;8806:112;;;:::o;2690:175:4:-;2748:7;2767:9;2783:1;2779;:5;2767:17;;2807:1;2802;:6;;2794:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2857:1;2850:8;;;2690:175;;;;:::o;11348:108:5:-;11423:26;11433:2;11437:7;11423:26;;;;;;;;;;;;:9;:26::i;:::-;11348:108;;:::o;9811:269::-;9924:28;9934:4;9940:2;9944:7;9924:9;:28::i;:::-;9970:48;9993:4;9999:2;10003:7;10012:5;9970:22;:48::i;:::-;9962:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9811:269;;;;:::o;210:725:14:-;266:13;492:1;483:5;:10;479:51;;;509:10;;;;;;;;;;;;;;;;;;;;;479:51;539:12;554:5;539:20;;569:14;593:75;608:1;600:4;:9;593:75;;625:8;;;;;;;655:2;647:10;;;;;;;;;593:75;;;677:19;709:6;699:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;677:39;;726:13;751:1;742:6;:10;726:26;;769:5;762:12;;784:114;799:1;791:4;:9;784:114;;859:2;852:4;:9;;;;;;847:2;:14;834:29;;816:6;823:7;;;;;;;816:15;;;;;;;;;;;:47;;;;;;;;;;;885:2;877:10;;;;;;;;;784:114;;;921:6;907:21;;;;;;210:725;;;;:::o;7588:149:12:-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;:35::i;:::-;7688:42;;7588:149;;;;:::o;4491:108::-;4547:7;4573:3;:12;;:19;;;;4566:26;;4491:108;;;:::o;17010:93:5:-;;;;:::o;8365:135:13:-;8435:4;8458:35;8466:3;:10;;8486:5;8478:14;;8458:7;:35::i;:::-;8451:42;;8365:135;;;;:::o;8068:129::-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;:32::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:12:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;:64::i;:::-;7132:71;;7027:183;;;;;:::o;4452:201:13:-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;4942:274:12:-;5009:7;5018;5067:5;5045:3;:12;;:19;;;;:27;5037:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5122:22;5147:3;:12;;5160:5;5147:19;;;;;;;;;;;;;;;;;;5122:44;;5184:5;:10;;;5196:5;:12;;;5176:33;;;;;4942:274;;;;;:::o;6403:315::-;6497:7;6516:16;6535:3;:12;;:17;6548:3;6535:17;;;;;;;;;;;;6516:36;;6582:1;6570:8;:13;;6585:12;6562:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6651:3;:12;;6675:1;6664:8;:12;6651:26;;;;;;;;;;;;;;;;;;:33;;;6644:40;;;6403:315;;;;;:::o;4013:107:13:-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;11677:247:5:-;11772:18;11778:2;11782:7;11772:5;:18::i;:::-;11808:54;11839:1;11843:2;11847:7;11856:5;11808:22;:54::i;:::-;11800:117;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11677:247;;;:::o;15524:589::-;15644:4;15669:15;:2;:13;;;:15::i;:::-;15664:58;;15707:4;15700:11;;;;15664:58;15731:23;15757:246;15809:45;;;15868:12;:10;:12::i;:::-;15894:4;15912:7;15933:5;15773:175;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15757:246;;;;;;;;;;;;;;;;;:2;:15;;;;:246;;;;;:::i;:::-;15731:272;;16013:13;16040:10;16029:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16013:48;;1078:10;16089:16;;16079:26;;;:6;:26;;;;16071:35;;;;15524:589;;;;;;;:::o;4278:123:12:-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;2212:1512:13:-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:12:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;12246:393:5:-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;:16::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;:45::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;726:413:10:-;786:4;989:12;1098:7;1086:20;1078:28;;1131:1;1124:4;:8;1117:15;;;726:413;;;:::o;3581:193::-;3684:12;3715:52;3737:6;3745:4;3751:1;3754:12;3715:21;:52::i;:::-;3708:59;;3581:193;;;;;:::o;3805:127:13:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4608:523:10:-;4735:12;4792:5;4767:21;:30;;4759:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:18;4869:6;4858:10;:18::i;:::-;4850:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4981:12;4995:23;5022:6;:11;;5042:5;5050:4;5022:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4980:75;;;;5072:52;5090:7;5099:10;5111:12;5072:17;:52::i;:::-;5065:59;;;;4608:523;;;;;;:::o;7091:725::-;7206:12;7234:7;7230:580;;;7264:10;7257:17;;;;7230:580;7395:1;7375:10;:17;:21;7371:429;;;7633:10;7627:17;7693:15;7680:10;7676:2;7672:19;7665:44;7582:145;7772:12;7765:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7091:725;;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "\n// SPDX-License-Identifier: MIT\npragma solidity ^0.7.0;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/math/SafeMath.sol\";\n\ncontract CMNFT is ERC721, Ownable {\n\n\n    using SafeMath for uint256; // error removed with SafeMath.sol import\n    using SafeMath for uint;\n\n    uint public constant MAX_CMLOT = 10000;\n    bool public hasSaleStarted = false;\n\n\n    // The IPFS hash\n    \n    string public METADATA_PROVENANCE_HASH = \"\";\n\n\n    constructor() ERC721 (\"Cryptomorial NFT\", \"CMNFT\") {}\n\n    function tokensOfOwner(address _owner) external view returns(uint256[] memory ) {\n        uint256 tokenCount = balanceOf(_owner); \n        if (tokenCount == 0) {\n            // Return an empty array\n            return new uint256[](0);\n        } else {\n            uint256[] memory result = new uint256[](tokenCount);\n            uint256 index;\n            for (index = 0; index < tokenCount; index++) {\n                result[index] = tokenOfOwnerByIndex(_owner, index);\n            }\n            return result;\n        }\n    }\n\n    function calculatePrice() public view returns (uint256) {\n        require(hasSaleStarted == true, \"Sale hasn't started\");\n        require(totalSupply() < MAX_CMLOT, \"Sale has already ended\");\n\n        uint currentSupply = totalSupply();\n        if (currentSupply >= 9950) {\n            return 1000000000000000000;        // 9950-9999 (50) -> 1.00 ETH\n        } else if (currentSupply >= 9020) {\n            return 640000000000000000;         // 9020 - 9949 (930) -> 0.64 ETH\n        } else if (currentSupply >= 7020) {\n            return 320000000000000000;         // 7020 - 9019 (2000) -> 0.32 ETH\n        } else if (currentSupply >= 4020) {\n            return 160000000000000000;         // 4020 - 7019 (3000) -> 0.16 ETH\n        } else if (currentSupply >= 2020) {\n            return 80000000000000000;          // 2020 -4019 (2000) -> 0.08 ETH \n        } else if (currentSupply >= 1020) {\n            return 40000000000000000;          // 1020 - 2019 (1000)-> 0.04 ETH \n        } else if (currentSupply >= 520) {\n            return 20000000000000000;          // 520 - 1019 (500) -> 0.02 ETH \n        } else {\n            return 10000000000000000;          // 0 - 519  (500 + 20 Premint) -> 0.01 ETH\n        }\n    }\n\n     function calculatePriceForToken(uint _id) public pure returns (uint256) {\n        require(_id < MAX_CMLOT, \"Sale has already ended\");\n\n        if (_id >= 9950) {\n            return 1000000000000000000;        // 9950-9999 (50) -> 1.00 ETH\n        } else if (_id >= 9020) {\n            return 640000000000000000;         // 9020 - 9949 (930) -> 0.64 ETH\n        } else if (_id >= 7020) {\n            return 320000000000000000;         // 7020 - 9019 (2000) -> 0.32 ETH\n        } else if (_id >= 4020) {\n            return 160000000000000000;         // 4020 - 7019 (3000) -> 0.16 ETH\n        } else if (_id >= 2020) {\n            return 80000000000000000;          // 2020 -4019 (2000) -> 0.08 ETH \n        } else if (_id >= 1020) {\n            return 40000000000000000;          // 1020 - 2019 (1000)-> 0.04 ETH \n        } else if (_id >= 520) {\n            return 20000000000000000;          // 520 - 1019  -> 0.02 ETH\n        } else {\n            return 10000000000000000;          // 0 - 519 -> 0.01 ETH        \n        }\n    }\n\n    // Owner Funtions - setProvenanceHash\n    function setProvenanceHash(string memory _hash) public onlyOwner {\n        METADATA_PROVENANCE_HASH = _hash;\n    }\n    // Owner Funtions - setBaseURI\n    function setBaseURI(string memory baseURI) public onlyOwner {\n        //_setBaseURI(baseURI);\n        setBaseURI(baseURI);\n    }\n    // Owner Funtion - startSale\n    function startSale() public onlyOwner {\n        hasSaleStarted = true;\n    }\n    // Owner Funtion - pauseSale\n    function pauseSale() public onlyOwner {\n        hasSaleStarted = false;\n    }\n\n\n    function withdrawAll() public payable onlyOwner {\n        require(payable(msg.sender).send(address(this).balance));\n    }\n\n    function reserveGiveaway(uint256 numCMLot) public onlyOwner {\n        uint currentSupply = totalSupply();\n        require(totalSupply().add(numCMLot) <= 20, \"Exceeded giveaway supply\");\n        require(hasSaleStarted == false, \"Sale has already started\");\n        uint256 index;\n        // Reserved for people who helped this project and giveaways\n        for (index = 0; index < numCMLot; index++) {\n            _safeMint(owner(), currentSupply + index);\n        }\n    }\n  \n\n}",
  "sourcePath": "/Users/nlpacademy/Library/Mobile Documents/com~apple~CloudDocs/MAMP-PRO/solidity-projects/cmnft-concept/src/contracts/CMNFT.sol",
  "ast": {
    "absolutePath": "/Users/nlpacademy/Library/Mobile Documents/com~apple~CloudDocs/MAMP-PRO/solidity-projects/cmnft-concept/src/contracts/CMNFT.sol",
    "exportedSymbols": {
      "CMNFT": [
        360
      ]
    },
    "id": 361,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.7",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 361,
        "sourceUnit": 1839,
        "src": "58:57:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 361,
        "sourceUnit": 471,
        "src": "116:52:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/math/SafeMath.sol",
        "file": "@openzeppelin/contracts/math/SafeMath.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 361,
        "sourceUnit": 895,
        "src": "169:51:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1838,
              "src": "240:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$1838",
                "typeString": "contract ERC721"
              }
            },
            "id": 6,
            "nodeType": "InheritanceSpecifier",
            "src": "240:6:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 470,
              "src": "248:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$470",
                "typeString": "contract Ownable"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "248:7:0"
          }
        ],
        "contractDependencies": [
          470,
          527,
          539,
          1838,
          1954,
          1985,
          2012,
          2349
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 360,
        "linearizedBaseContracts": [
          360,
          470,
          1838,
          1985,
          2012,
          1954,
          527,
          539,
          2349
        ],
        "name": "CMNFT",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 11,
            "libraryName": {
              "contractScope": null,
              "id": 9,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 894,
              "src": "270:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$894",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "264:27:0",
            "typeName": {
              "id": 10,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "283:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 14,
            "libraryName": {
              "contractScope": null,
              "id": 12,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 894,
              "src": "344:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$894",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "338:24:0",
            "typeName": {
              "id": 13,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "357:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": true,
            "functionSelector": "ca4e5d6d",
            "id": 17,
            "mutability": "constant",
            "name": "MAX_CMLOT",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 360,
            "src": "368:38:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 15,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "368:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3130303030",
              "id": 16,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "401:5:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000_by_1",
                "typeString": "int_const 10000"
              },
              "value": "10000"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "1c8b232d",
            "id": 20,
            "mutability": "mutable",
            "name": "hasSaleStarted",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 360,
            "src": "412:34:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 18,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "412:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 19,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "441:5:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "f0c9dc60",
            "id": 23,
            "mutability": "mutable",
            "name": "METADATA_PROVENANCE_HASH",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 360,
            "src": "480:43:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 21,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "480:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "",
              "id": 22,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "521:2:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                "typeString": "literal_string \"\""
              },
              "value": ""
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 30,
              "nodeType": "Block",
              "src": "582:2:0",
              "statements": []
            },
            "documentation": null,
            "id": 31,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "43727970746f6d6f7269616c204e4654",
                    "id": 26,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "553:18:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_6c008c429f4cc28b7321e808cebd8a38e4fba9382204caeeb46ac4f0daff062b",
                      "typeString": "literal_string \"Cryptomorial NFT\""
                    },
                    "value": "Cryptomorial NFT"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "434d4e4654",
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "573:7:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_d864508480c71df07313a514d763ee06bfad28e5bcc1fefd92e88901b562ad98",
                      "typeString": "literal_string \"CMNFT\""
                    },
                    "value": "CMNFT"
                  }
                ],
                "id": 28,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 25,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1838,
                  "src": "545:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$1838_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "545:36:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 24,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "542:2:0"
            },
            "returnParameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "582:0:0"
            },
            "scope": 360,
            "src": "531:53:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 94,
              "nodeType": "Block",
              "src": "670:448:0",
              "statements": [
                {
                  "assignments": [
                    40
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 40,
                      "mutability": "mutable",
                      "name": "tokenCount",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 94,
                      "src": "680:18:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 39,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "680:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 44,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 42,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "711:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 41,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1026,
                      "src": "701:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view returns (uint256)"
                      }
                    },
                    "id": 43,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "701:17:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "680:38:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 47,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 45,
                      "name": "tokenCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40,
                      "src": "733:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 46,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "747:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "733:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 92,
                    "nodeType": "Block",
                    "src": "841:271:0",
                    "statements": [
                      {
                        "assignments": [
                          59
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 59,
                            "mutability": "mutable",
                            "name": "result",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 92,
                            "src": "855:23:0",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[]"
                            },
                            "typeName": {
                              "baseType": {
                                "id": 57,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "855:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 58,
                              "length": null,
                              "nodeType": "ArrayTypeName",
                              "src": "855:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                "typeString": "uint256[]"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 65,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 63,
                              "name": "tokenCount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 40,
                              "src": "895:10:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 62,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "NewExpression",
                            "src": "881:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "function (uint256) pure returns (uint256[] memory)"
                            },
                            "typeName": {
                              "baseType": {
                                "id": 60,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "885:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 61,
                              "length": null,
                              "nodeType": "ArrayTypeName",
                              "src": "885:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                "typeString": "uint256[]"
                              }
                            }
                          },
                          "id": 64,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "881:25:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                            "typeString": "uint256[] memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "855:51:0"
                      },
                      {
                        "assignments": [
                          67
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 67,
                            "mutability": "mutable",
                            "name": "index",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 92,
                            "src": "920:13:0",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 66,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "920:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 68,
                        "initialValue": null,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "920:13:0"
                      },
                      {
                        "body": {
                          "id": 88,
                          "nodeType": "Block",
                          "src": "992:83:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 86,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 79,
                                    "name": "result",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 59,
                                    "src": "1010:6:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 81,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 80,
                                    "name": "index",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 67,
                                    "src": "1017:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "1010:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 83,
                                      "name": "_owner",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 33,
                                      "src": "1046:6:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 84,
                                      "name": "index",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 67,
                                      "src": "1054:5:0",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 82,
                                    "name": "tokenOfOwnerByIndex",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1158,
                                    "src": "1026:19:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                                      "typeString": "function (address,uint256) view returns (uint256)"
                                    }
                                  },
                                  "id": 85,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1026:34:0",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1010:50:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 87,
                              "nodeType": "ExpressionStatement",
                              "src": "1010:50:0"
                            }
                          ]
                        },
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 75,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 73,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67,
                            "src": "963:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 74,
                            "name": "tokenCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40,
                            "src": "971:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "963:18:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 89,
                        "initializationExpression": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 71,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 69,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67,
                              "src": "952:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 70,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "960:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "952:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 72,
                          "nodeType": "ExpressionStatement",
                          "src": "952:9:0"
                        },
                        "loopExpression": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 77,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "++",
                            "prefix": false,
                            "src": "983:7:0",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 76,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 67,
                              "src": "983:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 78,
                          "nodeType": "ExpressionStatement",
                          "src": "983:7:0"
                        },
                        "nodeType": "ForStatement",
                        "src": "947:128:0"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 90,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59,
                          "src": "1095:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                            "typeString": "uint256[] memory"
                          }
                        },
                        "functionReturnParameters": 38,
                        "id": 91,
                        "nodeType": "Return",
                        "src": "1088:13:0"
                      }
                    ]
                  },
                  "id": 93,
                  "nodeType": "IfStatement",
                  "src": "729:383:0",
                  "trueBody": {
                    "id": 54,
                    "nodeType": "Block",
                    "src": "750:85:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 51,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "822:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 50,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "NewExpression",
                            "src": "808:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                              "typeString": "function (uint256) pure returns (uint256[] memory)"
                            },
                            "typeName": {
                              "baseType": {
                                "id": 48,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "812:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 49,
                              "length": null,
                              "nodeType": "ArrayTypeName",
                              "src": "812:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                "typeString": "uint256[]"
                              }
                            }
                          },
                          "id": 52,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "808:16:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                            "typeString": "uint256[] memory"
                          }
                        },
                        "functionReturnParameters": 38,
                        "id": 53,
                        "nodeType": "Return",
                        "src": "801:23:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "8462151c",
            "id": 95,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tokensOfOwner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 34,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 95,
                  "src": "613:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 32,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "613:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "612:16:0"
            },
            "returnParameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 95,
                  "src": "651:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "651:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 36,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "651:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "650:19:0"
            },
            "scope": 360,
            "src": "590:528:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 172,
              "nodeType": "Block",
              "src": "1180:1164:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 103,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 101,
                          "name": "hasSaleStarted",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20,
                          "src": "1198:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 102,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1216:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1198:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "53616c65206861736e27742073746172746564",
                        "id": 104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1222:21:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e99ebb1883af9c289deeb7aae6d1696029b3eb801ae7c4ff6e70c1d154dd1278",
                          "typeString": "literal_string \"Sale hasn't started\""
                        },
                        "value": "Sale hasn't started"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e99ebb1883af9c289deeb7aae6d1696029b3eb801ae7c4ff6e70c1d154dd1278",
                          "typeString": "literal_string \"Sale hasn't started\""
                        }
                      ],
                      "id": 100,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1190:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 105,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1190:54:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 106,
                  "nodeType": "ExpressionStatement",
                  "src": "1190:54:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 111,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 108,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1170,
                            "src": "1262:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1262:13:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 110,
                          "name": "MAX_CMLOT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "1278:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1262:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "53616c652068617320616c726561647920656e646564",
                        "id": 112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1289:24:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b97b1b2a9c46e4a4cf5f37aa4a2b6d077755ddf5dccd4452c4e059ce2e5520c5",
                          "typeString": "literal_string \"Sale has already ended\""
                        },
                        "value": "Sale has already ended"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b97b1b2a9c46e4a4cf5f37aa4a2b6d077755ddf5dccd4452c4e059ce2e5520c5",
                          "typeString": "literal_string \"Sale has already ended\""
                        }
                      ],
                      "id": 107,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1254:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1254:60:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 114,
                  "nodeType": "ExpressionStatement",
                  "src": "1254:60:0"
                },
                {
                  "assignments": [
                    116
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 116,
                      "mutability": "mutable",
                      "name": "currentSupply",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 172,
                      "src": "1325:18:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 115,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1325:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 119,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 117,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1170,
                      "src": "1346:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1346:13:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1325:34:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 120,
                      "name": "currentSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 116,
                      "src": "1373:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "39393530",
                      "id": 121,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1390:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_9950_by_1",
                        "typeString": "int_const 9950"
                      },
                      "value": "9950"
                    },
                    "src": "1373:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 128,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 126,
                        "name": "currentSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 116,
                        "src": "1494:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "39303230",
                        "id": 127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1511:4:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_9020_by_1",
                          "typeString": "int_const 9020"
                        },
                        "value": "9020"
                      },
                      "src": "1494:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 132,
                          "name": "currentSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 116,
                          "src": "1618:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "37303230",
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1635:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_7020_by_1",
                            "typeString": "int_const 7020"
                          },
                          "value": "7020"
                        },
                        "src": "1618:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 140,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 138,
                            "name": "currentSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 116,
                            "src": "1743:13:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "34303230",
                            "id": 139,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1760:4:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4020_by_1",
                              "typeString": "int_const 4020"
                            },
                            "value": "4020"
                          },
                          "src": "1743:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 146,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 144,
                              "name": "currentSupply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 116,
                              "src": "1868:13:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "32303230",
                              "id": 145,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1885:4:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_2020_by_1",
                                "typeString": "int_const 2020"
                              },
                              "value": "2020"
                            },
                            "src": "1868:21:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "condition": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 152,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 150,
                                "name": "currentSupply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 116,
                                "src": "1993:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "31303230",
                                "id": 151,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2010:4:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1020_by_1",
                                  "typeString": "int_const 1020"
                                },
                                "value": "1020"
                              },
                              "src": "1993:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseBody": {
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 158,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 156,
                                  "name": "currentSupply",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 116,
                                  "src": "2118:13:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "353230",
                                  "id": 157,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2135:3:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_520_by_1",
                                    "typeString": "int_const 520"
                                  },
                                  "value": "520"
                                },
                                "src": "2118:20:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseBody": {
                                "id": 164,
                                "nodeType": "Block",
                                "src": "2237:101:0",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "hexValue": "3130303030303030303030303030303030",
                                      "id": 162,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2258:17:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_10000000000000000_by_1",
                                        "typeString": "int_const 10000000000000000"
                                      },
                                      "value": "10000000000000000"
                                    },
                                    "functionReturnParameters": 99,
                                    "id": 163,
                                    "nodeType": "Return",
                                    "src": "2251:24:0"
                                  }
                                ]
                              },
                              "id": 165,
                              "nodeType": "IfStatement",
                              "src": "2114:224:0",
                              "trueBody": {
                                "id": 161,
                                "nodeType": "Block",
                                "src": "2140:91:0",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "hexValue": "3230303030303030303030303030303030",
                                      "id": 159,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2161:17:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_20000000000000000_by_1",
                                        "typeString": "int_const 20000000000000000"
                                      },
                                      "value": "20000000000000000"
                                    },
                                    "functionReturnParameters": 99,
                                    "id": 160,
                                    "nodeType": "Return",
                                    "src": "2154:24:0"
                                  }
                                ]
                              }
                            },
                            "id": 166,
                            "nodeType": "IfStatement",
                            "src": "1989:349:0",
                            "trueBody": {
                              "id": 155,
                              "nodeType": "Block",
                              "src": "2016:92:0",
                              "statements": [
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "hexValue": "3430303030303030303030303030303030",
                                    "id": 153,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2037:17:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_40000000000000000_by_1",
                                      "typeString": "int_const 40000000000000000"
                                    },
                                    "value": "40000000000000000"
                                  },
                                  "functionReturnParameters": 99,
                                  "id": 154,
                                  "nodeType": "Return",
                                  "src": "2030:24:0"
                                }
                              ]
                            }
                          },
                          "id": 167,
                          "nodeType": "IfStatement",
                          "src": "1864:474:0",
                          "trueBody": {
                            "id": 149,
                            "nodeType": "Block",
                            "src": "1891:92:0",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "hexValue": "3830303030303030303030303030303030",
                                  "id": 147,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1912:17:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_80000000000000000_by_1",
                                    "typeString": "int_const 80000000000000000"
                                  },
                                  "value": "80000000000000000"
                                },
                                "functionReturnParameters": 99,
                                "id": 148,
                                "nodeType": "Return",
                                "src": "1905:24:0"
                              }
                            ]
                          }
                        },
                        "id": 168,
                        "nodeType": "IfStatement",
                        "src": "1739:599:0",
                        "trueBody": {
                          "id": 143,
                          "nodeType": "Block",
                          "src": "1766:92:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "313630303030303030303030303030303030",
                                "id": 141,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1787:18:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_160000000000000000_by_1",
                                  "typeString": "int_const 160000000000000000"
                                },
                                "value": "160000000000000000"
                              },
                              "functionReturnParameters": 99,
                              "id": 142,
                              "nodeType": "Return",
                              "src": "1780:25:0"
                            }
                          ]
                        }
                      },
                      "id": 169,
                      "nodeType": "IfStatement",
                      "src": "1614:724:0",
                      "trueBody": {
                        "id": 137,
                        "nodeType": "Block",
                        "src": "1641:92:0",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "hexValue": "333230303030303030303030303030303030",
                              "id": 135,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1662:18:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_320000000000000000_by_1",
                                "typeString": "int_const 320000000000000000"
                              },
                              "value": "320000000000000000"
                            },
                            "functionReturnParameters": 99,
                            "id": 136,
                            "nodeType": "Return",
                            "src": "1655:25:0"
                          }
                        ]
                      }
                    },
                    "id": 170,
                    "nodeType": "IfStatement",
                    "src": "1490:848:0",
                    "trueBody": {
                      "id": 131,
                      "nodeType": "Block",
                      "src": "1517:91:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "363430303030303030303030303030303030",
                            "id": 129,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1538:18:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_640000000000000000_by_1",
                              "typeString": "int_const 640000000000000000"
                            },
                            "value": "640000000000000000"
                          },
                          "functionReturnParameters": 99,
                          "id": 130,
                          "nodeType": "Return",
                          "src": "1531:25:0"
                        }
                      ]
                    }
                  },
                  "id": 171,
                  "nodeType": "IfStatement",
                  "src": "1369:969:0",
                  "trueBody": {
                    "id": 125,
                    "nodeType": "Block",
                    "src": "1396:88:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "31303030303030303030303030303030303030",
                          "id": 123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1417:19:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                            "typeString": "int_const 1000000000000000000"
                          },
                          "value": "1000000000000000000"
                        },
                        "functionReturnParameters": 99,
                        "id": 124,
                        "nodeType": "Return",
                        "src": "1410:26:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "d348b409",
            "id": 173,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculatePrice",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 96,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1147:2:0"
            },
            "returnParameters": {
              "id": 99,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 98,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 173,
                  "src": "1171:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 97,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1171:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1170:9:0"
            },
            "scope": 360,
            "src": "1124:1220:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 239,
              "nodeType": "Block",
              "src": "2423:958:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 183,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 181,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 175,
                          "src": "2441:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 182,
                          "name": "MAX_CMLOT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "2447:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2441:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "53616c652068617320616c726561647920656e646564",
                        "id": 184,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2458:24:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b97b1b2a9c46e4a4cf5f37aa4a2b6d077755ddf5dccd4452c4e059ce2e5520c5",
                          "typeString": "literal_string \"Sale has already ended\""
                        },
                        "value": "Sale has already ended"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b97b1b2a9c46e4a4cf5f37aa4a2b6d077755ddf5dccd4452c4e059ce2e5520c5",
                          "typeString": "literal_string \"Sale has already ended\""
                        }
                      ],
                      "id": 180,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2433:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 185,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2433:50:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 186,
                  "nodeType": "ExpressionStatement",
                  "src": "2433:50:0"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 189,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 187,
                      "name": "_id",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 175,
                      "src": "2498:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "39393530",
                      "id": 188,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2505:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_9950_by_1",
                        "typeString": "int_const 9950"
                      },
                      "value": "9950"
                    },
                    "src": "2498:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 193,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 175,
                        "src": "2609:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "39303230",
                        "id": 194,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2616:4:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_9020_by_1",
                          "typeString": "int_const 9020"
                        },
                        "value": "9020"
                      },
                      "src": "2609:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 199,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 175,
                          "src": "2723:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "37303230",
                          "id": 200,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2730:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_7020_by_1",
                            "typeString": "int_const 7020"
                          },
                          "value": "7020"
                        },
                        "src": "2723:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 207,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 205,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 175,
                            "src": "2838:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "34303230",
                            "id": 206,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2845:4:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4020_by_1",
                              "typeString": "int_const 4020"
                            },
                            "value": "4020"
                          },
                          "src": "2838:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 213,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 211,
                              "name": "_id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 175,
                              "src": "2953:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "32303230",
                              "id": 212,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2960:4:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_2020_by_1",
                                "typeString": "int_const 2020"
                              },
                              "value": "2020"
                            },
                            "src": "2953:11:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "condition": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 219,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 217,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 175,
                                "src": "3068:3:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "31303230",
                                "id": 218,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3075:4:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1020_by_1",
                                  "typeString": "int_const 1020"
                                },
                                "value": "1020"
                              },
                              "src": "3068:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseBody": {
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 225,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 223,
                                  "name": "_id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 175,
                                  "src": "3183:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">=",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "353230",
                                  "id": 224,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3190:3:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_520_by_1",
                                    "typeString": "int_const 520"
                                  },
                                  "value": "520"
                                },
                                "src": "3183:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseBody": {
                                "id": 231,
                                "nodeType": "Block",
                                "src": "3286:89:0",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "hexValue": "3130303030303030303030303030303030",
                                      "id": 229,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3307:17:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_10000000000000000_by_1",
                                        "typeString": "int_const 10000000000000000"
                                      },
                                      "value": "10000000000000000"
                                    },
                                    "functionReturnParameters": 179,
                                    "id": 230,
                                    "nodeType": "Return",
                                    "src": "3300:24:0"
                                  }
                                ]
                              },
                              "id": 232,
                              "nodeType": "IfStatement",
                              "src": "3179:196:0",
                              "trueBody": {
                                "id": 228,
                                "nodeType": "Block",
                                "src": "3195:85:0",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "hexValue": "3230303030303030303030303030303030",
                                      "id": 226,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3216:17:0",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_20000000000000000_by_1",
                                        "typeString": "int_const 20000000000000000"
                                      },
                                      "value": "20000000000000000"
                                    },
                                    "functionReturnParameters": 179,
                                    "id": 227,
                                    "nodeType": "Return",
                                    "src": "3209:24:0"
                                  }
                                ]
                              }
                            },
                            "id": 233,
                            "nodeType": "IfStatement",
                            "src": "3064:311:0",
                            "trueBody": {
                              "id": 222,
                              "nodeType": "Block",
                              "src": "3081:92:0",
                              "statements": [
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "hexValue": "3430303030303030303030303030303030",
                                    "id": 220,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3102:17:0",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_40000000000000000_by_1",
                                      "typeString": "int_const 40000000000000000"
                                    },
                                    "value": "40000000000000000"
                                  },
                                  "functionReturnParameters": 179,
                                  "id": 221,
                                  "nodeType": "Return",
                                  "src": "3095:24:0"
                                }
                              ]
                            }
                          },
                          "id": 234,
                          "nodeType": "IfStatement",
                          "src": "2949:426:0",
                          "trueBody": {
                            "id": 216,
                            "nodeType": "Block",
                            "src": "2966:92:0",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "hexValue": "3830303030303030303030303030303030",
                                  "id": 214,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2987:17:0",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_80000000000000000_by_1",
                                    "typeString": "int_const 80000000000000000"
                                  },
                                  "value": "80000000000000000"
                                },
                                "functionReturnParameters": 179,
                                "id": 215,
                                "nodeType": "Return",
                                "src": "2980:24:0"
                              }
                            ]
                          }
                        },
                        "id": 235,
                        "nodeType": "IfStatement",
                        "src": "2834:541:0",
                        "trueBody": {
                          "id": 210,
                          "nodeType": "Block",
                          "src": "2851:92:0",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "313630303030303030303030303030303030",
                                "id": 208,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2872:18:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_160000000000000000_by_1",
                                  "typeString": "int_const 160000000000000000"
                                },
                                "value": "160000000000000000"
                              },
                              "functionReturnParameters": 179,
                              "id": 209,
                              "nodeType": "Return",
                              "src": "2865:25:0"
                            }
                          ]
                        }
                      },
                      "id": 236,
                      "nodeType": "IfStatement",
                      "src": "2719:656:0",
                      "trueBody": {
                        "id": 204,
                        "nodeType": "Block",
                        "src": "2736:92:0",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "hexValue": "333230303030303030303030303030303030",
                              "id": 202,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2757:18:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_320000000000000000_by_1",
                                "typeString": "int_const 320000000000000000"
                              },
                              "value": "320000000000000000"
                            },
                            "functionReturnParameters": 179,
                            "id": 203,
                            "nodeType": "Return",
                            "src": "2750:25:0"
                          }
                        ]
                      }
                    },
                    "id": 237,
                    "nodeType": "IfStatement",
                    "src": "2605:770:0",
                    "trueBody": {
                      "id": 198,
                      "nodeType": "Block",
                      "src": "2622:91:0",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "363430303030303030303030303030303030",
                            "id": 196,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2643:18:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_640000000000000000_by_1",
                              "typeString": "int_const 640000000000000000"
                            },
                            "value": "640000000000000000"
                          },
                          "functionReturnParameters": 179,
                          "id": 197,
                          "nodeType": "Return",
                          "src": "2636:25:0"
                        }
                      ]
                    }
                  },
                  "id": 238,
                  "nodeType": "IfStatement",
                  "src": "2494:881:0",
                  "trueBody": {
                    "id": 192,
                    "nodeType": "Block",
                    "src": "2511:88:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "31303030303030303030303030303030303030",
                          "id": 190,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2532:19:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                            "typeString": "int_const 1000000000000000000"
                          },
                          "value": "1000000000000000000"
                        },
                        "functionReturnParameters": 179,
                        "id": 191,
                        "nodeType": "Return",
                        "src": "2525:26:0"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "functionSelector": "6fd9537f",
            "id": 240,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculatePriceForToken",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 175,
                  "mutability": "mutable",
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 240,
                  "src": "2383:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 174,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2383:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2382:10:0"
            },
            "returnParameters": {
              "id": 179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 178,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 240,
                  "src": "2414:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 177,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2414:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2413:9:0"
            },
            "scope": 360,
            "src": "2351:1030:0",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 251,
              "nodeType": "Block",
              "src": "3494:49:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 249,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 247,
                      "name": "METADATA_PROVENANCE_HASH",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "3504:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 248,
                      "name": "_hash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 242,
                      "src": "3531:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3504:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 250,
                  "nodeType": "ExpressionStatement",
                  "src": "3504:32:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "10969523",
            "id": 252,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 245,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 244,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 419,
                  "src": "3484:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3484:9:0"
              }
            ],
            "name": "setProvenanceHash",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 243,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 242,
                  "mutability": "mutable",
                  "name": "_hash",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 252,
                  "src": "3456:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 241,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3456:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3455:21:0"
            },
            "returnParameters": {
              "id": 246,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3494:0:0"
            },
            "scope": 360,
            "src": "3429:114:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 263,
              "nodeType": "Block",
              "src": "3643:68:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 260,
                        "name": "baseURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 254,
                        "src": "3696:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 259,
                      "name": "setBaseURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 264,
                      "src": "3685:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 261,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3685:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 262,
                  "nodeType": "ExpressionStatement",
                  "src": "3685:19:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "55f804b3",
            "id": 264,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 257,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 256,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 419,
                  "src": "3633:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3633:9:0"
              }
            ],
            "name": "setBaseURI",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 254,
                  "mutability": "mutable",
                  "name": "baseURI",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 264,
                  "src": "3603:21:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 253,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3603:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3602:23:0"
            },
            "returnParameters": {
              "id": 258,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3643:0:0"
            },
            "scope": 360,
            "src": "3583:128:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 273,
              "nodeType": "Block",
              "src": "3787:38:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 269,
                      "name": "hasSaleStarted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20,
                      "src": "3797:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 270,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3814:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "3797:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 272,
                  "nodeType": "ExpressionStatement",
                  "src": "3797:21:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b66a0e5d",
            "id": 274,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 267,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 266,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 419,
                  "src": "3777:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3777:9:0"
              }
            ],
            "name": "startSale",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 265,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3767:2:0"
            },
            "returnParameters": {
              "id": 268,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3787:0:0"
            },
            "scope": 360,
            "src": "3749:76:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 283,
              "nodeType": "Block",
              "src": "3901:39:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 279,
                      "name": "hasSaleStarted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20,
                      "src": "3911:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 280,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3928:5:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "3911:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 282,
                  "nodeType": "ExpressionStatement",
                  "src": "3911:22:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "55367ba9",
            "id": 284,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 277,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 276,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 419,
                  "src": "3891:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3891:9:0"
              }
            ],
            "name": "pauseSale",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 275,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3881:2:0"
            },
            "returnParameters": {
              "id": 278,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3901:0:0"
            },
            "scope": 360,
            "src": "3863:77:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 304,
              "nodeType": "Block",
              "src": "3995:73:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 298,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "4046:4:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_CMNFT_$360",
                                    "typeString": "contract CMNFT"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_CMNFT_$360",
                                    "typeString": "contract CMNFT"
                                  }
                                ],
                                "id": 297,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4038:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 296,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4038:7:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": null,
                                    "typeString": null
                                  }
                                }
                              },
                              "id": 299,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4038:13:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 300,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "balance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4038:21:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 292,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "4021:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 293,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4021:10:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "id": 291,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4013:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_payable_$",
                                "typeString": "type(address payable)"
                              },
                              "typeName": {
                                "id": 290,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4013:8:0",
                                "stateMutability": "payable",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 294,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4013:19:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "id": 295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "send",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4013:24:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) returns (bool)"
                          }
                        },
                        "id": 301,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4013:47:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 289,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4005:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4005:56:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 303,
                  "nodeType": "ExpressionStatement",
                  "src": "4005:56:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "853828b6",
            "id": 305,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 287,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 286,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 419,
                  "src": "3985:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3985:9:0"
              }
            ],
            "name": "withdrawAll",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 285,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3967:2:0"
            },
            "returnParameters": {
              "id": 288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3995:0:0"
            },
            "scope": 360,
            "src": "3947:121:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 358,
              "nodeType": "Block",
              "src": "4134:411:0",
              "statements": [
                {
                  "assignments": [
                    313
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 313,
                      "mutability": "mutable",
                      "name": "currentSupply",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 358,
                      "src": "4144:18:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 312,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4144:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 316,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 314,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1170,
                      "src": "4165:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4165:13:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4144:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 324,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 321,
                              "name": "numCMLot",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 307,
                              "src": "4214:8:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 318,
                                "name": "totalSupply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1170,
                                "src": "4196:11:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 319,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4196:13:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 320,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 721,
                            "src": "4196:17:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 322,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4196:27:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3230",
                          "id": 323,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4227:2:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_20_by_1",
                            "typeString": "int_const 20"
                          },
                          "value": "20"
                        },
                        "src": "4196:33:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "457863656564656420676976656177617920737570706c79",
                        "id": 325,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4231:26:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5dda4b13c71f7c5b51b38af1ec8f335a9ddbd87240db17c4797d2d27b816cf31",
                          "typeString": "literal_string \"Exceeded giveaway supply\""
                        },
                        "value": "Exceeded giveaway supply"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5dda4b13c71f7c5b51b38af1ec8f335a9ddbd87240db17c4797d2d27b816cf31",
                          "typeString": "literal_string \"Exceeded giveaway supply\""
                        }
                      ],
                      "id": 317,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4188:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4188:70:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 327,
                  "nodeType": "ExpressionStatement",
                  "src": "4188:70:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 331,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 329,
                          "name": "hasSaleStarted",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20,
                          "src": "4276:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 330,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4294:5:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "4276:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "53616c652068617320616c72656164792073746172746564",
                        "id": 332,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4301:26:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_80a6ed2a2d761f9e74dba4f5dfd4e0aa8e6a5cde6d7f29c656cea668e6dcf6a9",
                          "typeString": "literal_string \"Sale has already started\""
                        },
                        "value": "Sale has already started"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_80a6ed2a2d761f9e74dba4f5dfd4e0aa8e6a5cde6d7f29c656cea668e6dcf6a9",
                          "typeString": "literal_string \"Sale has already started\""
                        }
                      ],
                      "id": 328,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4268:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4268:60:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 334,
                  "nodeType": "ExpressionStatement",
                  "src": "4268:60:0"
                },
                {
                  "assignments": [
                    336
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 336,
                      "mutability": "mutable",
                      "name": "index",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 358,
                      "src": "4338:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 335,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4338:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 337,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4338:13:0"
                },
                {
                  "body": {
                    "id": 356,
                    "nodeType": "Block",
                    "src": "4473:66:0",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 349,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 405,
                                "src": "4497:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 350,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4497:7:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 353,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 351,
                                "name": "currentSupply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 313,
                                "src": "4506:13:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 352,
                                "name": "index",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 336,
                                "src": "4522:5:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "4506:21:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 348,
                            "name": "_safeMint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              1482,
                              1511
                            ],
                            "referencedDeclaration": 1482,
                            "src": "4487:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 354,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4487:41:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 355,
                        "nodeType": "ExpressionStatement",
                        "src": "4487:41:0"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 344,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 342,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 336,
                      "src": "4446:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 343,
                      "name": "numCMLot",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 307,
                      "src": "4454:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4446:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 357,
                  "initializationExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 338,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 336,
                        "src": "4435:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4443:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4435:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 341,
                    "nodeType": "ExpressionStatement",
                    "src": "4435:9:0"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 346,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4464:7:0",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 345,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 336,
                        "src": "4464:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 347,
                    "nodeType": "ExpressionStatement",
                    "src": "4464:7:0"
                  },
                  "nodeType": "ForStatement",
                  "src": "4430:109:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "a40f1aa5",
            "id": 359,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 310,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 309,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 419,
                  "src": "4124:9:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4124:9:0"
              }
            ],
            "name": "reserveGiveaway",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 307,
                  "mutability": "mutable",
                  "name": "numCMLot",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 359,
                  "src": "4099:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 306,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4099:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4098:18:0"
            },
            "returnParameters": {
              "id": 311,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4134:0:0"
            },
            "scope": 360,
            "src": "4074:471:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 361,
        "src": "222:4329:0"
      }
    ],
    "src": "33:4518:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/nlpacademy/Library/Mobile Documents/com~apple~CloudDocs/MAMP-PRO/solidity-projects/cmnft-concept/src/contracts/CMNFT.sol",
      "exportedSymbols": {
        "CMNFT": [
          360
        ]
      },
      "license": "MIT"
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.7",
            ".0"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "attributes": {
          "SourceUnit": 1839,
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "scope": 361,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2,
        "name": "ImportDirective",
        "src": "58:57:0"
      },
      {
        "attributes": {
          "SourceUnit": 471,
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "scope": 361,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3,
        "name": "ImportDirective",
        "src": "116:52:0"
      },
      {
        "attributes": {
          "SourceUnit": 895,
          "absolutePath": "@openzeppelin/contracts/math/SafeMath.sol",
          "file": "@openzeppelin/contracts/math/SafeMath.sol",
          "scope": 361,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 4,
        "name": "ImportDirective",
        "src": "169:51:0"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            470,
            527,
            539,
            1838,
            1954,
            1985,
            2012,
            2349
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            360,
            470,
            1838,
            1985,
            2012,
            1954,
            527,
            539,
            2349
          ],
          "name": "CMNFT",
          "scope": 361
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC721",
                  "referencedDeclaration": 1838,
                  "type": "contract ERC721"
                },
                "id": 5,
                "name": "UserDefinedTypeName",
                "src": "240:6:0"
              }
            ],
            "id": 6,
            "name": "InheritanceSpecifier",
            "src": "240:6:0"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Ownable",
                  "referencedDeclaration": 470,
                  "type": "contract Ownable"
                },
                "id": 7,
                "name": "UserDefinedTypeName",
                "src": "248:7:0"
              }
            ],
            "id": 8,
            "name": "InheritanceSpecifier",
            "src": "248:7:0"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 894,
                  "type": "library SafeMath"
                },
                "id": 9,
                "name": "UserDefinedTypeName",
                "src": "270:8:0"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 10,
                "name": "ElementaryTypeName",
                "src": "283:7:0"
              }
            ],
            "id": 11,
            "name": "UsingForDirective",
            "src": "264:27:0"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 894,
                  "type": "library SafeMath"
                },
                "id": 12,
                "name": "UserDefinedTypeName",
                "src": "344:8:0"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 13,
                "name": "ElementaryTypeName",
                "src": "357:4:0"
              }
            ],
            "id": 14,
            "name": "UsingForDirective",
            "src": "338:24:0"
          },
          {
            "attributes": {
              "constant": true,
              "functionSelector": "ca4e5d6d",
              "mutability": "constant",
              "name": "MAX_CMLOT",
              "overrides": null,
              "scope": 360,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 15,
                "name": "ElementaryTypeName",
                "src": "368:4:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "3130303030",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 10000",
                  "value": "10000"
                },
                "id": 16,
                "name": "Literal",
                "src": "401:5:0"
              }
            ],
            "id": 17,
            "name": "VariableDeclaration",
            "src": "368:38:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "1c8b232d",
              "mutability": "mutable",
              "name": "hasSaleStarted",
              "overrides": null,
              "scope": 360,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bool",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bool",
                  "type": "bool"
                },
                "id": 18,
                "name": "ElementaryTypeName",
                "src": "412:4:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "66616c7365",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "bool",
                  "type": "bool",
                  "value": "false"
                },
                "id": 19,
                "name": "Literal",
                "src": "441:5:0"
              }
            ],
            "id": 20,
            "name": "VariableDeclaration",
            "src": "412:34:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "f0c9dc60",
              "mutability": "mutable",
              "name": "METADATA_PROVENANCE_HASH",
              "overrides": null,
              "scope": 360,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 21,
                "name": "ElementaryTypeName",
                "src": "480:6:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"\"",
                  "value": ""
                },
                "id": 22,
                "name": "Literal",
                "src": "521:2:0"
              }
            ],
            "id": 23,
            "name": "VariableDeclaration",
            "src": "480:43:0"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "name": "",
              "overrides": null,
              "scope": 360,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 24,
                "name": "ParameterList",
                "src": "542:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 29,
                "name": "ParameterList",
                "src": "582:0:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1838,
                      "type": "type(contract ERC721)",
                      "value": "ERC721"
                    },
                    "id": 25,
                    "name": "Identifier",
                    "src": "545:6:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "43727970746f6d6f7269616c204e4654",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"Cryptomorial NFT\"",
                      "value": "Cryptomorial NFT"
                    },
                    "id": 26,
                    "name": "Literal",
                    "src": "553:18:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "434d4e4654",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"CMNFT\"",
                      "value": "CMNFT"
                    },
                    "id": 27,
                    "name": "Literal",
                    "src": "573:7:0"
                  }
                ],
                "id": 28,
                "name": "ModifierInvocation",
                "src": "545:36:0"
              },
              {
                "attributes": {
                  "statements": [
                    null
                  ]
                },
                "children": [],
                "id": 30,
                "name": "Block",
                "src": "582:2:0"
              }
            ],
            "id": 31,
            "name": "FunctionDefinition",
            "src": "531:53:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "8462151c",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "tokensOfOwner",
              "overrides": null,
              "scope": 360,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_owner",
                      "overrides": null,
                      "scope": 95,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 32,
                        "name": "ElementaryTypeName",
                        "src": "613:7:0"
                      }
                    ],
                    "id": 33,
                    "name": "VariableDeclaration",
                    "src": "613:14:0"
                  }
                ],
                "id": 34,
                "name": "ParameterList",
                "src": "612:16:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 95,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "uint256[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 35,
                            "name": "ElementaryTypeName",
                            "src": "651:7:0"
                          }
                        ],
                        "id": 36,
                        "name": "ArrayTypeName",
                        "src": "651:9:0"
                      }
                    ],
                    "id": 37,
                    "name": "VariableDeclaration",
                    "src": "651:16:0"
                  }
                ],
                "id": 38,
                "name": "ParameterList",
                "src": "650:19:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        40
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "tokenCount",
                          "overrides": null,
                          "scope": 94,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 39,
                            "name": "ElementaryTypeName",
                            "src": "680:7:0"
                          }
                        ],
                        "id": 40,
                        "name": "VariableDeclaration",
                        "src": "680:18:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1026,
                              "type": "function (address) view returns (uint256)",
                              "value": "balanceOf"
                            },
                            "id": 41,
                            "name": "Identifier",
                            "src": "701:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 33,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 42,
                            "name": "Identifier",
                            "src": "711:6:0"
                          }
                        ],
                        "id": 43,
                        "name": "FunctionCall",
                        "src": "701:17:0"
                      }
                    ],
                    "id": 44,
                    "name": "VariableDeclarationStatement",
                    "src": "680:38:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 40,
                              "type": "uint256",
                              "value": "tokenCount"
                            },
                            "id": 45,
                            "name": "Identifier",
                            "src": "733:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 46,
                            "name": "Literal",
                            "src": "747:1:0"
                          }
                        ],
                        "id": 47,
                        "name": "BinaryOperation",
                        "src": "733:15:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 38
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "uint256[] memory",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "function (uint256) pure returns (uint256[] memory)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "length": null,
                                          "type": "uint256[]"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "name": "uint256",
                                              "type": "uint256"
                                            },
                                            "id": 48,
                                            "name": "ElementaryTypeName",
                                            "src": "812:7:0"
                                          }
                                        ],
                                        "id": 49,
                                        "name": "ArrayTypeName",
                                        "src": "812:9:0"
                                      }
                                    ],
                                    "id": 50,
                                    "name": "NewExpression",
                                    "src": "808:13:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 51,
                                    "name": "Literal",
                                    "src": "822:1:0"
                                  }
                                ],
                                "id": 52,
                                "name": "FunctionCall",
                                "src": "808:16:0"
                              }
                            ],
                            "id": 53,
                            "name": "Return",
                            "src": "801:23:0"
                          }
                        ],
                        "id": 54,
                        "name": "Block",
                        "src": "750:85:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                59
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "mutability": "mutable",
                                  "name": "result",
                                  "overrides": null,
                                  "scope": 92,
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "type": "uint256[]",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "length": null,
                                      "type": "uint256[]"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "uint256",
                                          "type": "uint256"
                                        },
                                        "id": 57,
                                        "name": "ElementaryTypeName",
                                        "src": "855:7:0"
                                      }
                                    ],
                                    "id": 58,
                                    "name": "ArrayTypeName",
                                    "src": "855:9:0"
                                  }
                                ],
                                "id": 59,
                                "name": "VariableDeclaration",
                                "src": "855:23:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "uint256[] memory",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "function (uint256) pure returns (uint256[] memory)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "length": null,
                                          "type": "uint256[]"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "name": "uint256",
                                              "type": "uint256"
                                            },
                                            "id": 60,
                                            "name": "ElementaryTypeName",
                                            "src": "885:7:0"
                                          }
                                        ],
                                        "id": 61,
                                        "name": "ArrayTypeName",
                                        "src": "885:9:0"
                                      }
                                    ],
                                    "id": 62,
                                    "name": "NewExpression",
                                    "src": "881:13:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 40,
                                      "type": "uint256",
                                      "value": "tokenCount"
                                    },
                                    "id": 63,
                                    "name": "Identifier",
                                    "src": "895:10:0"
                                  }
                                ],
                                "id": 64,
                                "name": "FunctionCall",
                                "src": "881:25:0"
                              }
                            ],
                            "id": 65,
                            "name": "VariableDeclarationStatement",
                            "src": "855:51:0"
                          },
                          {
                            "attributes": {
                              "assignments": [
                                67
                              ],
                              "initialValue": null
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "mutability": "mutable",
                                  "name": "index",
                                  "overrides": null,
                                  "scope": 92,
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "type": "uint256",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "uint256",
                                      "type": "uint256"
                                    },
                                    "id": 66,
                                    "name": "ElementaryTypeName",
                                    "src": "920:7:0"
                                  }
                                ],
                                "id": 67,
                                "name": "VariableDeclaration",
                                "src": "920:13:0"
                              }
                            ],
                            "id": 68,
                            "name": "VariableDeclarationStatement",
                            "src": "920:13:0"
                          },
                          {
                            "children": [
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "=",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 67,
                                          "type": "uint256",
                                          "value": "index"
                                        },
                                        "id": 69,
                                        "name": "Identifier",
                                        "src": "952:5:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "30",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 0",
                                          "value": "0"
                                        },
                                        "id": 70,
                                        "name": "Literal",
                                        "src": "960:1:0"
                                      }
                                    ],
                                    "id": 71,
                                    "name": "Assignment",
                                    "src": "952:9:0"
                                  }
                                ],
                                "id": 72,
                                "name": "ExpressionStatement",
                                "src": "952:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "<",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 67,
                                      "type": "uint256",
                                      "value": "index"
                                    },
                                    "id": 73,
                                    "name": "Identifier",
                                    "src": "963:5:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 40,
                                      "type": "uint256",
                                      "value": "tokenCount"
                                    },
                                    "id": 74,
                                    "name": "Identifier",
                                    "src": "971:10:0"
                                  }
                                ],
                                "id": 75,
                                "name": "BinaryOperation",
                                "src": "963:18:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "++",
                                      "prefix": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 67,
                                          "type": "uint256",
                                          "value": "index"
                                        },
                                        "id": 76,
                                        "name": "Identifier",
                                        "src": "983:5:0"
                                      }
                                    ],
                                    "id": 77,
                                    "name": "UnaryOperation",
                                    "src": "983:7:0"
                                  }
                                ],
                                "id": 78,
                                "name": "ExpressionStatement",
                                "src": "983:7:0"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "=",
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": true,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 59,
                                                  "type": "uint256[] memory",
                                                  "value": "result"
                                                },
                                                "id": 79,
                                                "name": "Identifier",
                                                "src": "1010:6:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 67,
                                                  "type": "uint256",
                                                  "value": "index"
                                                },
                                                "id": 80,
                                                "name": "Identifier",
                                                "src": "1017:5:0"
                                              }
                                            ],
                                            "id": 81,
                                            "name": "IndexAccess",
                                            "src": "1010:13:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "tryCall": false,
                                              "type": "uint256",
                                              "type_conversion": false
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_address",
                                                      "typeString": "address"
                                                    },
                                                    {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  ],
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1158,
                                                  "type": "function (address,uint256) view returns (uint256)",
                                                  "value": "tokenOfOwnerByIndex"
                                                },
                                                "id": 82,
                                                "name": "Identifier",
                                                "src": "1026:19:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 33,
                                                  "type": "address",
                                                  "value": "_owner"
                                                },
                                                "id": 83,
                                                "name": "Identifier",
                                                "src": "1046:6:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 67,
                                                  "type": "uint256",
                                                  "value": "index"
                                                },
                                                "id": 84,
                                                "name": "Identifier",
                                                "src": "1054:5:0"
                                              }
                                            ],
                                            "id": 85,
                                            "name": "FunctionCall",
                                            "src": "1026:34:0"
                                          }
                                        ],
                                        "id": 86,
                                        "name": "Assignment",
                                        "src": "1010:50:0"
                                      }
                                    ],
                                    "id": 87,
                                    "name": "ExpressionStatement",
                                    "src": "1010:50:0"
                                  }
                                ],
                                "id": 88,
                                "name": "Block",
                                "src": "992:83:0"
                              }
                            ],
                            "id": 89,
                            "name": "ForStatement",
                            "src": "947:128:0"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 38
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 59,
                                  "type": "uint256[] memory",
                                  "value": "result"
                                },
                                "id": 90,
                                "name": "Identifier",
                                "src": "1095:6:0"
                              }
                            ],
                            "id": 91,
                            "name": "Return",
                            "src": "1088:13:0"
                          }
                        ],
                        "id": 92,
                        "name": "Block",
                        "src": "841:271:0"
                      }
                    ],
                    "id": 93,
                    "name": "IfStatement",
                    "src": "729:383:0"
                  }
                ],
                "id": 94,
                "name": "Block",
                "src": "670:448:0"
              }
            ],
            "id": 95,
            "name": "FunctionDefinition",
            "src": "590:528:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "d348b409",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "calculatePrice",
              "overrides": null,
              "scope": 360,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 96,
                "name": "ParameterList",
                "src": "1147:2:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 173,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 97,
                        "name": "ElementaryTypeName",
                        "src": "1171:7:0"
                      }
                    ],
                    "id": 98,
                    "name": "VariableDeclaration",
                    "src": "1171:7:0"
                  }
                ],
                "id": 99,
                "name": "ParameterList",
                "src": "1170:9:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_e99ebb1883af9c289deeb7aae6d1696029b3eb801ae7c4ff6e70c1d154dd1278",
                                  "typeString": "literal_string \"Sale hasn't started\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 100,
                            "name": "Identifier",
                            "src": "1190:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 20,
                                  "type": "bool",
                                  "value": "hasSaleStarted"
                                },
                                "id": 101,
                                "name": "Identifier",
                                "src": "1198:14:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 102,
                                "name": "Literal",
                                "src": "1216:4:0"
                              }
                            ],
                            "id": 103,
                            "name": "BinaryOperation",
                            "src": "1198:22:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "53616c65206861736e27742073746172746564",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Sale hasn't started\"",
                              "value": "Sale hasn't started"
                            },
                            "id": 104,
                            "name": "Literal",
                            "src": "1222:21:0"
                          }
                        ],
                        "id": 105,
                        "name": "FunctionCall",
                        "src": "1190:54:0"
                      }
                    ],
                    "id": 106,
                    "name": "ExpressionStatement",
                    "src": "1190:54:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_b97b1b2a9c46e4a4cf5f37aa4a2b6d077755ddf5dccd4452c4e059ce2e5520c5",
                                  "typeString": "literal_string \"Sale has already ended\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 107,
                            "name": "Identifier",
                            "src": "1254:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        null
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1170,
                                      "type": "function () view returns (uint256)",
                                      "value": "totalSupply"
                                    },
                                    "id": 108,
                                    "name": "Identifier",
                                    "src": "1262:11:0"
                                  }
                                ],
                                "id": 109,
                                "name": "FunctionCall",
                                "src": "1262:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 17,
                                  "type": "uint256",
                                  "value": "MAX_CMLOT"
                                },
                                "id": 110,
                                "name": "Identifier",
                                "src": "1278:9:0"
                              }
                            ],
                            "id": 111,
                            "name": "BinaryOperation",
                            "src": "1262:25:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "53616c652068617320616c726561647920656e646564",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Sale has already ended\"",
                              "value": "Sale has already ended"
                            },
                            "id": 112,
                            "name": "Literal",
                            "src": "1289:24:0"
                          }
                        ],
                        "id": 113,
                        "name": "FunctionCall",
                        "src": "1254:60:0"
                      }
                    ],
                    "id": 114,
                    "name": "ExpressionStatement",
                    "src": "1254:60:0"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        116
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "currentSupply",
                          "overrides": null,
                          "scope": 172,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 115,
                            "name": "ElementaryTypeName",
                            "src": "1325:4:0"
                          }
                        ],
                        "id": 116,
                        "name": "VariableDeclaration",
                        "src": "1325:18:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1170,
                              "type": "function () view returns (uint256)",
                              "value": "totalSupply"
                            },
                            "id": 117,
                            "name": "Identifier",
                            "src": "1346:11:0"
                          }
                        ],
                        "id": 118,
                        "name": "FunctionCall",
                        "src": "1346:13:0"
                      }
                    ],
                    "id": 119,
                    "name": "VariableDeclarationStatement",
                    "src": "1325:34:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": ">=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 116,
                              "type": "uint256",
                              "value": "currentSupply"
                            },
                            "id": 120,
                            "name": "Identifier",
                            "src": "1373:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "39393530",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 9950",
                              "value": "9950"
                            },
                            "id": 121,
                            "name": "Literal",
                            "src": "1390:4:0"
                          }
                        ],
                        "id": 122,
                        "name": "BinaryOperation",
                        "src": "1373:21:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 99
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31303030303030303030303030303030303030",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1000000000000000000",
                                  "value": "1000000000000000000"
                                },
                                "id": 123,
                                "name": "Literal",
                                "src": "1417:19:0"
                              }
                            ],
                            "id": 124,
                            "name": "Return",
                            "src": "1410:26:0"
                          }
                        ],
                        "id": 125,
                        "name": "Block",
                        "src": "1396:88:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 116,
                                  "type": "uint256",
                                  "value": "currentSupply"
                                },
                                "id": 126,
                                "name": "Identifier",
                                "src": "1494:13:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "39303230",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 9020",
                                  "value": "9020"
                                },
                                "id": 127,
                                "name": "Literal",
                                "src": "1511:4:0"
                              }
                            ],
                            "id": 128,
                            "name": "BinaryOperation",
                            "src": "1494:21:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 99
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "363430303030303030303030303030303030",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 640000000000000000",
                                      "value": "640000000000000000"
                                    },
                                    "id": 129,
                                    "name": "Literal",
                                    "src": "1538:18:0"
                                  }
                                ],
                                "id": 130,
                                "name": "Return",
                                "src": "1531:25:0"
                              }
                            ],
                            "id": 131,
                            "name": "Block",
                            "src": "1517:91:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": ">=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 116,
                                      "type": "uint256",
                                      "value": "currentSupply"
                                    },
                                    "id": 132,
                                    "name": "Identifier",
                                    "src": "1618:13:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "37303230",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 7020",
                                      "value": "7020"
                                    },
                                    "id": 133,
                                    "name": "Literal",
                                    "src": "1635:4:0"
                                  }
                                ],
                                "id": 134,
                                "name": "BinaryOperation",
                                "src": "1618:21:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 99
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "333230303030303030303030303030303030",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 320000000000000000",
                                          "value": "320000000000000000"
                                        },
                                        "id": 135,
                                        "name": "Literal",
                                        "src": "1662:18:0"
                                      }
                                    ],
                                    "id": 136,
                                    "name": "Return",
                                    "src": "1655:25:0"
                                  }
                                ],
                                "id": 137,
                                "name": "Block",
                                "src": "1641:92:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": ">=",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 116,
                                          "type": "uint256",
                                          "value": "currentSupply"
                                        },
                                        "id": 138,
                                        "name": "Identifier",
                                        "src": "1743:13:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "34303230",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 4020",
                                          "value": "4020"
                                        },
                                        "id": 139,
                                        "name": "Literal",
                                        "src": "1760:4:0"
                                      }
                                    ],
                                    "id": 140,
                                    "name": "BinaryOperation",
                                    "src": "1743:21:0"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "functionReturnParameters": 99
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "313630303030303030303030303030303030",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 160000000000000000",
                                              "value": "160000000000000000"
                                            },
                                            "id": 141,
                                            "name": "Literal",
                                            "src": "1787:18:0"
                                          }
                                        ],
                                        "id": 142,
                                        "name": "Return",
                                        "src": "1780:25:0"
                                      }
                                    ],
                                    "id": 143,
                                    "name": "Block",
                                    "src": "1766:92:0"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": ">=",
                                          "type": "bool"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 116,
                                              "type": "uint256",
                                              "value": "currentSupply"
                                            },
                                            "id": 144,
                                            "name": "Identifier",
                                            "src": "1868:13:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "32303230",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 2020",
                                              "value": "2020"
                                            },
                                            "id": 145,
                                            "name": "Literal",
                                            "src": "1885:4:0"
                                          }
                                        ],
                                        "id": 146,
                                        "name": "BinaryOperation",
                                        "src": "1868:21:0"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "functionReturnParameters": 99
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "hexvalue": "3830303030303030303030303030303030",
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "subdenomination": null,
                                                  "token": "number",
                                                  "type": "int_const 80000000000000000",
                                                  "value": "80000000000000000"
                                                },
                                                "id": 147,
                                                "name": "Literal",
                                                "src": "1912:17:0"
                                              }
                                            ],
                                            "id": 148,
                                            "name": "Return",
                                            "src": "1905:24:0"
                                          }
                                        ],
                                        "id": 149,
                                        "name": "Block",
                                        "src": "1891:92:0"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "operator": ">=",
                                              "type": "bool"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 116,
                                                  "type": "uint256",
                                                  "value": "currentSupply"
                                                },
                                                "id": 150,
                                                "name": "Identifier",
                                                "src": "1993:13:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "hexvalue": "31303230",
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "subdenomination": null,
                                                  "token": "number",
                                                  "type": "int_const 1020",
                                                  "value": "1020"
                                                },
                                                "id": 151,
                                                "name": "Literal",
                                                "src": "2010:4:0"
                                              }
                                            ],
                                            "id": 152,
                                            "name": "BinaryOperation",
                                            "src": "1993:21:0"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "functionReturnParameters": 99
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "hexvalue": "3430303030303030303030303030303030",
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "subdenomination": null,
                                                      "token": "number",
                                                      "type": "int_const 40000000000000000",
                                                      "value": "40000000000000000"
                                                    },
                                                    "id": 153,
                                                    "name": "Literal",
                                                    "src": "2037:17:0"
                                                  }
                                                ],
                                                "id": 154,
                                                "name": "Return",
                                                "src": "2030:24:0"
                                              }
                                            ],
                                            "id": 155,
                                            "name": "Block",
                                            "src": "2016:92:0"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  },
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "operator": ">=",
                                                  "type": "bool"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 116,
                                                      "type": "uint256",
                                                      "value": "currentSupply"
                                                    },
                                                    "id": 156,
                                                    "name": "Identifier",
                                                    "src": "2118:13:0"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "hexvalue": "353230",
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "subdenomination": null,
                                                      "token": "number",
                                                      "type": "int_const 520",
                                                      "value": "520"
                                                    },
                                                    "id": 157,
                                                    "name": "Literal",
                                                    "src": "2135:3:0"
                                                  }
                                                ],
                                                "id": 158,
                                                "name": "BinaryOperation",
                                                "src": "2118:20:0"
                                              },
                                              {
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "functionReturnParameters": 99
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "hexvalue": "3230303030303030303030303030303030",
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": true,
                                                          "lValueRequested": false,
                                                          "subdenomination": null,
                                                          "token": "number",
                                                          "type": "int_const 20000000000000000",
                                                          "value": "20000000000000000"
                                                        },
                                                        "id": 159,
                                                        "name": "Literal",
                                                        "src": "2161:17:0"
                                                      }
                                                    ],
                                                    "id": 160,
                                                    "name": "Return",
                                                    "src": "2154:24:0"
                                                  }
                                                ],
                                                "id": 161,
                                                "name": "Block",
                                                "src": "2140:91:0"
                                              },
                                              {
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "functionReturnParameters": 99
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "hexvalue": "3130303030303030303030303030303030",
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": true,
                                                          "lValueRequested": false,
                                                          "subdenomination": null,
                                                          "token": "number",
                                                          "type": "int_const 10000000000000000",
                                                          "value": "10000000000000000"
                                                        },
                                                        "id": 162,
                                                        "name": "Literal",
                                                        "src": "2258:17:0"
                                                      }
                                                    ],
                                                    "id": 163,
                                                    "name": "Return",
                                                    "src": "2251:24:0"
                                                  }
                                                ],
                                                "id": 164,
                                                "name": "Block",
                                                "src": "2237:101:0"
                                              }
                                            ],
                                            "id": 165,
                                            "name": "IfStatement",
                                            "src": "2114:224:0"
                                          }
                                        ],
                                        "id": 166,
                                        "name": "IfStatement",
                                        "src": "1989:349:0"
                                      }
                                    ],
                                    "id": 167,
                                    "name": "IfStatement",
                                    "src": "1864:474:0"
                                  }
                                ],
                                "id": 168,
                                "name": "IfStatement",
                                "src": "1739:599:0"
                              }
                            ],
                            "id": 169,
                            "name": "IfStatement",
                            "src": "1614:724:0"
                          }
                        ],
                        "id": 170,
                        "name": "IfStatement",
                        "src": "1490:848:0"
                      }
                    ],
                    "id": 171,
                    "name": "IfStatement",
                    "src": "1369:969:0"
                  }
                ],
                "id": 172,
                "name": "Block",
                "src": "1180:1164:0"
              }
            ],
            "id": 173,
            "name": "FunctionDefinition",
            "src": "1124:1220:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "6fd9537f",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "calculatePriceForToken",
              "overrides": null,
              "scope": 360,
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_id",
                      "overrides": null,
                      "scope": 240,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 174,
                        "name": "ElementaryTypeName",
                        "src": "2383:4:0"
                      }
                    ],
                    "id": 175,
                    "name": "VariableDeclaration",
                    "src": "2383:8:0"
                  }
                ],
                "id": 176,
                "name": "ParameterList",
                "src": "2382:10:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "",
                      "overrides": null,
                      "scope": 240,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 177,
                        "name": "ElementaryTypeName",
                        "src": "2414:7:0"
                      }
                    ],
                    "id": 178,
                    "name": "VariableDeclaration",
                    "src": "2414:7:0"
                  }
                ],
                "id": 179,
                "name": "ParameterList",
                "src": "2413:9:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_b97b1b2a9c46e4a4cf5f37aa4a2b6d077755ddf5dccd4452c4e059ce2e5520c5",
                                  "typeString": "literal_string \"Sale has already ended\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 180,
                            "name": "Identifier",
                            "src": "2433:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 175,
                                  "type": "uint256",
                                  "value": "_id"
                                },
                                "id": 181,
                                "name": "Identifier",
                                "src": "2441:3:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 17,
                                  "type": "uint256",
                                  "value": "MAX_CMLOT"
                                },
                                "id": 182,
                                "name": "Identifier",
                                "src": "2447:9:0"
                              }
                            ],
                            "id": 183,
                            "name": "BinaryOperation",
                            "src": "2441:15:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "53616c652068617320616c726561647920656e646564",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Sale has already ended\"",
                              "value": "Sale has already ended"
                            },
                            "id": 184,
                            "name": "Literal",
                            "src": "2458:24:0"
                          }
                        ],
                        "id": 185,
                        "name": "FunctionCall",
                        "src": "2433:50:0"
                      }
                    ],
                    "id": 186,
                    "name": "ExpressionStatement",
                    "src": "2433:50:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": ">=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 175,
                              "type": "uint256",
                              "value": "_id"
                            },
                            "id": 187,
                            "name": "Identifier",
                            "src": "2498:3:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "39393530",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 9950",
                              "value": "9950"
                            },
                            "id": 188,
                            "name": "Literal",
                            "src": "2505:4:0"
                          }
                        ],
                        "id": 189,
                        "name": "BinaryOperation",
                        "src": "2498:11:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 179
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31303030303030303030303030303030303030",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1000000000000000000",
                                  "value": "1000000000000000000"
                                },
                                "id": 190,
                                "name": "Literal",
                                "src": "2532:19:0"
                              }
                            ],
                            "id": 191,
                            "name": "Return",
                            "src": "2525:26:0"
                          }
                        ],
                        "id": 192,
                        "name": "Block",
                        "src": "2511:88:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 175,
                                  "type": "uint256",
                                  "value": "_id"
                                },
                                "id": 193,
                                "name": "Identifier",
                                "src": "2609:3:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "39303230",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 9020",
                                  "value": "9020"
                                },
                                "id": 194,
                                "name": "Literal",
                                "src": "2616:4:0"
                              }
                            ],
                            "id": 195,
                            "name": "BinaryOperation",
                            "src": "2609:11:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 179
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "363430303030303030303030303030303030",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 640000000000000000",
                                      "value": "640000000000000000"
                                    },
                                    "id": 196,
                                    "name": "Literal",
                                    "src": "2643:18:0"
                                  }
                                ],
                                "id": 197,
                                "name": "Return",
                                "src": "2636:25:0"
                              }
                            ],
                            "id": 198,
                            "name": "Block",
                            "src": "2622:91:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": ">=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 175,
                                      "type": "uint256",
                                      "value": "_id"
                                    },
                                    "id": 199,
                                    "name": "Identifier",
                                    "src": "2723:3:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "37303230",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 7020",
                                      "value": "7020"
                                    },
                                    "id": 200,
                                    "name": "Literal",
                                    "src": "2730:4:0"
                                  }
                                ],
                                "id": 201,
                                "name": "BinaryOperation",
                                "src": "2723:11:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 179
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "333230303030303030303030303030303030",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 320000000000000000",
                                          "value": "320000000000000000"
                                        },
                                        "id": 202,
                                        "name": "Literal",
                                        "src": "2757:18:0"
                                      }
                                    ],
                                    "id": 203,
                                    "name": "Return",
                                    "src": "2750:25:0"
                                  }
                                ],
                                "id": 204,
                                "name": "Block",
                                "src": "2736:92:0"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": ">=",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 175,
                                          "type": "uint256",
                                          "value": "_id"
                                        },
                                        "id": 205,
                                        "name": "Identifier",
                                        "src": "2838:3:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "34303230",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 4020",
                                          "value": "4020"
                                        },
                                        "id": 206,
                                        "name": "Literal",
                                        "src": "2845:4:0"
                                      }
                                    ],
                                    "id": 207,
                                    "name": "BinaryOperation",
                                    "src": "2838:11:0"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "functionReturnParameters": 179
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "313630303030303030303030303030303030",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 160000000000000000",
                                              "value": "160000000000000000"
                                            },
                                            "id": 208,
                                            "name": "Literal",
                                            "src": "2872:18:0"
                                          }
                                        ],
                                        "id": 209,
                                        "name": "Return",
                                        "src": "2865:25:0"
                                      }
                                    ],
                                    "id": 210,
                                    "name": "Block",
                                    "src": "2851:92:0"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": ">=",
                                          "type": "bool"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 175,
                                              "type": "uint256",
                                              "value": "_id"
                                            },
                                            "id": 211,
                                            "name": "Identifier",
                                            "src": "2953:3:0"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "32303230",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 2020",
                                              "value": "2020"
                                            },
                                            "id": 212,
                                            "name": "Literal",
                                            "src": "2960:4:0"
                                          }
                                        ],
                                        "id": 213,
                                        "name": "BinaryOperation",
                                        "src": "2953:11:0"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "functionReturnParameters": 179
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "hexvalue": "3830303030303030303030303030303030",
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "subdenomination": null,
                                                  "token": "number",
                                                  "type": "int_const 80000000000000000",
                                                  "value": "80000000000000000"
                                                },
                                                "id": 214,
                                                "name": "Literal",
                                                "src": "2987:17:0"
                                              }
                                            ],
                                            "id": 215,
                                            "name": "Return",
                                            "src": "2980:24:0"
                                          }
                                        ],
                                        "id": 216,
                                        "name": "Block",
                                        "src": "2966:92:0"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "operator": ">=",
                                              "type": "bool"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 175,
                                                  "type": "uint256",
                                                  "value": "_id"
                                                },
                                                "id": 217,
                                                "name": "Identifier",
                                                "src": "3068:3:0"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "hexvalue": "31303230",
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "subdenomination": null,
                                                  "token": "number",
                                                  "type": "int_const 1020",
                                                  "value": "1020"
                                                },
                                                "id": 218,
                                                "name": "Literal",
                                                "src": "3075:4:0"
                                              }
                                            ],
                                            "id": 219,
                                            "name": "BinaryOperation",
                                            "src": "3068:11:0"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "functionReturnParameters": 179
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "hexvalue": "3430303030303030303030303030303030",
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "subdenomination": null,
                                                      "token": "number",
                                                      "type": "int_const 40000000000000000",
                                                      "value": "40000000000000000"
                                                    },
                                                    "id": 220,
                                                    "name": "Literal",
                                                    "src": "3102:17:0"
                                                  }
                                                ],
                                                "id": 221,
                                                "name": "Return",
                                                "src": "3095:24:0"
                                              }
                                            ],
                                            "id": 222,
                                            "name": "Block",
                                            "src": "3081:92:0"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                  },
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "operator": ">=",
                                                  "type": "bool"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 175,
                                                      "type": "uint256",
                                                      "value": "_id"
                                                    },
                                                    "id": 223,
                                                    "name": "Identifier",
                                                    "src": "3183:3:0"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "hexvalue": "353230",
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "subdenomination": null,
                                                      "token": "number",
                                                      "type": "int_const 520",
                                                      "value": "520"
                                                    },
                                                    "id": 224,
                                                    "name": "Literal",
                                                    "src": "3190:3:0"
                                                  }
                                                ],
                                                "id": 225,
                                                "name": "BinaryOperation",
                                                "src": "3183:10:0"
                                              },
                                              {
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "functionReturnParameters": 179
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "hexvalue": "3230303030303030303030303030303030",
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": true,
                                                          "lValueRequested": false,
                                                          "subdenomination": null,
                                                          "token": "number",
                                                          "type": "int_const 20000000000000000",
                                                          "value": "20000000000000000"
                                                        },
                                                        "id": 226,
                                                        "name": "Literal",
                                                        "src": "3216:17:0"
                                                      }
                                                    ],
                                                    "id": 227,
                                                    "name": "Return",
                                                    "src": "3209:24:0"
                                                  }
                                                ],
                                                "id": 228,
                                                "name": "Block",
                                                "src": "3195:85:0"
                                              },
                                              {
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "functionReturnParameters": 179
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "hexvalue": "3130303030303030303030303030303030",
                                                          "isConstant": false,
                                                          "isLValue": false,
                                                          "isPure": true,
                                                          "lValueRequested": false,
                                                          "subdenomination": null,
                                                          "token": "number",
                                                          "type": "int_const 10000000000000000",
                                                          "value": "10000000000000000"
                                                        },
                                                        "id": 229,
                                                        "name": "Literal",
                                                        "src": "3307:17:0"
                                                      }
                                                    ],
                                                    "id": 230,
                                                    "name": "Return",
                                                    "src": "3300:24:0"
                                                  }
                                                ],
                                                "id": 231,
                                                "name": "Block",
                                                "src": "3286:89:0"
                                              }
                                            ],
                                            "id": 232,
                                            "name": "IfStatement",
                                            "src": "3179:196:0"
                                          }
                                        ],
                                        "id": 233,
                                        "name": "IfStatement",
                                        "src": "3064:311:0"
                                      }
                                    ],
                                    "id": 234,
                                    "name": "IfStatement",
                                    "src": "2949:426:0"
                                  }
                                ],
                                "id": 235,
                                "name": "IfStatement",
                                "src": "2834:541:0"
                              }
                            ],
                            "id": 236,
                            "name": "IfStatement",
                            "src": "2719:656:0"
                          }
                        ],
                        "id": 237,
                        "name": "IfStatement",
                        "src": "2605:770:0"
                      }
                    ],
                    "id": 238,
                    "name": "IfStatement",
                    "src": "2494:881:0"
                  }
                ],
                "id": 239,
                "name": "Block",
                "src": "2423:958:0"
              }
            ],
            "id": 240,
            "name": "FunctionDefinition",
            "src": "2351:1030:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "10969523",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "setProvenanceHash",
              "overrides": null,
              "scope": 360,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_hash",
                      "overrides": null,
                      "scope": 252,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 241,
                        "name": "ElementaryTypeName",
                        "src": "3456:6:0"
                      }
                    ],
                    "id": 242,
                    "name": "VariableDeclaration",
                    "src": "3456:19:0"
                  }
                ],
                "id": 243,
                "name": "ParameterList",
                "src": "3455:21:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 246,
                "name": "ParameterList",
                "src": "3494:0:0"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 419,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 244,
                    "name": "Identifier",
                    "src": "3484:9:0"
                  }
                ],
                "id": 245,
                "name": "ModifierInvocation",
                "src": "3484:9:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 23,
                              "type": "string storage ref",
                              "value": "METADATA_PROVENANCE_HASH"
                            },
                            "id": 247,
                            "name": "Identifier",
                            "src": "3504:24:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 242,
                              "type": "string memory",
                              "value": "_hash"
                            },
                            "id": 248,
                            "name": "Identifier",
                            "src": "3531:5:0"
                          }
                        ],
                        "id": 249,
                        "name": "Assignment",
                        "src": "3504:32:0"
                      }
                    ],
                    "id": 250,
                    "name": "ExpressionStatement",
                    "src": "3504:32:0"
                  }
                ],
                "id": 251,
                "name": "Block",
                "src": "3494:49:0"
              }
            ],
            "id": 252,
            "name": "FunctionDefinition",
            "src": "3429:114:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "55f804b3",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "setBaseURI",
              "overrides": null,
              "scope": 360,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "baseURI",
                      "overrides": null,
                      "scope": 264,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 253,
                        "name": "ElementaryTypeName",
                        "src": "3603:6:0"
                      }
                    ],
                    "id": 254,
                    "name": "VariableDeclaration",
                    "src": "3603:21:0"
                  }
                ],
                "id": 255,
                "name": "ParameterList",
                "src": "3602:23:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 258,
                "name": "ParameterList",
                "src": "3643:0:0"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 419,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 256,
                    "name": "Identifier",
                    "src": "3633:9:0"
                  }
                ],
                "id": 257,
                "name": "ModifierInvocation",
                "src": "3633:9:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 264,
                              "type": "function (string memory)",
                              "value": "setBaseURI"
                            },
                            "id": 259,
                            "name": "Identifier",
                            "src": "3685:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 254,
                              "type": "string memory",
                              "value": "baseURI"
                            },
                            "id": 260,
                            "name": "Identifier",
                            "src": "3696:7:0"
                          }
                        ],
                        "id": 261,
                        "name": "FunctionCall",
                        "src": "3685:19:0"
                      }
                    ],
                    "id": 262,
                    "name": "ExpressionStatement",
                    "src": "3685:19:0"
                  }
                ],
                "id": 263,
                "name": "Block",
                "src": "3643:68:0"
              }
            ],
            "id": 264,
            "name": "FunctionDefinition",
            "src": "3583:128:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "b66a0e5d",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "startSale",
              "overrides": null,
              "scope": 360,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 265,
                "name": "ParameterList",
                "src": "3767:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 268,
                "name": "ParameterList",
                "src": "3787:0:0"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 419,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 266,
                    "name": "Identifier",
                    "src": "3777:9:0"
                  }
                ],
                "id": 267,
                "name": "ModifierInvocation",
                "src": "3777:9:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 20,
                              "type": "bool",
                              "value": "hasSaleStarted"
                            },
                            "id": 269,
                            "name": "Identifier",
                            "src": "3797:14:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 270,
                            "name": "Literal",
                            "src": "3814:4:0"
                          }
                        ],
                        "id": 271,
                        "name": "Assignment",
                        "src": "3797:21:0"
                      }
                    ],
                    "id": 272,
                    "name": "ExpressionStatement",
                    "src": "3797:21:0"
                  }
                ],
                "id": 273,
                "name": "Block",
                "src": "3787:38:0"
              }
            ],
            "id": 274,
            "name": "FunctionDefinition",
            "src": "3749:76:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "55367ba9",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "pauseSale",
              "overrides": null,
              "scope": 360,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 275,
                "name": "ParameterList",
                "src": "3881:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 278,
                "name": "ParameterList",
                "src": "3901:0:0"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 419,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 276,
                    "name": "Identifier",
                    "src": "3891:9:0"
                  }
                ],
                "id": 277,
                "name": "ModifierInvocation",
                "src": "3891:9:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 20,
                              "type": "bool",
                              "value": "hasSaleStarted"
                            },
                            "id": 279,
                            "name": "Identifier",
                            "src": "3911:14:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 280,
                            "name": "Literal",
                            "src": "3928:5:0"
                          }
                        ],
                        "id": 281,
                        "name": "Assignment",
                        "src": "3911:22:0"
                      }
                    ],
                    "id": 282,
                    "name": "ExpressionStatement",
                    "src": "3911:22:0"
                  }
                ],
                "id": 283,
                "name": "Block",
                "src": "3901:39:0"
              }
            ],
            "id": 284,
            "name": "FunctionDefinition",
            "src": "3863:77:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "853828b6",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "withdrawAll",
              "overrides": null,
              "scope": 360,
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 285,
                "name": "ParameterList",
                "src": "3967:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 288,
                "name": "ParameterList",
                "src": "3995:0:0"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 419,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 286,
                    "name": "Identifier",
                    "src": "3985:9:0"
                  }
                ],
                "id": 287,
                "name": "ModifierInvocation",
                "src": "3985:9:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 289,
                            "name": "Identifier",
                            "src": "4005:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "send",
                                  "referencedDeclaration": null,
                                  "type": "function (uint256) returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "tryCall": false,
                                      "type": "address payable",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address_payable",
                                              "typeString": "address payable"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address payable)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "name": "address",
                                              "stateMutability": "payable",
                                              "type": null
                                            },
                                            "id": 290,
                                            "name": "ElementaryTypeName",
                                            "src": "4013:8:0"
                                          }
                                        ],
                                        "id": 291,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "4013:8:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "sender",
                                          "referencedDeclaration": null,
                                          "type": "address payable"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": -15,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 292,
                                            "name": "Identifier",
                                            "src": "4021:3:0"
                                          }
                                        ],
                                        "id": 293,
                                        "name": "MemberAccess",
                                        "src": "4021:10:0"
                                      }
                                    ],
                                    "id": 294,
                                    "name": "FunctionCall",
                                    "src": "4013:19:0"
                                  }
                                ],
                                "id": 295,
                                "name": "MemberAccess",
                                "src": "4013:24:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "balance",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "tryCall": false,
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_contract$_CMNFT_$360",
                                              "typeString": "contract CMNFT"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "name": "address",
                                              "type": null
                                            },
                                            "id": 296,
                                            "name": "ElementaryTypeName",
                                            "src": "4038:7:0"
                                          }
                                        ],
                                        "id": 297,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "4038:7:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": -28,
                                          "type": "contract CMNFT",
                                          "value": "this"
                                        },
                                        "id": 298,
                                        "name": "Identifier",
                                        "src": "4046:4:0"
                                      }
                                    ],
                                    "id": 299,
                                    "name": "FunctionCall",
                                    "src": "4038:13:0"
                                  }
                                ],
                                "id": 300,
                                "name": "MemberAccess",
                                "src": "4038:21:0"
                              }
                            ],
                            "id": 301,
                            "name": "FunctionCall",
                            "src": "4013:47:0"
                          }
                        ],
                        "id": 302,
                        "name": "FunctionCall",
                        "src": "4005:56:0"
                      }
                    ],
                    "id": 303,
                    "name": "ExpressionStatement",
                    "src": "4005:56:0"
                  }
                ],
                "id": 304,
                "name": "Block",
                "src": "3995:73:0"
              }
            ],
            "id": 305,
            "name": "FunctionDefinition",
            "src": "3947:121:0"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "a40f1aa5",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "reserveGiveaway",
              "overrides": null,
              "scope": 360,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "numCMLot",
                      "overrides": null,
                      "scope": 359,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 306,
                        "name": "ElementaryTypeName",
                        "src": "4099:7:0"
                      }
                    ],
                    "id": 307,
                    "name": "VariableDeclaration",
                    "src": "4099:16:0"
                  }
                ],
                "id": 308,
                "name": "ParameterList",
                "src": "4098:18:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 311,
                "name": "ParameterList",
                "src": "4134:0:0"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 419,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 309,
                    "name": "Identifier",
                    "src": "4124:9:0"
                  }
                ],
                "id": 310,
                "name": "ModifierInvocation",
                "src": "4124:9:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        313
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "currentSupply",
                          "overrides": null,
                          "scope": 358,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 312,
                            "name": "ElementaryTypeName",
                            "src": "4144:4:0"
                          }
                        ],
                        "id": 313,
                        "name": "VariableDeclaration",
                        "src": "4144:18:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1170,
                              "type": "function () view returns (uint256)",
                              "value": "totalSupply"
                            },
                            "id": 314,
                            "name": "Identifier",
                            "src": "4165:11:0"
                          }
                        ],
                        "id": 315,
                        "name": "FunctionCall",
                        "src": "4165:13:0"
                      }
                    ],
                    "id": 316,
                    "name": "VariableDeclarationStatement",
                    "src": "4144:34:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_5dda4b13c71f7c5b51b38af1ec8f335a9ddbd87240db17c4797d2d27b816cf31",
                                  "typeString": "literal_string \"Exceeded giveaway supply\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 317,
                            "name": "Identifier",
                            "src": "4188:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "add",
                                      "referencedDeclaration": 721,
                                      "type": "function (uint256,uint256) pure returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "arguments": [
                                            null
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "tryCall": false,
                                          "type": "uint256",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                null
                                              ],
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1170,
                                              "type": "function () view returns (uint256)",
                                              "value": "totalSupply"
                                            },
                                            "id": 318,
                                            "name": "Identifier",
                                            "src": "4196:11:0"
                                          }
                                        ],
                                        "id": 319,
                                        "name": "FunctionCall",
                                        "src": "4196:13:0"
                                      }
                                    ],
                                    "id": 320,
                                    "name": "MemberAccess",
                                    "src": "4196:17:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 307,
                                      "type": "uint256",
                                      "value": "numCMLot"
                                    },
                                    "id": 321,
                                    "name": "Identifier",
                                    "src": "4214:8:0"
                                  }
                                ],
                                "id": 322,
                                "name": "FunctionCall",
                                "src": "4196:27:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "3230",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 20",
                                  "value": "20"
                                },
                                "id": 323,
                                "name": "Literal",
                                "src": "4227:2:0"
                              }
                            ],
                            "id": 324,
                            "name": "BinaryOperation",
                            "src": "4196:33:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "457863656564656420676976656177617920737570706c79",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Exceeded giveaway supply\"",
                              "value": "Exceeded giveaway supply"
                            },
                            "id": 325,
                            "name": "Literal",
                            "src": "4231:26:0"
                          }
                        ],
                        "id": 326,
                        "name": "FunctionCall",
                        "src": "4188:70:0"
                      }
                    ],
                    "id": 327,
                    "name": "ExpressionStatement",
                    "src": "4188:70:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_80a6ed2a2d761f9e74dba4f5dfd4e0aa8e6a5cde6d7f29c656cea668e6dcf6a9",
                                  "typeString": "literal_string \"Sale has already started\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 328,
                            "name": "Identifier",
                            "src": "4268:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 20,
                                  "type": "bool",
                                  "value": "hasSaleStarted"
                                },
                                "id": 329,
                                "name": "Identifier",
                                "src": "4276:14:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "66616c7365",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "false"
                                },
                                "id": 330,
                                "name": "Literal",
                                "src": "4294:5:0"
                              }
                            ],
                            "id": 331,
                            "name": "BinaryOperation",
                            "src": "4276:23:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "53616c652068617320616c72656164792073746172746564",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Sale has already started\"",
                              "value": "Sale has already started"
                            },
                            "id": 332,
                            "name": "Literal",
                            "src": "4301:26:0"
                          }
                        ],
                        "id": 333,
                        "name": "FunctionCall",
                        "src": "4268:60:0"
                      }
                    ],
                    "id": 334,
                    "name": "ExpressionStatement",
                    "src": "4268:60:0"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        336
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "mutability": "mutable",
                          "name": "index",
                          "overrides": null,
                          "scope": 358,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 335,
                            "name": "ElementaryTypeName",
                            "src": "4338:7:0"
                          }
                        ],
                        "id": 336,
                        "name": "VariableDeclaration",
                        "src": "4338:13:0"
                      }
                    ],
                    "id": 337,
                    "name": "VariableDeclarationStatement",
                    "src": "4338:13:0"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 336,
                                  "type": "uint256",
                                  "value": "index"
                                },
                                "id": 338,
                                "name": "Identifier",
                                "src": "4435:5:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 339,
                                "name": "Literal",
                                "src": "4443:1:0"
                              }
                            ],
                            "id": 340,
                            "name": "Assignment",
                            "src": "4435:9:0"
                          }
                        ],
                        "id": 341,
                        "name": "ExpressionStatement",
                        "src": "4435:9:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 336,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 342,
                            "name": "Identifier",
                            "src": "4446:5:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 307,
                              "type": "uint256",
                              "value": "numCMLot"
                            },
                            "id": 343,
                            "name": "Identifier",
                            "src": "4454:8:0"
                          }
                        ],
                        "id": 344,
                        "name": "BinaryOperation",
                        "src": "4446:16:0"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 336,
                                  "type": "uint256",
                                  "value": "index"
                                },
                                "id": 345,
                                "name": "Identifier",
                                "src": "4464:5:0"
                              }
                            ],
                            "id": 346,
                            "name": "UnaryOperation",
                            "src": "4464:7:0"
                          }
                        ],
                        "id": 347,
                        "name": "ExpressionStatement",
                        "src": "4464:7:0"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        1482,
                                        1511
                                      ],
                                      "referencedDeclaration": 1482,
                                      "type": "function (address,uint256)",
                                      "value": "_safeMint"
                                    },
                                    "id": 348,
                                    "name": "Identifier",
                                    "src": "4487:9:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        null
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "tryCall": false,
                                      "type": "address",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            null
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 405,
                                          "type": "function () view returns (address)",
                                          "value": "owner"
                                        },
                                        "id": 349,
                                        "name": "Identifier",
                                        "src": "4497:5:0"
                                      }
                                    ],
                                    "id": 350,
                                    "name": "FunctionCall",
                                    "src": "4497:7:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "+",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 313,
                                          "type": "uint256",
                                          "value": "currentSupply"
                                        },
                                        "id": 351,
                                        "name": "Identifier",
                                        "src": "4506:13:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 336,
                                          "type": "uint256",
                                          "value": "index"
                                        },
                                        "id": 352,
                                        "name": "Identifier",
                                        "src": "4522:5:0"
                                      }
                                    ],
                                    "id": 353,
                                    "name": "BinaryOperation",
                                    "src": "4506:21:0"
                                  }
                                ],
                                "id": 354,
                                "name": "FunctionCall",
                                "src": "4487:41:0"
                              }
                            ],
                            "id": 355,
                            "name": "ExpressionStatement",
                            "src": "4487:41:0"
                          }
                        ],
                        "id": 356,
                        "name": "Block",
                        "src": "4473:66:0"
                      }
                    ],
                    "id": 357,
                    "name": "ForStatement",
                    "src": "4430:109:0"
                  }
                ],
                "id": 358,
                "name": "Block",
                "src": "4134:411:0"
              }
            ],
            "id": 359,
            "name": "FunctionDefinition",
            "src": "4074:471:0"
          }
        ],
        "id": 360,
        "name": "ContractDefinition",
        "src": "222:4329:0"
      }
    ],
    "id": 361,
    "name": "SourceUnit",
    "src": "33:4518:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.0+commit.9e61f92b.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xaFc907fab0Bd7EA2a6fC11CDf4738690b1eD2259",
      "transactionHash": "0x322517522ae705133a0b549e57d42a096674b8e88ca3bcefa221463120867ac6"
    }
  },
  "schemaVersion": "3.4.1",
  "updatedAt": "2021-05-22T14:16:06.361Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "baseURI()": {
        "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenByIndex(uint256)": {
        "details": "See {IERC721Enumerable-tokenByIndex}."
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
      },
      "tokenURI(uint256)": {
        "details": "See {IERC721Metadata-tokenURI}."
      },
      "totalSupply()": {
        "details": "See {IERC721Enumerable-totalSupply}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}

]