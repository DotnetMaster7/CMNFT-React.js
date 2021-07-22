import React, { Component } from 'react';

import WhyCMNFTDesktop from './desktop-view/WhyCMNFTDesktop';
import WhyCMNFTMobile from './mobile-view/WhyCMNFTMobile';
import WhyCMNFTIpad from './ipad-view/WhyCMNFTIpad';

class WhyCMNFT extends Component {  
  render() {
    return(

<div id="Parent-WhyCMNFT">
<div className="container-fluid">
  <div className="row">
    <div className="col-1"></div>
    <div className="col-10">


    {/* View of Desktop Ipad */}
    <div className="container-fluid d-none d-lg-block">
    
            <WhyCMNFTDesktop />

    </div>

    { /* View of IPAD Vertical */ }
    
    <div className="d-none d-xs-none d-sm-none d-md-block d-lg-none d-xl-none">

            <WhyCMNFTIpad />

    </div>

    { /* View of Mobile */ }
    <div className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"> 

            <WhyCMNFTMobile />

    </div>

    </div>
    <div className="col-1"></div>
</div></div>

</div>


		)}
}
export default WhyCMNFT;
