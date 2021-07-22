
import React, { Component } from 'react';
class Banner extends Component {  
  render() {
  return (

   <div id="Parent-Banner" >

   <a id = "top"></a>

   {/* View of Desktop Ipad */}

   <div className="container-fluid d-none d-lg-block" id="banner-div-black">
   
        <img src = "https://app.cryptomorial.io/cm-header-v4.png" className="img-fluid" id="banner-div-black" alt="Cryptomorial NFT"></img>
  
   </div>

    { /* View of IPAD Vertical */ }
    <div className="d-none d-xs-none d-sm-none d-md-block d-lg-none d-xl-none" align="center" id="banner-div-black">

        <img src = "https://app.cryptomorial.io/cm-mobile-header-v3.png" width="600" id="banner-div-black" alt="Cryptomorial NFT"></img>

    </div> { /* end ipad */ }


	 { /* View of Mobile */ }
    <div className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none" id="banner-div-black"> 
		    
        <img src = "https://app.cryptomorial.io/cm-mobile-header-v3.png" className="img-fluid" id="banner-div-black" alt="Cryptomorial NFT"></img>
	  
    </div>
	

	</div>
	)}

  	
}
export default Banner;
