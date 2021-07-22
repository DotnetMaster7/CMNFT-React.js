import React, {useEffect, useState} from 'react';
import OpenLogin from "@toruslabs/openlogin";
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";

const VERIFIER = {
    loginProvider: "google", // "facebook", "apple", "twitter", "reddit", etc. See full list of supported logins: https://docs.tor.us/direct-auth/supported-authenticators-verifiers
    clientId: "BASAoKXdVwV7lzYe8K4bym2ivYKw7qb3ngB-IKIRwSX9NPVZGnxL93ZB-nmPC4Dg7OrJl_CtreHG-PFj84mCyZM",
  }
  
  function TorusWallet() {
    const [flag, setFlag] = useState(false);
    const [isLoading, setLoading] = useState(true);
  
    const [openlogin, setOpenLogin] = useState();
    const [privKey, setPrivKey] = useState();
  
    const onMount = async () => {
      setLoading(true);
  
      try {
        const openlogin = new OpenLogin({
          clientId: VERIFIER.clientId,
          network: "testnet" // valid values (testnet or mainnet)
        });
        setOpenLogin(openlogin);
  
        await openlogin.init();
        setPrivKey(openlogin.privKey);
      } finally {
        setLoading(false);
      }
    };
  
    const handleConnect = async () => {
        setLoading(false);

        const torus = new Torus();
        await torus.init();
        await torus.login(); // await torus.ethereum.enable()
        const web3 = new Web3(torus.provider);
        if (isLoading || privKey) return;
    };
  
    useEffect(() => {
      onMount();
    }, []);
  
    if(isLoading) return <div>Loading...</div>;
    return privKey ? (<div>Logged in: {privKey}</div>) : (
      <div align="center">
            <label style={{fontSize: 30, marginRight:50}}>Torus Connect :  </label>
            <button type="button" className="btn btn-xl btn-success" onClick = {handleConnect}>
                {flag?"Connected":"connect"}
            </button>
        </div>
    );
  }

  export default TorusWallet;