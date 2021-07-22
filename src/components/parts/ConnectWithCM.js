
import React, { Component } from 'react';
import ConnectWithCMDesktop from './desktop-view/ConnectWithCMDesktop';
import ConnectWithCMMobile from './mobile-view/ConnectWithCMMobile';
import ConnectWithCMIpad from './ipad-view/ConnectWithCMIpad';

//import { FaDiscord } from 'react-icons/fa';
//import { FaTwitter } from 'react-icons/fa';
//import { FaLinkedin } from 'react-icons/fa';

//const Discord = <FaDiscord icon="{FaDiscord}" size = "140" id="discord"/>;
//const Twitter = <FaTwitter icon="{FaTwitter}" size = "140" id="twitter"/>;
//const Linkedin = <FaLinkedin icon="{FaLinkedin}" size = "140" id="linkedin"/>;

//const Discord = <FaDiscord icon="{FaDiscord}" size = "140" id="discord"/>;
//const Twitter = <FaTwitter icon="{FaTwitter}" size = "140" id="twitter"/>;

// Font awesome pixel sizes relative to the multiplier. 
// 1x - 14px
// 2x - 28px
// 3x - 42px
// 4x - 56px
// 5x - 70px


class ConnectWithCM extends Component {  
  render() {
    return(

    <div id="Parent-ConnectWithCM"> 
            
            <a id="connect"></a>

            {/* View of Desktop Ipad */}
            <div className="container-fluid d-none d-lg-block">

                <ConnectWithCMDesktop />                

            </div>

            { /* View of IPAD Vertical */ }
    
            <div className="d-none d-xs-none d-sm-none d-md-block d-lg-none d-xl-none">

                 <ConnectWithCMIpad />           
            
            </div>

            { /* View of Mobile */ }
            
            <div className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"> 

                <ConnectWithCMMobile />          

            </div>
    
    </div>

		)}
}
export default ConnectWithCM;