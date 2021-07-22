import React, {useEffect, useState} from 'react';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";


function Wallet_Connect(){
    const [flag, setFlag] = useState(false);
    const handleConnect = () =>{
        // Create a connector
        const connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org", // Required
            qrcodeModal: QRCodeModal,
        });
        
        // Check if connection is already established
        if (!connector.connected) {
            // create new session
            connector.createSession();
        }
        
        // Subscribe to connection events
        connector.on("connect", (error, payload) => {
            if (error) {
            throw error;
            }
        
            // Get provided accounts and chainId
            const { accounts, chainId } = payload.params[0];
        });
        
        connector.on("session_update", (error, payload) => {
            if (error) {
            throw error;
            }
        
            // Get updated accounts and chainId
            const { accounts, chainId } = payload.params[0];
        });
        
        connector.on("disconnect", (error, payload) => {
            if (error) {
            throw error;
            }
        
            // Delete connector
        });
    }
    return(
        <div align="center">
            <label style={{fontSize: 30, marginRight:50}}>WalletConnect Connect :  </label>
            <button type="button" className="btn btn-xl btn-success" onClick = {handleConnect}>
                {flag?"Connected":"connect"}
            </button>
        </div>
    )
}

export default Wallet_Connect;