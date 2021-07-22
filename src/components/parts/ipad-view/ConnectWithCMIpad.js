
import React, { Component } from 'react';

import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Discord = <FaDiscord icon="{FaDiscord}" size = "100" id="discord"/>;
const Twitter = <FaTwitter icon="{FaTwitter}" size = "100" id="twitter"/>;
const Linkedin = <FaLinkedin icon="{FaLinkedin}" size = "100" id="linkedin"/>;

//const Discord = <FaDiscord icon="{FaDiscord}" size = "140" id="discord"/>;
//const Twitter = <FaTwitter icon="{FaTwitter}" size = "140" id="twitter"/>;

// Font awesome pixel sizes relative to the multiplier. 
// 1x - 14px
// 2x - 28px
// 3x - 42px
// 4x - 56px
// 5x - 70px



class ConnectWithCMIpad extends Component {  
  render() {
    return(

<div id="Parent-ConnectWithCMIpad">

<div id="parent" className="container-fluid">
<p id = "p-blue-40" align="center"><strong>Connect with CM</strong></p>

<br />
<div className="container-fluid alert" align="center">
  <div className="row">
    <div className="col-4">
    
    <a href="https://discord.gg/AEQNGeAy7t" target="_blank" rel="noopener noreferrer">{Discord}</a>
    <br />
    </div>
  
    <div className="col-4">
    <a href="https://www.twitter.com/Cryptomorial" target="_blank" rel="noopener noreferrer">{Twitter}</a>
    <br />
    </div>

    <div className="col-4">
    <a href="https://www.linkedin.com/in/daveronin/" target="_blank" rel="noopener noreferrer">{Linkedin}</a>
    <br />
    
    </div>

  </div></div>

<br />
</div>

</div>
 		)}
}
export default ConnectWithCMIpad;