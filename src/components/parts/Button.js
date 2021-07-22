
import React, { Component } from 'react';
import Web3 from 'web3';
import { CMNFTAbi } from '../abi/abis';

const web3 = new Web3(Web3.givenProvider);

const contractAddr = '0x599D95F8186690635901f8900aCC1960c1774f77';
const CMNFTContract = new web3.eth.Contract(CMNFTAbi, contractAddr);

class Button extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      tokenPrice : 0,
      mintNFTNumber : 1
    }
  }

  componentDidMount = async() => {
    const result = await CMNFTContract.methods.calculatePrice().call();
    this.setState({tokenPrice : web3.utils.fromWei(result, 'ether')});
  }

  handleGet = async (e) => {
    e.preventDefault();
    const result = await CMNFTContract.methods.totalSupply().call();
    console.log(result);
  }

  MintCMNFT = async (e) => {
    e.preventDefault();
    const number = this.state.mintNFTNumber;
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    console.log(number);

    // using the promise
    // await web3.eth.sendTransaction({
    //   from: account,
    //   to: '0xFf4e89Fb1d2D2792f790f989086F908aC4dBa6A8',
    //   value: 1000000000000000000 * this.state.tokenPrice * this.state.mintNFTNumber
    // });

    // console.log("account:" + account);
    // const gas = await CMNFTContract.methods.mintCMNFT(number).estimateGas();
    // const realNeedPayPrice = gas + number * this.state.tokenPrice;

    const realNeedPayPrice = 1000000000000000000 * this.state.tokenPrice * this.state.mintNFTNumber
    
    const result = await CMNFTContract.methods.mintCMNFT(number).send({
      from: account,
      to: contractAddr,
      value: realNeedPayPrice
    })
    console.log(result);
  }

  OnMintNumChange = async (e) => {
    e.preventDefault();
    this.setState({mintNFTNumber : e.target.value});
  }

  render() {
  return (

   <div id="Parent-Button" >

   <br />

   <div className = "container alert alert-light-blue">

   		{/* <p id = "p-black-40" align="center"><strong>Add Button here</strong></p> */}
       <div align="center">
            <select className="form-control" style={{display: 'inline', width:200, marginRight: 50}} onChange={this.OnMintNumChange} id="mintNFTNumber">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <button type="button" className="btn btn-xl btn-success" onClick={this.MintCMNFT}>
              <strong>{this.state.tokenPrice * this.state.mintNFTNumber} ETH</strong>
            </button>
        </div>
   </div>

   </div>

	)}

  	
}
export default Button;