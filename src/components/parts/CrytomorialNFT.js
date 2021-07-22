
import React, { Component } from 'react';
import CryptomorialDesktop from './desktop-view/CryptomorialDesktop';
import CryptomorialMobile from  './mobile-view/CryptomorialMobile';
import CryptomorialIpad from  './ipad-view/CryptomorialIpad';

class CrytomorialNFT extends Component {  
  render() {
    return(

    <div id="Parent-CryptomorialNFT">
    
    <div className="container-fluid alert alert-light-gold">
      <div className="row">
        <div className="col-1"></div>
            <div className="col-10">


                {/* View of Desktop Ipad */}
                <div className="container-fluid d-none d-lg-block">

                    <CryptomorialDesktop />

                </div> { /* end desktop */ }


                { /* View of IPAD Vertical */ }
    
                <div className="d-none d-xs-none d-sm-none d-md-block d-lg-none d-xl-none">

                    <CryptomorialIpad />

                </div> { /* end ipad */ }


                { /* View of Mobile */ }
                <div className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"> 

                    <CryptomorialMobile />
                
                </div>

            </div>
        <div className="col-1"></div>
        <br />

      </div></div></div>

		)}
}
export default CrytomorialNFT;