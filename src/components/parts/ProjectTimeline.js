
import React, { Component } from 'react';
class ProjectTimeline extends Component { 

    render() {
    return(
      
      <div id="ProjectTimeline">

      <div className="container-fluid alert alert-light-blue">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">

                {/* View of Desktop Ipad */}
                <div className="container-fluid d-none d-lg-block">

                <p id = "p-blue-60" align="center"><strong>Project Timeline and Goals</strong></p>



                </div>


                { /* View of IPAD Vertical */ }
    
                <div className="d-none d-xs-none d-sm-none d-md-block d-lg-none d-xl-none">


                </div>

                { /* View of Mobile */ }
                <div className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"> 



                </div>
            
            </div>
          <div className="col-1"></div>

      </div></div>

      </div>

      		)}
}
export default ProjectTimeline;