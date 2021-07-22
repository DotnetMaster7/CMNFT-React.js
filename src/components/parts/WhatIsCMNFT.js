import React, { Component } from 'react';
import WhatIsCMNFTDesktop from './desktop-view/WhatIsCMNFTDesktop';
import WhatIsCMNFTMobile from './mobile-view/WhatIsCMNFTMobile';
import WhatIsCMNFTIpad from './ipad-view/WhatIsCMNFTIpad';

class WhatIsCMNFT extends Component {  
  render() {
    return(

        <div id="Parent-WhatIsCMNFT">
        <div className="container-fluid alert alert-light-blue">
          <div className="row">
            <div className="col-1"></div>
                <div className="col-10">
            
                    {/* View of Desktop Ipad */}
                        
                    <div className="container-fluid d-none d-lg-block">

                        <WhatIsCMNFTDesktop />

                    </div>

                        { /* View of IPAD Vertical */ }
            
                    <div className="d-none d-xs-none d-sm-none d-md-block d-lg-none d-xl-none">

                        <WhatIsCMNFTIpad />

                    </div>

                        { /* View of Mobile */ }
                    <div className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"> 

                        <WhatIsCMNFTMobile /> 

                    </div>

        </div>
    <div className="col-1"></div>
</div></div>

</div>


		)}
}
export default WhatIsCMNFT;
