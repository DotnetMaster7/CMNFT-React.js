import React, { Component, useState } from 'react';
//
import './App.css';
//
import Web3 from 'web3';
import { CMNFTAbi } from './abi/abis';
//
import Banner from './parts/Banner';
import CrytomorialNFT from './parts/CrytomorialNFT';
import WhyCMNFT from './parts/WhyCMNFT';
import WhatIsCMNFT from './parts/WhatIsCMNFT';
import TokenSale from './parts/TokenSale';
import Button from "./parts/Button";
import DuringTheSale from './parts/DuringTheSale';
import ConnectWithCM from './parts/ConnectWithCM';
import Copyright from './parts/Copyright';
import Wallets from './parts/Wallets';

function App() {

return (

  <div id="parent">
        <Banner />{/* checked 23/05/2021 */}
        <CrytomorialNFT />{/* checked 23/05/2021 */}
        <Wallets />{/* checked 23/05/2021 */}
        <WhyCMNFT />{/* checked 23/05/2021 */}
        <WhatIsCMNFT />{/* checked 23/05/2021 */}
        <TokenSale />{/* checked 23/05/2021 */}
        <Button /> 
        <DuringTheSale />{/* checked 23/05/2021 */}
        <ConnectWithCM />{/* checked */}
        <Copyright />

    </div>

  );
}

export default App;
