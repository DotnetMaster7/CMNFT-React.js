import React, {useEffect, useState} from 'react';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';


function FortmaticWallet(){
    const [flag, setFlag] = useState(false);

    const handleConnect = () =>{
        const fm = new Fortmatic('pk_test_EB0C9759BFF37868');
        var web3 = new Web3(fm.getProvider());

        fm.user.login().then(() => {
            web3.eth.getAccounts().then(console.log); // ['0x...']
        });
    }

    return(
        <div align="center">
            <label style={{fontSize: 30, marginRight:50}}>Fortmatic Connect :  </label>
            <button type="button" className="btn btn-xl btn-success" onClick = {handleConnect}>
                {flag?"Connected":"connect"}
            </button>
        </div>
    )
}

export default FortmaticWallet;