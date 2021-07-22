import React, {useEffect, useState} from 'react';
import Metamask from './Wallets/Metamask';
import Wallet_Connect from './Wallets/Wallet_Connect';
import TorusWallet from './Wallets/TorusWallet';
import FortmaticWallet from './Wallets/FortmaticWallet';
import AuthereumWallet from './Wallets/AuthereumWallet';
import WalletModal from './WalletModal';

function Wallets(){
    return(
        <div>
            <WalletModal />
        </div>
    )
}

export default Wallets;