import React, { Component } from 'react';
import TokenSaleTable from './tables/TokenSaleTable';

class TokenSale extends Component {  

  render() {
    return(

<div id="TokenSaleTable">
<a id = "tokensale"></a>
<div className="container-fluid alert">
<p id = "p-blue-60" align="center"><strong>Token Sale (CMNFT)</strong></p>

<p id = "p-black-30" align="center"><strong>CMNFT</strong> tokens are limited to 10,000 with <strong>9,980</strong> available for sale. </p>
              
<p id = "p-black-30" align="center"> Smart Contact Address =&gt; <strong>
   <a href="https://etherscan.io/address/xx" target="_blank" rel="noopener noreferrer">cmnft.cryptomorial.eth </a></strong> </p> 

<br />

</div>

        <TokenSaleTable />

<br />

</div>

     		)}
}
export default TokenSale;