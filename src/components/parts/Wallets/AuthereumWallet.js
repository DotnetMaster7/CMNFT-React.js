import React, {useEffect, useState} from 'react';
import Authereum from 'authereum'
import Web3 from 'web3';


function AuthereumWallet(){
    const [flag, setFlag] = useState(false);

    const handleConnect = () =>{
        const authereum = new Authereum('mainnet');
        const provider = authereum.getProvider();
        const web3 = new Web3(provider);

        provider.enable();
    }

    return(
        <div align="center">
            <label style={{fontSize: 30, marginRight:50}}>Authereum Connect :  </label>
            <button type="button" className="btn btn-xl btn-success" onClick = {handleConnect}>
                {flag?"Connected":"connect"}
            </button>
        </div>
    )
}

export default AuthereumWallet;