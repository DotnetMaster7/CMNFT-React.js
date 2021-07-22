import React, {useEffect, useState} from 'react';
import Web3Modal from "web3modal";
import Web3 from "web3";

import WalletConnectProvider from "@walletconnect/web3-provider";
// @ts-ignore
import Fortmatic from "fortmatic";
import Torus from "@toruslabs/torus-embed";
import Authereum from "authereum";
import { apiGetAccountAssets } from "./helpers/api";

function initWeb3(provider) {
    var web3 = new Web3(provider);
  
    web3.eth.extend({
      methods: [
        {
          name: "chainId",
          call: "eth_chainId",
          outputFormatter: web3.utils.hexToNumber
        }
      ]
    });
  
    return web3;
}

class WalletModal extends React.Component {

    web3Modal = new Web3Modal();

    constructor(props) {
        super(props);

        this.web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
            providerOptions: this.getProviderOptions()
          });
    }

    onConnect = async () => {
        const provider = await this.web3Modal.connect();
    
        await this.subscribeProvider(provider);
    
        const web3 = initWeb3(provider);
    
        const accounts = await web3.eth.getAccounts();

        const address = accounts[0];

        alert("selected wallet address " + address);

        const networkId = await web3.eth.net.getId();

        const chainId = await web3.eth.chainId();

        await this.setState({
        web3,
        provider,
        connected: true,
        address,
        chainId,
        networkId
        });
        await this.getAccountAssets();
      };

      resetApp = async () => {
        const { web3 } = this.state;
        if (web3 && web3.currentProvider && web3.currentProvider.close) {
          await web3.currentProvider.close();
        }
        await this.web3Modal.clearCachedProvider();
        alert("wallet disconnected!");
        // this.setState({ ...INITIAL_STATE });
      };

      subscribeProvider = async (provider) => {
        if (!provider.on) {
          return;
        }
        provider.on("close", () => this.resetApp());
        provider.on("accountsChanged", async (accounts) => {
          await this.setState({ address: accounts[0] });
          await this.getAccountAssets();
        });
        provider.on("chainChanged", async (chainId) => {
          const { web3 } = this.state;
          const networkId = await web3.eth.net.getId();
          await this.setState({ chainId, networkId });
          await this.getAccountAssets();
        });
    
        provider.on("networkChanged", async (networkId) => {
          const { web3 } = this.state;
          const chainId = await web3.eth.chainId();
          await this.setState({ chainId, networkId });
          await this.getAccountAssets();
        });
      };

    getProviderOptions = () => {
        const providerOptions = {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: process.env.REACT_APP_INFURA_ID
            }
          },
          torus: {
            package: Torus
          },
          fortmatic: {
            package: Fortmatic,
            options: {
              key: process.env.REACT_APP_FORTMATIC_KEY
            }
          },
          authereum: {
            package: Authereum
          }
        };
        return providerOptions;
    };

    getAccountAssets = async () => {
        const { address, chainId } = this.state;
        this.setState({ fetching: true });
        try {
          // get account balances
          const assets = await apiGetAccountAssets(address, chainId);
    
          await this.setState({ fetching: false, assets });
        } catch (error) {
          console.error(error); // tslint:disable-line
          await this.setState({ fetching: false });
        }
    };

    render() {
      return (
          <div align="center">
            <button type="button" className="btn btn-xl btn-success m-3" onClick={this.onConnect}>Connect Wallet</button>
            <button type="button" className="btn btn-xl btn-success" onClick={this.resetApp}>Disconnect Wallet</button>
        </div>
      );
    };
  }

  export default WalletModal;