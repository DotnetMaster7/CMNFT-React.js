import React, {useEffect, useState} from 'react';
import Web3 from 'web3';


function Metamask(){
    const [flag, setFlag] = useState(false);

    useEffect(async()=>{
        var web3 = new Web3();
        if(typeof window !== "undefined"){
            if(window.ethereum){
                web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
            }
        }
    });

    const handleConnect = () =>{
        console.log("connect");
        if(typeof window !== "undefined"){
            if (window.ethereum) {
                console.log("good");
                if(!flag)
                    window.ethereum.enable().then((res)=> {
                        setFlag(true);
                        window.location.reload();
                    })
                }
            else{
                alert("you have to install metamask!")
            }
        }
    }
    
    return(
        <div align="center">
            <label style={{fontSize: 30, marginRight:50}}>Metamask Connect :  </label>
            <button type="button" className="btn btn-xl btn-success" onClick = {handleConnect}>
                {flag?"Connected":"connect"}
            </button>
        </div>
    )
}

export default Metamask;