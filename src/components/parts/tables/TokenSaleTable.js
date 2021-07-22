
import React, { Component } from 'react';

class TokenSaleTable extends Component { 

    render() {
    return(

<div id="TokenSale-Table">
<table className="table table-sm table-hover">
   <thead className="thead-dark">
    <tr align="center">
      <th scope="col" id="p-white-30">From #</th>
      <th scope="col" id="p-white-30">To #</th>
      <th scope="col" id="p-white-30">Total #</th>
      <th scope="col" id="p-white-30">Eth Price (Per)</th>
    </tr>
  </thead>
  <tbody>
    
    <tr align="center">
      <th scope="row" id="p-red-30"><strike>0</strike></th>
      <th scope="row" id="p-red-30"><strike>19</strike></th>
      <th scope="row" id="p-red-30"><strike>20</strike></th>
      <th scope="row" id="p-red-30"><strike>Project Owned</strike></th>
    </tr>

    <tr align="center">
      <th scope="row" id="p-black-30">20</th>
      <th scope="row" id="p-black-30">519</th>
      <th scope="row" id="p-black-30">500</th>
      <th scope="row" id="p-black-30">0.01</th>
    </tr>

  <tr align="center">
      <th scope="row" id="p-black-30">520</th>
      <th scope="row" id="p-black-30">1,019</th>
      <th scope="row" id="p-black-30">500</th>
      <th scope="row" id="p-black-30">0.02</th>
    </tr>
    
 <tr align="center">
      <th scope="row" id="p-black-30">1,020</th>
      <th scope="row" id="p-black-30">2,019</th>
      <th scope="row" id="p-black-30">1,000</th>
      <th scope="row" id="p-black-30">0.04</th>
     
    </tr>

    <tr align="center">
      <th scope="row" id="p-black-30">2,020</th>
      <th scope="row" id="p-black-30">4,019</th>
      <th scope="row" id="p-black-30">2,000</th>
      <th scope="row" id="p-black-30">0.08</th>

    </tr>

    <tr align="center">
      <th scope="row" id="p-black-30">4,020</th>
      <th scope="row" id="p-black-30">7,019</th>
      <th scope="row" id="p-black-30">3,000</th>
      <th scope="row" id="p-black-30">0.16</th>

    </tr>

    <tr align="center">
      <th scope="row" id="p-black-30">7,020</th>
      <th scope="row" id="p-black-30">9,019</th>
      <th scope="row" id="p-black-30">2,000</th>
      <th scope="row" id="p-black-30">0.32</th>
  
     </tr>
    
    <tr align="center">
      <th scope="row" id="p-black-30">9,020</th>
      <th scope="row" id="p-black-30">9,949</th>
      <th scope="row" id="p-black-30">930</th>
      <th scope="row" id="p-black-30">0.64</th>
    </tr>
   

    <tr align="center">
      <th scope="row" id="p-black-30">9,950</th>
      <th scope="row" id="p-black-30">9,999</th>
      <th scope="row" id="p-black-30">50</th>
      <th scope="row" id="p-black-30">1</th>
     </tr>

   <tr align="center">
      <th scope="row" id="p-black-30"></th>
     <th scope="row" id="p-red-30">Total Tokens</th>
      <th scope="row" id="p-red-30">10,0000</th>
      <th scope="row" id="p-black-30"></th>
     </tr>

  </tbody>
</table> 
</div>

          )}
}
export default TokenSaleTable;